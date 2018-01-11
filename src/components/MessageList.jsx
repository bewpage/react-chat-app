import React, { Component } from 'react';

import Message from './Messages'

class MessageList extends Component {



    render() {
        // console.log('sprawdzam co to jest this.props.data.send', this.props.data.send)
            return(
                <div className='sc-message-list'>
                    <ul>
                        {this.props.data.received.map((message, i) => {
                            // console.log('test sprawdzic co received', message);
                            return(
                                <Message user={this.props.user} key={i} message={message.text} from={message.from}/>
                            )
                        })
                        }
                    </ul>
                </div>
            )
    }
}




export default MessageList;
