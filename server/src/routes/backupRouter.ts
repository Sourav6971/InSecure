import { Router } from "express";
import { createBackup, findUser, getBackup } from "../db";
import "dotenv/config"

import userMiddleware from './../middlewares/userMiddleware';


// const secret= process.env.SECRET??"";
const router= Router();


router.post("/create-backup",userMiddleware,async(req,res)=>{

const{encryptedKey,iv,salt,nickname}=req.body;
const walletAddress= req.walletAddress;

const user= await findUser(walletAddress);


if(!user){
    res.json({      
        msg:"User does not exist"
    })
    return;
}

const userId= user.id;

const response=await createBackup(userId,encryptedKey,iv,salt,nickname);
if(!response){
res.json({
    msg:"Could not create Backup"
});
return;
}
res.json({
    msg:"Backup created successfully"
});
return;


});

router.post("/get-backup",userMiddleware,async(req,res)=>{
    const walletAddress= req.walletAddress
    const backup = await getBackup(walletAddress);
    if (!backup) {
        res.status(404).json({ msg: "Backup not found" });
        return;
    }
    res.json(backup);
    return
})

export default router;