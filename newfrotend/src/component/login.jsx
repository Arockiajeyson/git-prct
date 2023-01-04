import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useContext } from 'react'
import '../style/style.css'
import ToastContext from './Toast'
import axios from 'axios'
import { useState } from 'react'
export default function Login() {
    const navi =useNavigate()
    const {toast} =useContext(ToastContext)
    const handel =()=>{
        navi('/register')
    }
    const [state,setState]=useState({
        email:'',
        password:''
    })
    const handeler=async()=>{
        const {email,password}=state
        const res =await axios.post('https://login-back.onrender.com/L/Login',state)
        console.log(res.data)
        if(res.data[0] =='logged-in'){
            toast.success(res.data[0])
            localStorage.setItem('token',res.data[1])
            navi('/con')
        }else{
            toast.error(res.data)
        }
    }
    return (
        <div className='main-div'>
            <h2 className='inpt-1-h2'>Email</h2>
            <input type="text" placeholder='enter email' className='inpt-1' onChange={(e)=>setState({...state,email:e.target.value})}/>
            <h2 className='inpt-2-h2'>Password</h2>
            <input type="password" placeholder='enter password' className='inpt-2' onChange={(e)=>setState({...state,password:e.target.value})} />
            <button className='btn' onClick={handeler}style={{display:'block',marginTop:'20px',width:'100px',height:'40px',borderRadius:'10px',border:'none'}}>Login</button>
            <p>Need a an account ? <span className='span-tag' onClick={handel}> Sign-up</span></p>
        </div>
    )
}
