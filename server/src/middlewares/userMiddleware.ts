import express from "express";
import jwt, { JwtPayload } from "jsonwebtoken";
import "dotenv/config"
const secret= process.env.SECRET??"";

declare global {
  namespace Express {
    interface Request {
      walletAddress:string;
      headers: {
        authorization?: string;
      }
    }
  }
}


const userMiddleware= (req:express.Request,res:express.Response,next:express.NextFunction)=>{
    const token = req.headers.authorization || "";
    const jwtToken= token.split(" ")[1];
    if(!jwtToken||jwtToken==="")
    {
        res.status(401).json({
            msg:"Unauthorised"
        });
        return;
    }
    try{

    var walletAddress= jwt.verify(jwtToken,secret);
    req.walletAddress= walletAddress as string;
    
  
       
        next();
    }
    catch{
        res.status(401).json({
            msg:"Invalid Token"
        })
        return;
    }


}

export default userMiddleware