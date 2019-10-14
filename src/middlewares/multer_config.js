import multer from 'multer';
const storage = multer.diskStorage({
    destination:function(req,file,cb){
         // how the files should be stored 
        cb(null,"./uploads");
    },
    filename:function(req,file,cb){
    // how files should be named
    cb(null, new Date().toISOString() + file.originalname);
    }
});
const fileFilter = (req,file,cb)=>{
    // reject a filter: 
    if(file.mimetype==='image/jpeg' || file.mimetype === "image/png"){
        cb(null,true)
    }else{
        cb(null,false);
    }
};
module.exports= multer({ storage:storage,limits:{ fileSize:1024 *1024*5 },fileFilter:fileFilter}).single("productImage")

