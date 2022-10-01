import axios from 'axios';
import React, { useEffect } from 'react';
import { useState } from 'react';
import { AiOutlineEdit, AiFillDelete } from "react-icons/ai";
import Topbar from '../../components/Topbar';
import Note from '../../components/Note';
import './Home.css';

const Home = ({ login }) => {

  const [notes, setNotes] = useState([])
  const [title, setTitle] = useState('')
  const [desc, setDesc] = useState('')
  const [notechange, setNotechange] = useState(false)


  const token = JSON.parse(localStorage.getItem('user'))

  useEffect(() => {

    const getNotes = async () => {
      const result = await axios.get('http://localhost:5000/api/note/', { headers: { 'Authorization': `Bearer ${token}` } })
      console.log(result.data[0].notes)
      setNotes(result.data[0].notes)
    }
    try {
      getNotes()
    }
    catch (err) {
      console.log(err)
    }

  }, [notechange])


  const handleCreate = async () => {
    if (title.length != 0 && desc.length != 0) {
      const token = JSON.parse(localStorage.getItem('user'))
      try {
        const result = await axios.post('http://localhost:5000/api/note/create', {
          title,
          description: desc
        }, { headers: { 'Authorization': `Bearer ${token}` } })
        setTitle('')
        setDesc('')
        setNotechange(oldValue => !oldValue)
        console.log(result)
      }
      catch (err) {
        setTitle('')
        setDesc('')
        console.log(err)
      }
    }
  else {
    return;
  }
  }

  return (
    <>
      <Topbar login={login} />
      <div class="py-4 container">

        <div class="border alert alert-warning " role="alert">
          Welcome, user
        </div>

        <span class="display-6 notes-header">Your Notes ({notes.length})</span>
        <div class="mt-3">
          <input class="border border-gray rounded ps-2 py-2 bg-light newnote-input" placeholder='Title' value={title}
            onChange={(e) => { setTitle(e.target.value) }}>
          </input>
        </div>
        <div class="mt-2">
          <textarea class="border border-gray rounded ps-2 py-2 bg-light newnote-input" placeholder='Description' value={desc}
            onChange={(e) => { setDesc(e.target.value) }}>
          </textarea>
        </div>
        <div class="mt-3">
          <button class="btn btn-primary rounded" onClick={handleCreate}>Create new note</button>
        </div>
        <div class="row mt-3">
          {
            !notes.length ? <div>No notes found. Click the ADD button to add a note.</div>
              :
              notes.map((note, index) => {
                return (
                  <div class="col-12 col-md-3 mt-4">
                    <Note note={note} notechange={setNotechange}/>
                  </div>
                )
              })
          }
        </div>

      </div>
    </>
  )
}

export default Home