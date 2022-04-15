import React, { Component} from 'react';
import './NewNoteForm.css';

class NewNoteForm extends Component{
    constructor(props){
        super(props);
            this.state = {
                newNoteContent: '',
            };
            this.handleUserInput = this.handleUserInput.bind(this);
            this.writeNote = this.writeNote.bind(this);
        }

        //When the user input changes, set the newNoteContent
        //to the new note value
        handleUserInput(e){
            this.setState({
                newNoteContent: e.target.value, // value of the text input
            })
        }

        writeNote(){
            // call method that sets the noteContent for a note to
            // the avlue of the input
            this.props.addNote(this.state.newNoteContent);
            this.setState({
                newNoteContent: '',
            })
        }

        render(){
            return(
             <div className='formWrapper'>
                 <input className='noteInput'
                 placeholder='Write a new note...'
                 value = {this.state.newNoteContent}
                 onChange={this.handleUserInput} />
                 <button className='noteButton'
                 onClick={this.writeNote}>Add Note</button>
             </div>   
            )
        }
}

export default NewNoteForm;