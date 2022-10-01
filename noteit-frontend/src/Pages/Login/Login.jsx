import React, { useState } from 'react';
import "./Login.css";
import { AiOutlineUser } from "react-icons/ai";
import { BsKey } from "react-icons/bs";
import { Link } from 'react-router-dom';
import ClipLoader from "react-spinners/ClipLoader";
import axios from 'axios'

const Login = ({login}) => {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    const handleLogin = async () => {
        setError(null)
        if(username.length<5 || password.length<5 ) {
            setError("Username and password must contain atleast 5 characters")
            return;
        }
        try {
            setLoading(true)
            const result = await axios.post('http://localhost:5000/api/auth', {
                username,
                password
            })
            localStorage.setItem('user', JSON.stringify(result.data))
            // window.location.href="/"
            login(true)
            setLoading(false)
            setError(null)
            console.log(result) 
        }
        catch(err) {
            setLoading(false)
            setError(err.response.data)
        }
    }


    return (
        <div class="login-wrapper d-flex align-items-center justify-content-center">
            <div class="border login-box rounded text-start bg-light px-5 pt-5 pb-4">
                <h4 class="login-text">Login</h4>
                <div class="mt-4">
                    <div class="d-flex rounded border border-gray py-2 bg-white">
                        <AiOutlineUser size={25} class="mx-2" />
                        <input placeholder='Username' type="text" class="ps-2 border-0 w-100"
                            value={username}
                            onChange={(e) => {
                                setUsername(e.target.value)
                            }}>
                        </input>
                    </div>
                    <div class="mt-2 d-flex py-2 border border-gray rounded bg-white">
                        <BsKey size={25} class="mx-2" />
                        <input placeholder='Password' type="password" class="ps-2 border-0 w-100"
                            value={password}
                            onChange={(e) => {
                                setPassword(e.target.value)
                            }}>
                        </input>
                    </div>
                    <div class="mt-4">
                        <button class="w-100 btn btn-success" onClick={handleLogin}>Log in</button>
                    </div>

                    <div class="mt-4 text-center">
                        <ClipLoader loading={loading} size={20}></ClipLoader>
                        <span class="text-danger">{error}</span>
                    </div>

                </div>
                <div class="mt-5 text-secondary text-center">
                    Don't have an account?
                    <Link to="/signup" class="ms-1 login-anchor">
                        Sign up.
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Login