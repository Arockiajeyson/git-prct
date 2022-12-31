const express =require('express')
const jwt =require('jsonwebtoken')
const app =express()
const bcrypt =require('bcrypt')
const userSchema =require('./schema')

app.use(express.json())

app.post('/Login',async (req,res)=>{
    try {
        const find =await userSchema.findOne({email:req.body.email})

        if(find){
            const comparePassword = await bcrypt.compare(req.body.password, find.password)

            if(!comparePassword){
                return res.json('invalid Password')
            }else{
                const token =await jwt.sign({id:find._id} ,'sss')
                return res.json(['logged-in',token])
            }
        }else{
            return res.json('please register first')
        }

    } catch (error) {
        return res.json(error.message)
    }
})


module.exports=app