import express from 'express';
import bodyParser from 'body-parser';
import UserRoute from "./routes/user";
import UserInformationRoute from "./routes/userInformation";

const app = express();

// middlewares 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.use("/auth",UserRoute);
app.use("/info",UserInformationRoute);

const PORT =  process.env.PORT || 3500;

app.listen(PORT, ()=> console.log(`App is running on port ${PORT}`));

export default app;