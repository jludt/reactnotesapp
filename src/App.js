
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Note from './Note/Note';
import NewNoteForm from './NewNoteForm/NewNoteForm';

class App extends Component {

  constructor(props){
    super(props);
    this.addNote = this.addNote.bind(this);

    this.state ={
      notes: [
        {id: 1, noteContent: "Note 1 here!"},
        {id: 2, noteContent: "Note 2 here!"},

      ],

    }
  }

  addNote(note){
    //push the note onthe the notes array
    const previousNote = this.state.notes;
    previousNote.push({id: previousNote.length + 1, noteContent: note});
    this.setState({
      notes: previousNote
    })

  }
  render() {
    return (
    
      <div className="notesWrapper">
        <div className="notesHeader">
          <div className="heading">My React & Firebase Notes & To-Do List</div>
        </div>
        <div className="notesBody">
          {
            this.state.notes.map((note ) => {
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
