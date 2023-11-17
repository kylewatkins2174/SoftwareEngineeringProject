import express from 'express'
import {getItems, getUserBooks} from "../controller/trade.js"

const route = express.Router()

route.post("/getItems", getItems)
route.post("/getUserBooks", getUserBooks)



export default route