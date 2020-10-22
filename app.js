const express = require('express')
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const animalRouter = require("./routes/animalRoutes")
const dotenv = require('dotenv')
const userRouter = require('./routes/userRoutes');

const app = express()
app.use(bodyParser.json());

dotenv.config({path: './config.env'})

const DB = process.env.DATABASE;
    mongoose.connect(DB, {
        useNewUrlParser: true,
        useCreateIndex: true,
        useUnifiedTopology: true,
        useFindAndModify: false
    }).then(() => console.log('MongoDB connected ⚡⚡'));


app.use("/api/v1/animals", animalRouter);
app.use('/api/v1/users', userRouter);

const port = process.env.PORT || 5000

app.listen(port, () => {

    console.log(`App running on port ${port}...`)

})



