require('dotenv').config();
const express=require("express")
const { required } = require("zod/mini")
const app=express()
const connectDB=require("./utils/db")

app.get("/",(req,res)=>{
    res.status(200).send("Backend is working")
})



const port=3000

connectDB().then(() => {
  app.listen(port, () => {
    console.log(`server is running at http://localhost:${port}`);
  });
});