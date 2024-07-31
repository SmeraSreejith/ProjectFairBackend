//multer

//1)import multer

const multer = require ('multer')

//2)store file

const storage = multer.diskStorage({

    //where the file is stored 

         destination:(req,file,callback)=>{
            callback(null,'./uploads') //path in which the file is stored

         },

    //by which name the file should be stored

    filename:(req,file,callback)=>{

        const filename= `image-${Date.now()}-${file.originalname}` //format of storing filename
        callback(null,filename) //setting filename

    }
})

const fileFilter =(req,file,callback)=>{
    //logic

    if(file.mimetype=='image/png' || file.mimetype=='image/jpg' || file.mimetype=='image/jpeg'){
        callback(null,true)
    }
    else{
        callback(null,false)
        return callback(new Error('only png,jpg,jpeg files are accepted'))
    }

}

const multerConfig = multer({
    storage,//storage:storage
    fileFilter//fileFilter:fileFilter

})
module.exports = multerConfig
