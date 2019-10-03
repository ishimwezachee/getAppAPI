import express from 'express';
import bodyParser from 'body-parser';

const app = express();

// middlewares 

app.use(bodyParser.json());

app.use('',(req,res)=>{
    res.json("welcome to getapp")
});

const PORT =  process.env.PORT || 3500;

app.listen(PORT, ()=> console.log(`App is running on port ${PORT}`));