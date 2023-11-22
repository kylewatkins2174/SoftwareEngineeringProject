import express from 'express';
import cors from 'cors';
import authRoute from "./routes/auth.js"
import tradeRoute from "./routes/trade.js"
import inventoryRoute from "./routes/inventory.js"
import cookieParser from 'cookie-parser';

const app = express();
app.use((req,res,next) => {
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});
app.use(cookieParser())
app.use(express.json());
app.use(cors({
    origin: "http://localhost:3000",
}));

app.use("/api/auth", authRoute)
app.use("/api/trade", tradeRoute)
app.use("/api/inventory", inventoryRoute)


const port = 8800;

app.listen(port, () => {
    console.log(`API is listening on ${port}`);
});