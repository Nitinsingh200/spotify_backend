
const  musicModel = require("../model/music.model" )
const {uploadFile}= require("../services/storage.service")
async function createMusic(req,res){
    const token = req.cookies.token;

    if(!token){
        return res.status(401).json({message :"unauthorized"})
    }
    try{
        const decode = jwt.verify(token.process.env.JWT_SECRET)
        if(decode.role !== "artist"){
            return res.status(403).json({message:"yu dont have access to create  an music  "})
        }


     const {title} = req.body;
     const file = req.file
      const result =await uploadFile(file.buffer.toString('base64'))

      const  music = await musicModel.create({
        uri:result.url,
        title,
        artist:decoded.id
         
      })
      res,status(201).json({
         message:" music created successfully",
         music:{
            id:music._id,
            uri:music.uri,
            title:music.title,
            artist:music.artist,
         }
      })
    }

    catch(error){
return res.status(401).json({message:"unauthorized"})
    }


}

module.exports ={createMusic}