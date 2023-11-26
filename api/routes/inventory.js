import express from 'express'
import { getUserBooks, getUserCDs, getUserMovies, 
    getUserVinyls, insertBook, insertCD, insertMovie, 
    insertVinyl } from '../controller/inventory.js'

const route = express.Router()

route.post("/getUserBooks", getUserBooks)
route.post("/getUserCDs", getUserCDs)
route.post("/getUserVinyls", getUserVinyls)
route.post("/getUserMovies", getUserMovies)

route.post("/insertBook", insertBook)
route.post("/insertMovie", insertMovie)
route.post("/insertVinyl", insertVinyl)
route.post("/insertcd", insertCD)

export default route