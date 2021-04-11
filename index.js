const express  = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
require("dotenv").config()
app.use(cors());

const stocksRouter = require('./routers/stocks_router');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/api', stocksRouter);

mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true
}, (err, database)=>{
    if(err){
        console.log("Can't connect",err)
    }
    else{
        console.log("Connected to database");
    }
})
app.get('/', function (req, res) {
    res.send('Hello to the server')
})
const Port = process.env.PORT || 8000;
app.listen(Port, () => console.log(`Listening on port ${Port}`))



