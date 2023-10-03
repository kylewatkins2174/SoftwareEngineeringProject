import express from 'express';
import cors from 'cors';


const app = express();
app.use((req,res,next) => {
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});
app.use(express.json());
app.use(cors({
    origin: "http://localhost:3000",
}));

const port = 8800;

app.listen(port, () => {
    console.log(`API is listening on ${port}`);
});