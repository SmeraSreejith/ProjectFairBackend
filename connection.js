//import mongoose
const mongoose = require('mongoose')

const connectionString = process.env.DATABASE

mongoose.connect(connectionString).then(()=>{
    /* console.log(process.env); */
    console.log('mongodb running successfully');
}).catch((err)=>{
    console.log(`not connected due to ${err}`);
})