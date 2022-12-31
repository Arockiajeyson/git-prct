const express =require('express')

const app =express()

const userSchema =require('./schema')

const bcrypt =require('bcrypt')

app.use(express.json())

app.post('/register',async (req,res)=>{
    try {
        const find =await userSchema.findOne({email:req.body.email})

        if(find){
            return res.json('try with different email...,E mail is already exist')
        }else{
            const hashPassword = await bcrypt.hash(req.body.password, 10)

            req.body.password=hashPassword
            const data =await userSchema.create(req.body)
            console.log(data)
            return res.json('done')
        }

    } catch (error) {
        return res.json(error)
    }
})


module.exports=app