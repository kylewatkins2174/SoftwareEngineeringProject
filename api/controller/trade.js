import db from "../connect.js"


export const getItems = async(req, res) => {

}

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