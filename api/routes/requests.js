import express from 'express'
import { getBookRequests, getPendingBookRequests } from '../controller/requests.js'

const route = express.Router()

route.post("/getBookRequests", getBookRequests)
route.post("/getPendingBookRequests" , getPendingBookRequests)

export default route