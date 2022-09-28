import express from 'express';
import {homeRouter} from "./api/routes/";

export const app = express();

app.use(express.json());

app.use("/api/v1", homeRouter)

app.listen(5000, () => {
    console.log(`Server is running on port http://localhost:5000`);
})