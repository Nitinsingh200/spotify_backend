const  musicModel = require("../model/music.model" )

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

    }catch(error){
return res.status(401).json({message:"unauthorized"})
    }
}
