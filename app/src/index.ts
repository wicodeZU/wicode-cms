import express from 'express';
import {dbConnection} from "./config/dbConnect";
import {authRoute, homeRouter} from "./api/routes";


export const app = express();

dbConnection()

app.use(express.json());

app.use("/api/v1", homeRouter)
app.use("/api/v1/auth", authRoute)

app.listen(5000, () => {
    console.log(`Server is running on port http://localhost:5000`);
})