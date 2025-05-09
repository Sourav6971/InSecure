import express from "express"
import userRouter from "./routes/userRouter";

const app= express();
app.use(express.json());



app.get("/",(req,res)=>{
    res.json({
        msg:"App running successfully"
    })
})
 
app.use("/api",userRouter);

app.listen(3000,()=>{
    console.log("App listening on port 3000")
});
