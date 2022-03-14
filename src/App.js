
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Note from './Note/Note';


class App extends Component {

  constructor(props){
    super(props);

    this.state ={
      notes: [
        {id: 1, noteContent: "Note 1 here!54321 "},
        {id: 2, noteContent: "Note 2 here!!!!"},
        {id: 3, noteContent: "Note 3 here yo!"},
        {id: 3, noteContent: "Note 4 test!"}
      ],

    }
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
      </div>
    );
  }
  
  }
  
export default App;
