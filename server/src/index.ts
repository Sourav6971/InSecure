import express from "express"

const app= express();
app.use(express.json());



app.get("/",(req,res)=>{
    res.json({
        msg:"App running successfully"
    })
})

app.listen(3000);
