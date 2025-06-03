
import { prisma } from './../lib/prisma';

async function createUser(walletAddress:string,email:string){
    
    const response= await prisma.user.create({
        data:{
            walletAddress,
            email
        },
        select:{
            email:true
        }
    })
    return response;
}
async function findUser(walletAddress:string){

    const response = await prisma.user.findFirst({
        where:{
            walletAddress
        }
        
    })
    return response;
}

async function  createBackup(userId:string,encryptedKey:string,iv:string,salt:string,nickname:string){


const response = await prisma.backup.create({
    data:{
        userId,
        encryptedKey,
        iv,
        salt,
        nickname
    }

})

return response
}

async function getBackup(walletAddress:string){


    const user= await prisma.user.findFirst({
        where:{
            walletAddress
        }
    })

    if(!user){
       return null
    }
    const userId= user?.id

    const currentBackup= await prisma.backup.findFirst({
        where:{
            userId
        },
        select:{
            encryptedKey:true,
            salt:true,
            iv:true
        }
    })
    return currentBackup

}




export {createUser,findUser,createBackup,getBackup}