import React from 'react'
import { useEffect } from 'react'
import axios from 'axios'
import { useState } from 'react'
import '../style/style.css'
import { useNavigate } from 'react-router-dom'
export default function View() {
    const [state, setState] = useState([])
    const [mstate, msetState] = useState(false)
    let nav =useNavigate()
    useEffect(() => {
        const res = async () => {
            const tokens = localStorage.getItem('token')
            const headers = { 'Authorization': tokens }
            console.log(headers)
            const re = await axios.post('https://login-back.onrender.com/store/geting', null, { headers })
            setState(re.data)
        }
        res()
    }, [])
    const handlerchange = () => {
        localStorage.clear()
        nav('/',{replace:false})
        
    }
    return (
        <div>
            <div className='logout-div'>
                <h1 onMouseOver={() => msetState(true)}  >Logout</h1>
                {mstate ? <p className='logging-out' onClick={handlerchange}>Click</p> : ''}
            </div>
            {state.map((e) => {
                return (
                    <div className='main'>
                        <h2>Title :</h2>
                        <section className='sec-1'><h1>{e.Title}</h1></section>
                        <h2>Image :</h2>
                        <section className='sec-2'><img src={e.image} style={{ width: '350px', height: '300px' }} /></section>
                        <h2>Description :</h2>
                        <section className='sec-3'> <a href={e.image}><h1>{e.Description}</h1></a></section>
                        <hr />
                    </div>
                )
            })}
        </div>
    )
}
