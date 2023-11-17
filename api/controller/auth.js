import db from "../connect.js"
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"

export const register = async(req,res) => {
    console.log("registering...")


    const q = "SELECT * FROM users WHERE username = ?"

    try{
        db.query(q, [req.body.username], (error,rows,fields) => {
            if(error){
                console.log("error: " + error)
                return res.status(500).json(error)
            }
            if(rows.length > 0){
                console.log("user exists ")
                return res.status(409).json(`User ${rows[0].email} exists`)
            }
            else{
                console.log("user not yet created... ")
                const salt = bcrypt.genSaltSync(10)
                const hash = bcrypt.hashSync(req.body.password, salt)

                const insertQ = "INSERT INTO users VALUES(?)"
                db.query(insertQ, [[null, req.body.firstname, req.body.lastname, req.body.email, req.body.username, hash]], (error, rows, fields) => {
                    if(error){
                        console.log("error: " + error)
                        return res.status(500).json(error)
                    }

                    return res.status(200).json(`created user ${req.body.username}`)
                })
            }
        })
    }catch(error){
        console.log("error" + error)
    }

    console.log("end register")
}

export const login = async(req,res) => {
    const q = "SELECT * FROM users WHERE username = ?"

    db.query(q,[req.body.username], (err, data) => {
        if(err) return res.status(500).json(err)
        if(data.length === 0) return res.status(404).json("user not found")

        const checkPassword = bcrypt.compareSync(req.body.password, data[0].password)

        if(!checkPassword) return res.status(400).json("password is incorrect")

        const token = jwt.sign({userid:data[0].userid}, "secretkey")

        const {password, ...others} = data[0]

        res.cookie("accessToken", token, {
            httpOnly: true,
        }).status(200).json(others)
    })
}

export const userInfo = (req, res) => {
    console.log("attempting to find user")
    try{
        const accessToken = req.cookies.accessToken

        if(accessToken === undefined){
            return res.status(404).json("you are not logged in")
        }
        const userId = jwt.verify(accessToken, "secretkey").userid

        console.log("userid: " + userId)

        const q = 'SELECT * FROM users WHERE userid = ?'

        db.query(q, [userId], async (error, rows, field) => {
            if(error){
                console.log(error)
            }

            return res.status(200).json(rows[0])
        })
    }catch{
        console.log("error when finding")
        return res.status(404).json("you are not currently logged in")
    }
}

export const logout = (req,res) => {
    try{
        res.clearCookie("accessToken", {
            secure:false,
            sameSite:"none"
        }).status(200).json("User has been logged out")
        console.log("logged out")
    } catch(error){
        console.log(error)
        return res.status(500).json(error)
    }
}