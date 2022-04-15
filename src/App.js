
import React, { Component, useState, useEffect } from 'react';
import './App.css';
import Note from './Note/Note';
import NewNoteForm from './NewNoteForm/NewNoteForm';
import {db} from './Config/config';
import { collection, getDocs, getDoc, addDoc, updateDoc, deleteDoc, doc } from 'firebase/firestore';
import { getDatabase, ref, set, onValue } from 'firebase/database';

const noteCollection = collection(db, "mynotes");
class App extends Component {

  constructor(props){
    super(props);
    this.addNote = this.addNote.bind(this);
    // this.app = firebase.initializeApp(DB_CONFIG);
    // this.database = this.app.database().ref().child('notes');
  
    
   
    this.state ={
      notes: [
        { id: 1,
           noteContent: "Note 1!!"}
      ],
    }
  }


  getAllBooks = () => {
    return getDocs(noteCollection);
  }



  addNote(note){
    //push the note onthe the notes array
    // const previousNote = this.state.notes;
    // previousNote.push({id: previousNote.length + 1, noteContent: note});
    // this.setState({
    //   notes: previousNote
    // })
    this.db.push().set({ noteContent: note });
  }

  render() {
    
    const { noteId, noteContent } = this.state

    return (
      <div className="notesWrapper">
        <div className="notesHeader">
          <div className="heading">My Notes & To-Do's</div>
        </div>
        <div className="notesBody">
          {
            this.state.notes.map((note) => {
              return (
                <Note noteContent={note.noteContent} notedId = {note.id} key={note.id}/>
              )
            })
          }
      </div>
        <div className='notesFooter'>
            <NewNoteForm addNote={this.addNote}/>
        </div>
      </div>
    );
  }
}
  
export default App;
