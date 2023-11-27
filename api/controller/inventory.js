import db from "../connect.js"

export const getUserBooks = async(req,res) => {
    const q = "SELECT * FROM books WHERE userid = ?"

    console.log("getting books for user " + req.body.userid)

    try{
        db.query(q, [req.body.userid], (error, rows, fields) => {
            if(error){
                return res.status(500).json(error)
            }
            return res.status(200).json(rows)
        })
    }catch(error){
        console.log("returning books to front")
        console.log(error)
    }
}

export const getUserCDs = async(req,res) => {
    const q = "SELECT * FROM cds WHERE userid = ?"

    console.log("getting CDs for user " + req.body.userid)

    try{
        db.query(q, [req.body.userid], (error, rows, fields) => {
            if(error){
                return res.status(500).json(error)
            }
            return res.status(200).json(rows)
        })
    }catch(error){
        console.log("returning books to front")
        console.log(error)
    }
}

export const getUserMovies = async(req,res) => {
    const q = "SELECT * FROM movies WHERE userid = ?"

    console.log("getting movies for user " + req.body.userid)

    try{
        db.query(q, [req.body.userid], (error, rows, fields) => {
            if(error){
                return res.status(500).json(error)
            }
            return res.status(200).json(rows)
        })
    }catch(error){
        console.log("returning books to front")
        console.log(error)
    }
}

export const getUserVinyls = async(req,res) => {
    const q = "SELECT * FROM vinyls WHERE userid = ?"

    console.log("getting vinyls for user " + req.body.userid)

    try{
        db.query(q, [req.body.userid], (error, rows, fields) => {
            if(error){
                return res.status(500).json(error)
            }
            return res.status(200).json(rows)
        })
    }catch(error){
        console.log("returning books to front")
        console.log(error)
    }
}

export const insertBook = async (req,res) => {
    const q = "INSERT INTO books VALUES(?)"

    try{
        db.query(q, [['book',null,req.body.userid,req.body.title,req.body.author,req.body.description]], (error, rows, fields) => {
            if(error){
                console.log(error)
                return res.status(500).json(error)
            }
            return res.status(200).json("inserted book!")
        })
    }catch(error){
        
        console.log(error)
    }
}

export const insertMovie = async (req,res) => {
    const q = "INSERT INTO movies VALUES(?)"

    try{
        db.query(q, [['movie',null,req.body.userid,req.body.title,req.body.director,req.body.description]], (error, rows, fields) => {
            if(error){
                console.log(error)
                return res.status(500).json(error)
            }
            return res.status(200).json("inserted movie!")
        })
    }catch(error){
        
        console.log(error)
    }
}

export const insertVinyl = async (req,res) => {
    const q = "INSERT INTO vinyls VALUES(?)"

    try{
        db.query(q, [['vinyl',null,req.body.userid,req.body.title,req.body.artist,req.body.description]], (error, rows, fields) => {
            if(error){
                console.log(error)
                return res.status(500).json(error)
            }
            return res.status(200).json("inserted vinyl!")
        })
    }catch(error){
        
        console.log(error)
    }
}

export const insertCD = async (req,res) => {
    const q = "INSERT INTO cds VALUES(?)"

    try{
        db.query(q, [['cd',null,req.body.userid,req.body.title,req.body.musician,req.body.description]], (error, rows, fields) => {
            if(error){
                console.log(error)
                return res.status(500).json(error)
            }
            return res.status(200).json("inserted cd!")
        })
    }catch(error){
        
        console.log(error)
    }
}