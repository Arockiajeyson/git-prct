const mongoose=require('mongoose')

const db=async()=>{
    await mongoose.connect('mongodb+srv://Aro:aro123@arockiajeyson.aswzaya.mongodb.net/?retryWrites=true&w=majority')
    console.log('db connented')
}
module.exports=db