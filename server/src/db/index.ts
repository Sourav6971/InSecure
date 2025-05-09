import { PrismaClient } from "../../generated/prisma";
const client= new PrismaClient()

async function createUser(walletAddress:string,email:string){
    const response= await client.user.create({
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
    const response = await client.user.findFirst({
        where:{
            walletAddress
        },
        
    })
    return response;
}

export {createUser,findUser}