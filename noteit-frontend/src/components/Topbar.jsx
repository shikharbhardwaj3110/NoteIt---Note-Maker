import React from 'react';
import './Topbar.css';
import { FaStickyNote } from "react-icons/fa";

const Topbar = ({ login }) => {

    const handleLogout = () => {
        localStorage.removeItem('user')
        login(false)
    }

    return (
        <div class="w-100 bg-light border border-gray 
        border-top-0 border-start-0 border-end-0">
        <div class="bg-light px-3 py-2  
                    d-flex align-items-center justify-content-between container">

            <div class="d-flex align-items-center">
                <FaStickyNote color='#ebeb25' size={25} />
                <span class="display-5 topbar-title ms-2">NoteIt</span>
            </div>

            <button class="btn btn-sm btn-outline-danger" onClick={handleLogout}>Logout</button>
            </div>
        </div>
    )
}

export default Topbar