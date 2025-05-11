import { Router } from "express";
import User from "../schema/userSchema";
import { createUser,findUser } from "../db";
import jwt from "jsonwebtoken"
import "dotenv/config"
import { PrismaClient } from "../../generated/prisma";

const router= Router();
const secret= process.env.SECRET??"";



router.post("/signup",async (req,res)=>{
    const {walletAddress,email}= req.body;
    const {success}= User.safeParse({walletAddress,email});

    if(!success){
        res.status(422).json({
            msg:"Invalid data format",
        });
        return;
    }

    const existingUser= await findUser(walletAddress);
   
    if(existingUser){
        res.json({
            msg:"User already exists"
        })
        return;
    }

    const response =await createUser(walletAddress,email);
    if(!response.email){
        res.status(404).json({
            msg:"Could not create user"
        });
        return;
    }
    const token= jwt.sign(walletAddress,secret);


    res.json({
        msg:"User created successfully",
        token
    });
    return;
})

router.post("/signin",async(req,res)=>{
    const {walletAddress}= req.body;
    // const response= await findUser(walletAddress);
    const client = new PrismaClient()
    const response= await client.user.findFirst(
        {
            where:{
                walletAddress
            }
        }
    )
    if(!response){
        res.status(401).json({
            msg:"User not found"
        });
        return;
    }

    const token= jwt.sign(walletAddress,secret)

    res.json({
        token
    })
    return;


})




export default router;