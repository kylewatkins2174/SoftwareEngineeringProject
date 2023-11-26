import express from 'express'
import { getBooks, getCDs, getMovies, getVinyls } from '../controller/trade.js'

const route = express.Router()

route.post("/getBooks", getBooks)
route.post("/getMovies", getMovies)
route.post("/getVinyls", getVinyls)
route.post("/getCDs", getCDs)



export default route