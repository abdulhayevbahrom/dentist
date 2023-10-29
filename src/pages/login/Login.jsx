import React, { useState } from 'react'
import { FaEye } from 'react-icons/fa'
import { AiFillEyeInvisible } from 'react-icons/ai'
import './Login.css'
import { useNavigate } from 'react-router-dom'

const Login = () => {
    const navigate = useNavigate()

    const [eyeState, setEyeState] = useState(false)

    function login(e) {
        e.preventDefault()
        let value = new FormData(e.target)
        let adminData = Object.fromEntries(value)
        localStorage.setItem("admin", JSON.stringify(adminData))
        navigate('/admin')
        window.location.reload()

    }

    return (
        <div className='login'>
            <form onSubmit={login} >
                <h2>Login</h2>

                <label htmlFor="username">username</label>
                <input type="text" name='username' id="username" />
                <label htmlFor="password">password</label>
                <div>
                    <input name="password" type={!eyeState ? "password" : "text"} id='password' />
                    {!eyeState ?
                        <FaEye onClick={() => setEyeState(!eyeState)} />
                        :
                        <AiFillEyeInvisible onClick={() => setEyeState(!eyeState)} />}
                </div>

                <button type='submit'>Login</button>
            </form>
        </div>
    )
}

export default Login
