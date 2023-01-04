// const express =require('express')

// const app =express()


const jwt =require('jsonwebtoken')

const author = async (req,res,next)=>{
    try {
        const token =req.headers.authorization
        if(!token){
            return res.json('Forbidden')
        }
        const verify =jwt.verify(token,'sss')
        if(verify){
            req.user =verify
            next()
        }
    } catch (error) {
        return res.json(error.message)
    }
}



module.exports=author