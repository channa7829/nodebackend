const mongoose = require('mongoose');
require('dotenv').config();

const connectionParam ={
    useNewUrlParser : true,
    useUnifiedTopology :true
}

mongoose.set('strictQuery', false);

const uri = `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@cluster0.917anq1.mongodb.net/PROJECT01?retryWrites=true&w=majority`
const conextion = mongoose.connect(uri,connectionParam).then(()=>console.log('connected to cloud atlas database'))
.catch((err)=>console.log(err));

module.exports = conextion