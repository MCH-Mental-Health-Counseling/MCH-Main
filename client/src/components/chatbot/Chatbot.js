import React, { Component } from 'react';
import axios from 'axios';
import Message from './Message';
import Cookies from 'universal-cookie';
import { v4 as uuid } from 'uuid';
//import ReactDOM from "react-dom";
//import ChatBot from 'react-simple-chatbot';


const cookies = new Cookies();

class Chatbot extends Component {
    messagesEnd;
    talkInput;
    constructor(props) {
        super(props);
        this._handleInputKeyPress = this._handleInputKeyPress.bind(this);
        this.state = {
            messages: []
        };

        if (cookies.get('userID') === undefined) {
            cookies.set('userID', uuid(), { path: '/' });
        }
        console.log(cookies.get('userID'));
    }
    async df_text_query(queryText) {
        let says = {
            speaks: 'user',
            msg: {
                text: {
                    text: queryText
                }
            }
        }
        this.setState({ messages: [...this.state.messages, says] });
        const res = await axios.post('/api/df_text_query', { text: queryText, userID: cookies.get('userID') });
        for (let msg of res.data.fulfillmentMessages) {
            says = {
                speaks: 'MHC',
                msg: msg
            }
            this.setState({ messages: [...this.state.messages, says] });
        }
    };
    async df_event_query(eventName) {
        const res = await axios.post('/api/df_event_query', { event: eventName, userID: cookies.get('userID') });
        for (let msg of res.data.fulfillmentMessages) {
            let says = {
                speaks: 'MHC',
                msg: msg
            }
            this.setState({ messages: [...this.state.messages, says] });
        }
    };


    componentDidMount() {
        this.df_event_query('Welcome');
    }

    componentDidUpdate() {
        this.messagesEnd.scrollIntoView({ behaviour: 'smooth' });
        this.talkInput.focus();
    }

    renderMessages(returnedMessages) {
        if (returnedMessages) {
            return returnedMessages.map((message, i) => {
                return <Message key={i} speaks={message.speaks} text={message.msg.text.text} />;
            }
            )
        } else {
            return null;
        }
    }

    _handleInputKeyPress(e) {
        if (e.key === 'Enter') {
            this.df_text_query(e.target.value);
            e.target.value = '';
        }
    }
    render() {
        return (
            <div style={{ height: 400, width: 400, float: 'right' }}>
                <div id="chatbot" style={{ height: '100%', width: '100%', overflow: 'auto' }}>
                    <h2>MHC Agent</h2>
                    {this.renderMessages(this.state.messages)}
                    <div ref={(el) => { this.messagesEnd = el; }}
                        style={{ float: "left", clear: "both" }}>
                    </div>
                    <input type="text" ref={(input) => { this.talkInput = input; }} onKeyPress={this._handleInputKeyPress} />
                </div>
            </div>
        );
    }
}

/*const steps = [
    {
      id: '1',
      message: 'What is your name?',
      trigger: 'name',
    },
    {
      id: 'name',
      user: true,
      trigger: '3',
    },
    {
      id: '3',
      message: 'Hi {previousValue}! What is your gender?',
      trigger: 'gender',
    },
    {
      id: 'gender',
      options: [
        { value: 'male', label: 'Male', trigger: '5' },
        { value: 'female', label: 'Female', trigger: '5' },
      ],
    },
    {
      id: '5',
      message: 'How old are you?',
      trigger: 'age',
    },
    {
      id: 'age',
      user: true,
      trigger: '7',
      validator: (value) => {
        if (isNaN(value)) {
          return 'value must be a number';
        } else if (value < 0) {
          return 'value must be positive';
        } else if (value > 120) {
          return `${value}? Come on!`;
        }

        return true;
      },
    },
    {
      id: '7',
      message: 'Great! Check out your summary',
      trigger: 'review',
    },
    {
      id: 'review',
      //component: <Review />,
      //asMessage: true,
      message: 'Great! Check out your summary',
      trigger: 'update',
    },
    {
      id: 'update',
      message: 'Would you like to update some field?',
      trigger: 'update-question',
    },
    {
      id: 'update-question',
      options: [
        { value: 'yes', label: 'Yes', trigger: 'update-yes' },
        { value: 'no', label: 'No', trigger: 'end-message' },
      ],
    },
    {
      id: 'update-yes',
      message: 'What field would you like to update?',
      trigger: 'update-fields',
    },
    {
      id: 'update-fields',
      options: [
        { value: 'name', label: 'Name', trigger: 'update-name' },
        { value: 'gender', label: 'Gender', trigger: 'update-gender' },
        { value: 'age', label: 'Age', trigger: 'update-age' },
      ],
    },
    {
      id: 'update-name',
      update: 'name',
      trigger: '7',
    },
    {
      id: 'update-gender',
      update: 'gender',
      trigger: '7',
    },
    {
      id: 'update-age',
      update: 'age',
      trigger: '7',
    },
    {
      id: 'end-message',
      message: 'Thanks! Your data was submitted successfully!',
      end: true,
    },
  ]

const Chatbot = () => {
    return (
        <div>
            <ChatBot steps={steps} />
        </div>
    )
}*/


export default Chatbot;