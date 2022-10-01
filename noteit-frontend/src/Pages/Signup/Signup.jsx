import React from 'react';
import './Signup.css';
import { AiOutlineUser} from "react-icons/ai";
import { BsKey } from "react-icons/bs";
import { Link } from 'react-router-dom';

const Signup = () => {
  return (
    <div class="login-wrapper d-flex align-items-center justify-content-center">
        <div class="border login-box rounded text-start bg-light px-5 pt-5 pb-4">
            <h4 class="login-text">Register</h4>
            <div class="mt-4">
                <div class="d-flex rounded border border-gray py-2 bg-white">
                    <AiOutlineUser size={25} class="mx-2"/>
                    <input placeholder='Username' type="text" class="ps-2 border-0 w-100"></input>
                </div>
                <div class="mt-2 d-flex py-2 border border-gray rounded bg-white">
                    <BsKey size={25} class="mx-2"/>
                    <input placeholder='Password' type="password" class="ps-2 border-0 w-100"></input>
                </div>
                <div class="mt-2 d-flex py-2 border border-gray rounded bg-white">
                    <BsKey size={25} class="mx-2"/>
                    <input placeholder='Confirm password' type="password" class="ps-2 border-0 w-100"></input>
                </div>
                <div class="mt-4">
                    <button class="w-100 btn btn-success">Sign up</button>
                </div>
            </div>
            <div class="mt-5 text-secondary text-center">
                Already have an account? 
                <Link to="/login" class="ms-1 login-anchor">
                    Log in.
                </Link>
            </div>
        </div>
    </div>
  )
}

export default Signup