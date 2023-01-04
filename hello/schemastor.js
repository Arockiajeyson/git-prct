const mongoose =require('mongoose')

const models=new mongoose.Schema({
    Title:{type:String},
    image:{type:String},
    ids:{type:mongoose.Types.ObjectId,ref:'Login'},
    Description:{type:String}
})
const myBlogs =mongoose.model('Blogins',models)

module.exports=myBlogs