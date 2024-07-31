const users = require("../model/userModel");
const jwt = require('jsonwebtoken')

//register
exports.registerController = async (req,res)=>{
    console.log('inside register controller');
    const{username,email,password}=req.body
   
    try{
        const existingUser = await users.findOne({email})

        if(existingUser){
            res.status(406).json('Account Already Exist')
        }
        else{
            const newUser = new users({
                username,
                email,
                password,
                github:"",
                linkedin:"",
                profile:""
            })
            //save() - to store data in mongodb
            await newUser.save()
            res.status(200).json(newUser)
        }
    }catch(error){
        res.status(401).json(`registration failed due to ${error}`)
    }
}

//login
exports.loginController = async(req,res)=>{
    console.log('Inside login function');
    const{email,password}=req.body

    try{
        const existingUser = await users.findOne({email,password})

        if(existingUser){
            const token = jwt.sign({userId:existingUser._id},'supersecretKey')
            res.status(200).json({existingUser,token})
        }
        else{
            res.status(406).json('Invalid emailId or Password')
        }
    }
    catch(error){
        res.status(401).json(error)
    }
}

//edit
exports.editProfileController = async(req,res)=>{
    const userId =req.payload
    const {username , email, password, github, linkedin , profile}= req.body

    const profileImage = req.file? req.file.filename:profile

    try {
        const userProfile = await users.findByIdAndUpdate({_id:userId},{username,email,password,github,linkedin,profile:profileImage})
        await userProfile.save()
        res.status(200).json(userProfile)
        

    } catch (error) {
       res.status(401).json(error) 
    }
}