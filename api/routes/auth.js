import express from 'express';
import {register, login, logout, userInfo} from "../controller/auth.js"



const route = express.Router();

route.post("/register", register);
route.post("/login", login)
route.post("/logout", logout)
route.post("/userInfo", userInfo)



export default route