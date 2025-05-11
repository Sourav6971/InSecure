import {z} from "zod"

const Backup= z.object({
    encryptedKey:z.string(),
    iv:z.string(),
    salt:z.string(),
})