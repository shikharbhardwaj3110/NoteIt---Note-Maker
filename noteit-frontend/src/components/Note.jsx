import React, { useEffect } from 'react';
import { useState } from 'react';
import { AiOutlineEdit, AiFillDelete } from "react-icons/ai";
import axios from 'axios';

const Note = ({ note, notechange }) => {
    const [title, setTitle] = useState(note.title)
    const [desc, setDesc] = useState(note.description)
    const [disabledstatus, setDisabledstatus] = useState(true)
    const [rendersave, setRendersave] = useState(false)

    const handleEdit = () => {
        setDisabledstatus(false);
        setRendersave(true)
    }

    const handleSave = async () => {
        console.log("updating : ", title, desc);
        const token = JSON.parse(localStorage.getItem('user'))
        try {
            const result = await axios.post('http://localhost:5000/api/note/update', { 
                _id : note._id,
                title,
                description : desc
            }, { headers: { 'Authorization': `Bearer ${token}` } })
            console.log(result)
        }
        catch (err) {
            console.log(err)
        }

        setDisabledstatus(true)
        setRendersave(false)
    }

    const handleDelete = async () => {
        console.log(note.title, note.description)
        const token = JSON.parse(localStorage.getItem('user'))
        try {
            const result = await axios.post('http://localhost:5000/api/note/delete', { _id: note._id }, { headers: { 'Authorization': `Bearer ${token}` } })
            if(result) {
                window.location.reload()
            }
        }
        catch (err) {
            console.log(err)
        } 
    }

    return (
        <div class="p-3 border rounded note-box">
            <textarea class="h4 border-0 note-input-title w-100" placeholder='Title' value={title}
                onChange={(e) => { setTitle(e.target.value); }} disabled={disabledstatus}>
            </textarea>

            <div>
                <hr></hr>
            </div>

            <div class="mt-4">
                <textarea value={desc} placeholder="Note description..." class="text-secondary note-input-desc border-0 w-100"
                    onChange={(e) => { setDesc(e.target.value); }} disabled={disabledstatus}>
                </textarea>
            </div>

            <div class="mt-4 text-end">

                {
                    rendersave ? <button class="btn btn-success btn-sm" onClick={handleSave}>Save</button>
                        : <AiOutlineEdit size={20} color="gray" onClick={handleEdit} />
                }
                <AiFillDelete size={20} class="ms-3" color='#e73636' onClick={handleDelete}/>
            </div>

        </div>
    )
}

export default Note