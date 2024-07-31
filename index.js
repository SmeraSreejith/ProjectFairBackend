//import dotenv - to load environment variable
require ('dotenv').config()

//import express
const express = require ('express')

//import cors
const cors = require ('cors')

//application specific middleware
/*const app=  require('./middleware/appMiddleware') */

//import router
const router = require ('./routes')
  

//import connection.js file
require('./connection')


//create express server
//Creates an Express application. The express() function is a top-level function exported by the express module.
const pfServer = express()

//use of cors - to communicate with the view
pfServer.use(cors())

//server should use json() method returns a middleware which can parse json format
pfServer.use(express.json())

/* pfServer.use(app) */

//use router
pfServer.use(router)
//to export upload folder from the server side to use in the client side  
//first argument should the name in which we are using the folder in the client side
//second argument -static method to export the folder
//static method should have the path of the export folder
pfServer.use('/uploads',express.static('./uploads'))

/* pfServer.use(appMiddleware) */

//set port for the server 
PORT = 4000 || process.env.PORT

//listen to the port - to resolve the request
pfServer.listen(PORT,()=>{
    console.log(`server running successfully at port number : ${PORT}`);
})

/*not used in mvc architecture
 //get request
pfServer.get('/',(req,res)=>{
    //logic
    res.send('get request recieved')
})
//post request
pfServer.post('/',(req,res)=>{
    res.send('post request recieved')
})
//put request
pfServer.put('/',(req,res)=>{
    res.send('put request recieved')
}) */


