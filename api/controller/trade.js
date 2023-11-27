import db from "../connect.js"

export const getBooks = async(req,res) => {
    const q = `select itemtype, title, author, descr, username, books.userid
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
    const q = `select itemtype, title, director, descr, username, movies.userid from movies
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
    const q = `select itemtype, title, artist, descr, username, vinyls.userid from vinyls
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
    const q = `select itemtype, title, artist, descr, username, cds.userid from cds
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

export const requestBook = async(req,res) => {
    const q = `INSERT INTO bookrequests VALUES (?)`

    try{
        db.query(q, [req.body.userItemId, req.body.ownerItemId, req.body.userId, req.body.ownerId], (error, rows, fields) => {
            if(error){
                return res.status(500).json(error)
            }
            return res.status(200).json("request created!")
        })
    }catch(error){
        console.log(error)
    }
}

export const requestMovie = async(req,res) => {
    const q = `INSERT INTO movierequest VALUES (?)`

    try{
        db.query(q, [req.body.userItemId, req.body.ownerItemId, req.body.userId, req.body.ownerId], (error, rows, fields) => {
            if(error){
                return res.status(500).json(error)
            }
            return res.status(200).json("request created!")
        })
    }catch(error){
        console.log(error)
    }
}

export const requestCD = async(req,res) => {
    const q = `INSERT INTO cdrequests VALUES (?)`

    try{
        db.query(q, [req.body.userItemId, req.body.ownerItemId, req.body.userId, req.body.ownerId], (error, rows, fields) => {
            if(error){
                return res.status(500).json(error)
            }
            return res.status(200).json("request created!")
        })
    }catch(error){
        console.log(error)
    }
}

export const requestVinyl = async(req,res) => {
    const q = `INSERT INTO vinylrequests VALUES (?)`

    try{
        db.query(q, [req.body.userItemId, req.body.ownerItemId, req.body.userId, req.body.ownerId], (error, rows, fields) => {
            if(error){
                return res.status(500).json(error)
            }
            return res.status(200).json("request created!")
        })
    }catch(error){
        console.log(error)
    }
}