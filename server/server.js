import express from 'express'
import cors from 'cors'
import url from 'url'
import path from 'path'
import axios from 'axios'
const router=express.Router();
const __fileName=url.fileURLToPath(import.meta.url)
const __dirName=path.dirname(__fileName);
const PORT=8000;
const app=express();
app.use(cors())
app.use(express.json());
//URL POST http://localhost:8000/api/posts/predict
app.post("/api/posts/predict",async(req,res)=>{
    try{
        const response=await axios.post("http://127.0.0.1:5000/predict",req.body);
        res.status(200).json(response.data); 
    }
    catch(error){
        res.status(500).json({message:"Sever Failed"});
    }
});

app.listen(PORT,()=>console.log(`Server Running on port ${PORT}`));
console.log(`Application Running On http://localhost:5173/`);
