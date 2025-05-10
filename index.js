import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from 'cors';

//custom routes
import userRouter from "./routes/Auth.routes.js";

dotenv.config();
const port = process.env.PORT || 8080
const app = express();

app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({extended: true}))
app.use(cors({
    origin: "http://localhost:5173"
}))

app.get('/', (req, res) => {
    res.send('Server is here')
})

app.use('/api/v1/users', userRouter);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});