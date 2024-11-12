import express from 'express';
import dotenv from "dotenv";
import route from "./router/router.js";
import dbConfig from "./dbConfig.js"
import cors from "cors";

dotenv.config();
const app = express()
app.use(cors())
const port = 3000
app.use('/api', cors(), route);
app.use("/api", route);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})
app.use("/api", route);
app.use(express.json());
