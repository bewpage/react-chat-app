import React, { Component } from 'react';

import MessageList from "./MessageList";
import PostMessageForm from "./PostMessageForm";


class ChatBox extends Component {
    constructor(props){
        super(props);
        this.state = {
            messages: []
        }
    };

    appendChatMessage = (text) => {
        let newMessage = {
            id: new Date().getTime(),
            timestamp: new Date().getTime(),
            text
        };
        this.setState({
            messages:[...this.state.messages, newMessage]
        });
    };


    render() {
        return (
            <div>
                <hr/>
                <h4>Chat Box</h4>
                <MessageList messages={this.state.messages}/>
                <PostMessageForm appendChatMessage={this.appendChatMessage}/>
            </div>
        );
    }
}

export default ChatBox;
