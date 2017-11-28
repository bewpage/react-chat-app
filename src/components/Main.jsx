import React, { Component } from 'react';
import { receivedMessage } from '../api';
import ChatBox from "./ChatBox";
import ChatLogin from "./ChatLogin";



class Main extends Component {
    constructor(props){
        super(props);
        this.state = {
            newTest: [],
        }
    };

    componentDidMount(){
        receivedMessage((data) => {
            this.setState({
                newTest: [data]
            })
        })
    }






    render() {
        let classList = [
            "sc-chat-window",
            (this.props.isOpen ? "opened" : "closed")
        ];
        return (
            <div>
                <ChatLogin className={classList.join(' ')}/>
                {/*<ChatBox newTest={this.state.newTest}/>*/}
            </div>
        );
    }
}

export default Main;
