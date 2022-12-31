const express =require('express')

const db=require('./db')
const cors =require('cors')
const app =express()
app.use(cors())
const jwt =require('jsonwebtoken')

app.use(express.json())

app.use('/',require('./register'))
app.use('/L',require('./login'))
app.use('/store',require('./storeRout'))
app.listen(3001,async()=>{
    await db()
    console.log('port up')
})