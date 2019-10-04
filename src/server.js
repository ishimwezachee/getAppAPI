import express from 'express';
import bodyParser from 'body-parser';
import UserRoute from "./routes/user";

const app = express();

// middlewares 

app.use(bodyParser.json());

app.use("/auth",UserRoute);

const PORT =  process.env.PORT || 3500;

app.listen(PORT, ()=> console.log(`App is running on port ${PORT}`));