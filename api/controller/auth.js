import db from "../connect.js"
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"

export const register = async(req,res) => {
    const q = "SELECT * FROM users WHERE username = ?"

    try{
        db.query(q, [req.body.username], (error,rows,fields) => {
            if(error){
                return res.status(500).json(error)
            }
            if(rows.length > 0){
                return res.status(409).json(`User ${rows[0].email} exists`)
            }
            else{
                const salt = bcrypt.genSaltSync(10)
                const hash = bcrypt.hashSync(req.body.password, salt)

                const insertQ = "INSERT INTO users VALUES(?)"
                db.query(insertQ, [[req.body.firstname, req.body.lastname, req.body.email, req.body.username]], (error, rows, fields) => {
                    if(error){
                        return res.status(500).json(error)
                    }

                    return res.status(200).json(`created user ${req.body.username}`)
                })
            }
        })
    }catch(error){
        console.log(error)
    }
}