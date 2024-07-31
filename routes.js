//1)import express
const express = require ('express')

//import userController file
const userController =require ('./controller/userController')

//import projectController
const projectController = require ('./controller/projectController')

const jwt = require ('./middleware/jwtMiddleware')

const multerConfig = require('./middleware/multerMiddleware')

//2)create an object for router class
const router = new express.Router()



//3)set up path for each request from view

//register
router.post('/register',userController.registerController)

//login
router.post('/login',userController.loginController)

//addProject
 router.post('/addproject',jwt,multerConfig.single('projImage'),projectController.addProjectController)  

//all projects

router.get('/allprojects',jwt,projectController.getAllProjectController)

//home project
router.get('/homeproject',projectController.homeProjectController)

//userProject
router.get('/userProject',jwt,projectController.userProjectController)

//delete
router.delete('/delete/:id',projectController.deleteProjectController)

//edit project
router.put('/edit-project/:id',jwt,multerConfig.single('projImage'),projectController.editProjectController)

//edit profile

router.put('/edit-profile', jwt , multerConfig.single('profile'),userController.editProfileController)

//4)export the router
module.exports = router

