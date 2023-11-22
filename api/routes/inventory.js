import express from 'express'
import { insertBook, insertCD, insertMovie, insertVinyl } from '../controller/inventory.js'

const route = express.Router()

route.post("/insertBook", insertBook)
route.post("/insertMovie", insertMovie)
route.post("/insertVinyl", insertVinyl)
route.post("/insertcd", insertCD)

export default route