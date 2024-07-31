//middleware is used to verify jsonwebtoken
const jwt =require('jsonwebtoken')

const jwtMiddleware = (req,res,next)=>{
    //logic
    console.log('Inside jwt middleware ');
    //access token
    const token = req.headers["authorization"].split(' ')[1];
   /*  console.log(token);*/

    //verify
    try{
      const jwtResponse = jwt.verify(token,'supersecretKey')
      console.log(jwtResponse);
      req.payload = jwtResponse.userId
      
      next();

    }catch(error){
   res.status(401).json('Authorization failed ...Please login',error)
    } 

   
}

module.exports = jwtMiddleware