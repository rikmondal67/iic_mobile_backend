import express from "express";
const router = express.Router()

router.get('/',(req,res)=>{
    res.status(200).json({
        "data":'server is healthy'
    })
})

export default router