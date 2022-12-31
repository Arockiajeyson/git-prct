const mongoose =require('mongoose')

const models=new mongoose.Schema({
    email:{type:String,unique:true},
    password:{type:String}
})
const myBlogs =mongoose.model('Login',models)

module.exports=myBlogs