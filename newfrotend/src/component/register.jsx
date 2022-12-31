import React from 'react'
import { useContext } from 'react'
import { useState } from 'react'
import '../style/style.css'
import ToastContext from './Toast'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
export default function Register() {
    const [state,setState]=useState({
        email:'',
        password:'',
        confirmPassword:''
    })
    const nav=useNavigate()
    const {toast} =useContext(ToastContext)
    const handlerchange=async()=>{
        const {email,password,confirmPassword}=state
        if(password !=confirmPassword){
            toast.error('password and confirmpassword must be same')
        }else if(password.length<8){
            toast.error('password should contain 8 char')
        }else{
            const res =await axios.post('https://login-back.onrender.com/register',{email,password})
            if(res.data =='done'){
                toast.success('done')
                nav('/')
            }else{
                toast.error(res.data)
            }
        }
    }
  return (
    <div className='main-div'>
        <h2 className='inpt-1-h2'>Email</h2>
        <input type="text" placeholder='enter email' className='inpt-1' onChange={(e)=>setState({...state,email:e.target.value})}/>
        <h2 className='inpt-2-h2'>Password</h2>
        <input type="password" placeholder='enter password' className='inpt-2' onChange={(e)=>setState({...state,password:e.target.value})}/>
        <h2 className='inpt-3-h2'>Confirm Password</h2>
        <input type="password" placeholder='enter confirm password' className='inpt-3' onChange={(e)=>setState({...state,confirmPassword:e.target.value})}/>
        <button onClick={handlerchange} style={{display:'block',marginTop:'20px',width:'100px',height:'40px',borderRadius:'10px',border:'none'}} className='btn'>Sign-up</button>
    </div>
  )
}
