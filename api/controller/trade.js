import db from "../connect.js"

export const getBooks = async(req,res) => {
    const q = `select itemtype, title, author, descr, username 
                from books
                join users on books.userid = users.userid
                where books.userid != (?)`

    console.log("getting books" )

    try{
        db.query(q, [req.body.userid], (error,rows,fields) => {
            if(error){
                return res.status(500).json(error)
            }
            return res.status(200).json(rows)
        })
    }catch(error){
        console.log(error)
    }
}

export const getMovies = async(req,res) => {
    const q = `select itemtype, title, director, descr, username from movies
                join users on movies.userid = users.userid
                where movies.userid != ?`

    console.log("getting movies")

    try{
        db.query(q,[req.body.userid], (error,rows,fields) => {
            if(error){
                return res.status(500).json(error)
            }
            return res.status(200).json(rows)
        })
    }catch(error){
        console.log(error)
    }
}

export const getVinyls = async(req,res) => {
    const q = `select itemtype, title, artist, descr, username from vinyls
                join users on vinyls.userid = users.userid
                where vinyls.userid != ?`

    console.log("getting vinyls")

    try{
        db.query(q, [req.body.userid], (error,rows,fields) => {
            if(error){
                return res.status(500).json(error)
            }
            return res.status(200).json(rows)
        })
    }catch(error){
        console.log(error)
    }
}

export const getCDs = async(req,res) => {
    const q = `select itemtype, title, artist, descr, username from cds
                join users on cds.userid = users.userid
                where cds.userid != ?`

    console.log("getting CDs")

    try{
        db.query(q, [req.body.userid], (error,rows,fields) => {
            if(error){
                return res.status(500).json(error)
            }
            return res.status(200).json(rows)
        })
    }catch(error){
        console.log(error)
    }
}