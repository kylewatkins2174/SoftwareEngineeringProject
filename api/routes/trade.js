import express from 'express'
import { getBooks, getCDs, getMovies, getVinyls, requestBook, requestCD, requestMovie, requestVinyl } from '../controller/trade.js'

const route = express.Router()

route.post("/getBooks", getBooks)
route.post("/getMovies", getMovies)
route.post("/getVinyls", getVinyls)
route.post("/getCDs", getCDs)

route.post("/requestbook", requestBook)
route.post("/requestmovie", requestMovie)
route.post("/requestVinyl", requestVinyl)
route.post("/requestCD", requestCD)



export default route