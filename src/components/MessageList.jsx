import React, { Component } from 'react';


class MessageList extends Component {
    render() {
        console.log('MessageList', this.props.messages);
        return (
            <div>
                <h5>Message List</h5>
                <ul>
                    {this.props.messages.map( message =>
                            <li key={message.id}>{message.text}</li>)
                    }
                </ul>
            </div>
        );
    }
}

export default MessageList;
