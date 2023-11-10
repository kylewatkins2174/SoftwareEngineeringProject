import db from "../connect.js"


export const getItems = async(req, res) => {
    const q = "SELECT * FROM items"

    try{
        db.query(q, (error,rows, fields) => {
            if(error){
                return res.status(500).json(error)
            }

            return res.status(200).json(rows)
        })
    }catch(error){
        console.log(error)
    }
}