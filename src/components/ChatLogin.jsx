import React, { Component } from 'react';
import SendIcon from './icons/SendIcon';

class ChatLogin extends Component{
    constructor(props){
        super(props);
        this.state = {
            userLogin: ''
        }
    }

    handleAnyInputChange = (event, nameInState) => {
        this.setState({
            [nameInState]: event.target.value,
        });
    };

    submitLogin = (event) => {
        event.preventDefault();
        const { userLogin } = this.state;
        this.props.userLogin(userLogin)
        this.setState({
            userLogin: ''
        })


    };


    render(){
        return(
            <div className='sc-chat-login'>
                <p>login panel</p>
                <input type="text"
                       className="sc-user-login--text"
                       onChange={event => this.handleAnyInputChange(event, 'userLogin')}
                       value={this.state.userLogin}

                />
                <button onClick={this.submitLogin}>Login</button>
            </div>
        )
    }
}

export default ChatLogin