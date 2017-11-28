import React, { Component } from 'react';

import { receivedMessage } from '../api';
import MessageList from "./MessageList";
import PostMessageForm from "./PostMessageForm";
import Header from "./Header";
import ChatLogin from "./ChatLogin";



class ChatBox extends Component {
    constructor(props){
        super(props);
        this.state = {
            isLogin: false,
            user: '',
            send: [],
            received: []
        }
    };

    componentDidMount() {
        this.testReceivedMessage();

    }

    userLogin = (user) => {
        this.setState({
            user,
            isLogin: true
        });
        console.log('new user', this.state.user)
    };

    appendChatMessage = (text) => {
        console.log('text value from append chat', text);
        this.setState({
            send: [...this.state.send, text]
        });
    };

    testReceivedMessage = () => {
        receivedMessage(data => {
            const { text, from, createdAt } = data;
            let newReceived = {
                from,
                text,
                createdAt
            };
            this.setState({
                received: [...this.state.received, newReceived]
            });
        });
    };


    render() {
        let classList = [
            "sc-chat-window",
            (this.props.isOpen ? "opened" : "closed")
        ];

        if(!this.state.isLogin){
            return(
                <div className={classList.join(' ')}>
                    <ChatLogin userLogin={this.userLogin} />
                </div>
            )
        }else{
            return (
                <div className={classList.join(' ')}>
                    <Header className=''
                            // teamName={this.props.agentProfile.teamName}
                            teamName={this.state.user}
                            // imageUrl={this.props.agentProfile.imageUrl}
                            onClose={this.props.onClose}
                    />
                    <MessageList data={this.state}
                                 user={this.state.user}
                                 // receivedMessage={this.state.received}
                    />
                    <PostMessageForm appendChatMessage={this.appendChatMessage}
                                     user={this.state.user}

                    />
                </div>
            );
        }
    }
}

export default ChatBox;
