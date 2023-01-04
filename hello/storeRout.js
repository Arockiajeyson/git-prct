const express =require('express')

const app =express()

const models =require('./schemastor')
const ATw =require('./ATW')
const bodyParser=require('body-parser')
const cloudinary =require('./cloud')
app.use(bodyParser.urlencoded({extended:true}))

const fileUpload =require('express-fileupload')

app.use(fileUpload({useTempFiles:true}))
app.post('/',ATw,async (req,res)=>{
    try {
        const {tempFilePath} =req.files.image
        const {Title,Description}=req.body
        const images =await cloudinary.uploader.upload(tempFilePath,{
            folder:'newFolderImage'
        })
        req.body.image=images.secure_url
        req.body.ids=req.user.id
        const data =await models.create(req.body)
        return res.json('successfully added')
    } catch (error) {
        res.json(error.message)
    }
})

app.post('/geting',ATw, async (req,res)=>{
    try {
        const {id} =req.user
        const data =await models.find({ids:id})
        return res.json(data)
    } catch (error) {
        res.json(error.message)
    }
})
module.exports=app