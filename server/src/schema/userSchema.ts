import {z} from "zod"

const User= z.object({
    walletAddress:z.string(),
    email:z.string().email()
})

export default User