import React, { Component } from 'react';

import { createMessage } from '../api';

class PostMessageForm extends Component {
    constructor(props){
        super(props);
        this.state = {
            from: 'User',
            text: '',
        }
    }

    handleAnyInputChange = (event, nameInState) => {
        event.target.classList.add('active');
        this.setState({
            [nameInState]: event.target.value,
        });
        this.showInputError(event.target.name);
    };

    submitChat = (event) => {
        event.preventDefault();

        if(!this.showFormErrors()){
            return console.log('form is invalid: do not submit');
        }else{
            console.log('form is valid: submit');
            const { text } = this.state;
            // console.log('Chat text: ', text);
            this.props.appendChatMessage(this.state.text);
            createMessage(this.state);
            this.setState({
                text: ''
            });
        }

    };


    showFormErrors(){
        const inputs = document.querySelectorAll('input');
        let isFormValid = true;

        inputs.forEach(input => {
            input.classList.add('active');
            let isInputValid = this.showInputError(input.name);

            if(!isInputValid){
                isFormValid = false;
            }
        });
        return isFormValid;
    }


    showInputError(refName){
        const validity = this.refs[refName].validity;
        const label = document.getElementById(`${refName}Label`).textContent;
        const error = document.getElementById(`${refName}Error`);

        if(!validity.valid){
            if (validity.valueMissing) {
                error.textContent = `${label} is a required field`;
            }
            return false;
        }
        error.textContent = '';
        return true;
    }



    render(){
        return (
            <div className='form-inline'>
                <div className='form-group'>
                    <div className='error' id='messageError' />
                    <label id='messageLabel'>Message</label>
                    <input type="text"
                           name='message'
                           ref='message'
                           className='form-control'
                           placeholder='Add a message'
                           value={this.state.text}
                           onChange={event => this.handleAnyInputChange(event, 'text')}
                           required
                    />
                    <button className='btn btn-success'
                            type='button'
                            onClick={this.submitChat}

                    >
                        Submit
                    </button>
                </div>
            </div>
        )
    }
}

export default PostMessageForm;
