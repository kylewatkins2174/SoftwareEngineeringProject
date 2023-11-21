import express from 'express'
import {getItems, getUserBooks, getUserCDs, getUserMovies, getUserVinyls} from "../controller/trade.js"

const route = express.Router()

route.post("/getItems", getItems)

route.post("/getUserBooks", getUserBooks)
route.post("/getUserMovies", getUserMovies)
route.post("/getUserVinyls", getUserVinyls)
route.post("/getUserCDs", getUserCDs)



export default route