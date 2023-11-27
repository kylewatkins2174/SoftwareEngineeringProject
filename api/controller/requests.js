import db from '../connect.js'

export const getBookRequests = async(req,res) => {
    const q = `SELECT
    requesteruser.username AS username,
    requesterbooks.title AS useritem,
    owneruser.username AS ownername,
    ownerbooks.title AS owneritem 
  FROM
    bookrequests AS br
  JOIN
    users AS requesteruser ON requesteruser.userid = br.userid
  JOIN
    books AS requesterbooks ON requesterbooks.itemid = br.useritemid
  JOIN
    users AS owneruser ON owneruser.userid = br.ownerid
  JOIN
    books AS ownerbooks ON ownerbooks.itemid = br.owneritemid
  WHERE
    br.userid = ?`

    console.log("getting requests")

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

export const getPendingBookRequests = async(req,res) => {
    const q = `SELECT
    requesteruser.username AS username,
    requesterbooks.title AS useritem,
    owneruser.username AS ownername,
    ownerbooks.title AS owneritem 
  FROM
    bookrequests AS br
  JOIN
    users AS requesteruser ON requesteruser.userid = br.userid
  JOIN
    books AS requesterbooks ON requesterbooks.itemid = br.useritemid
  JOIN
    users AS owneruser ON owneruser.userid = br.ownerid
  JOIN
    books AS ownerbooks ON ownerbooks.itemid = br.owneritemid
  WHERE
    br.userid != ?`

    try{
        db.query(q, [req.body.userid], (error,rows,fields) => {
            if(error){
                console.log(error)
                return res.status(500).json(error)

            }
            return res.status(200).json(rows)
        })
    }catch(error){
        console.log(error)
    }
}