import axios from 'axios'
import React from 'react'
import { useState, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import '../style/style.css'
import ToastContext from './Toast'
export default function Content() {
    const { toast } = useContext(ToastContext)
    const navi = useNavigate()
    const hander = async (e) => {
        e.preventDefault()
        const datas = e.target
        const forms = new FormData(datas)
        const tokens = localStorage.getItem('token')
        const headers = { 'Authorization': tokens }
        console.log(headers)
        const res = await axios.post('https://login-back.onrender.com/store', forms,{headers})
        if (res.data === 'successfully added') {
            toast.success(res.data)
            navi('/view')
        }
    }
    return (
        <div className='main-div'>
            <form onSubmit={(e) => hander(e)}>
                <h2>Title :</h2>
                <input type="text" className='inpt-1' name='Title' />
                <h2>File :</h2>
                <input type="file" className='inpt-1' style={{ display: 'block', marginTop: '10px' }} name='image' />
                <h2>Description :</h2>
                <textarea id="" cols="40" rows="5" style={{ borderRadius: '10px', border: 'none', outline: 'none' }} name='Description' />
                <button className='btn' type='submit' style={{ display: 'block', marginTop: '20px', width: '100px', height: '40px', borderRadius: '10px', border: 'none' }}>Send</button>
            </form>
        </div>
    )
}
