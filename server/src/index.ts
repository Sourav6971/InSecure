import express from "express"
import userRouter from "./routes/userRouter";
import backupRouter from "./routes/backupRouter"

const app= express();
app.use(express.json());



app.get("/",(req,res)=>{
    res.json({
        msg:"App running successfully"
    })
})
 
app.use("/user",userRouter);
app.use("/backup",backupRouter)

app.listen(3000,()=>{
    console.log("App listening on port 3000")
});
