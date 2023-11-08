import express from 'express'
import {getItems} from "../controller/trade.js"

const route = express.Router()

route.post("/getItems", getItems)



export default route