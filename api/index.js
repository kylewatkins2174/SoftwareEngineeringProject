import express from 'express';
import cors from 'cors';
import authRoute from "./routes/auth.js"


const app = express();
app.use((req,res,next) => {
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});
app.use(express.json());
app.use(cors({
    origin: "http://localhost:3000",
}));

app.use("/api/auth", authRoute)


const port = 8800;

app.listen(port, () => {
    console.log(`API is listening on ${port}`);
});