import React, { Component } from 'react';

// import MessageItem from './MessageItem';
import Message from './Messages'


class MessageList extends Component {



    render() {
        return (
            <div className='sc-message-list'>
                <ul key={1}>
                    {this.props.messages.map((message, i) => {
                        return(
                            <Message key={i} message={message.text} />)
                    })
                    }
                </ul>
            </div>
        );
    }
}

export default MessageList;
