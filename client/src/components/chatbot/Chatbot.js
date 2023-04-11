import React, { Component, useEffect, useRef, useState } from 'react';
import axios from 'axios';
import Message from './Message';
import Cookies from 'universal-cookie';
import { v4 as uuid } from 'uuid';
import Card from './Card';
import QuickReplies from './QuickReplies';
import "./Chatbot.scss";
//import ReactDOM from "react-dom";
//import ChatBot from 'react-simple-chatbot';
import { withRouter } from 'react-router-dom';


const cookies = new Cookies();

const Chatbot = (props) => {
  // const [messagesEnd, setMessageEnd] = useState();
  const messagesEndRef = useRef(null);
  const talkInput = useRef();
  const [messages, setMessages] = useState([]);
  const [showBot, setShowBot] = useState(true);
  const [shopWelcomeSent, setShopWelcomeSent] = useState(false);
  const [userId, setUserId] = useState();
  // const [isInitial, setIsInitial] = useState(false);
  let isInitial = false;

  const df_text_query = async (queryText) => {
    let says = {
      from: "user",
      message: queryText,
      userId: userId,
    };
    await saveMessage(queryText, "user");
    let msgs = [...messages, says];
    const res = await axios.post('/api/df_text_query', { text: queryText, userID: cookies.get('userID') });
    for (let msg of res.data.fulfillmentMessages) {
      console.log(JSON.stringify(msg));
      says = {
        from: "bot",
        message:
          msg && msg.text && msg.text.text.length
            ? msg.text.text[0]
            : null,
        userId: userId,
        msg: msg,
      };
      msgs = [...msgs, says];
      await saveMessage(
        msg && msg.text && msg.text.text.length ? msg.text.text[0] : null,
        "bot"
      );
    }
    setMessages(msgs);
  };
  const df_event_query = async (eventName) => {
    const res = await axios.post('/api/df_event_query', { event: eventName, userID: cookies.get('userID') });
    for (let msg of res.data.fulfillmentMessages) {
      let says = {
        from: "bot",
        message: msg.text.text.length ? msg.text.text[0] : null,
        userId: JSON.parse(localStorage.getItem("user"))?._id,
        msg: msg,
      };
      saveMessage(
        msg.text.text.length ? msg.text.text[0] : null,
        "bot",
        JSON.parse(localStorage.getItem("user"))?._id
      );
      setMessages([says]);
    }
  };

  const saveMessage = async (msg, from, id = userId) => {
    if (msg && (JSON.parse(localStorage.getItem("user"))?._id))
      await axios.post("/api/message", {
        message: msg,
        userId: JSON.parse(localStorage.getItem("user"))?._id,
        from: from,
      });
  };

  const getMessages = async () => {
    const response = await axios.get(
      "/api/message/" + JSON.parse(localStorage.getItem("user"))?._id
    );
    if (response.status === 200) {
      return response.data.messages;
    }
  };

  useEffect(() => {
    if (!isInitial) {
      isInitial = true;
      if (cookies.get('userID') === undefined) {
        cookies.set('userID', uuid(), { path: '/' });
        console.log(cookies.get('userID'));
      }
      setUserId(JSON.parse(localStorage.getItem("user"))?._id);
      let messages = [];
      const callmsgs = async () => {
        if (JSON.parse(localStorage.getItem("user"))?._id)
          messages = await getMessages();
        console.log(messages.length);
        if (messages.length === 0) df_event_query("Greeting");
        else setMessages([...messages]);
      };
      callmsgs();
    }
  }, []);

  useEffect(()=> {
    let messages = [];
    const callmsgs = async () => {
      if (JSON.parse(localStorage.getItem("user"))?._id)
        messages = await getMessages();
      console.log(messages.length);
      if (messages.length === 0) df_event_query("Greeting");
      else setMessages([...messages]);
    };
    callmsgs();
  },[props.loggedIn]
  )

  /*useEffect(() => {
    messagesEnd?.current?.scrollIntoView({
      behavior: "smooth"
    });
    talkInput?.current?.focus();
  }, [messagesEnd, talkInput]); */

  useEffect(() => {
    messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
  }, [messages]);


  const show = (event) => {
    event.preventDefault();
    event.stopPropagation();
    setShowBot(true);
  };

  const hide = (event) => {
    event.preventDefault();
    event.stopPropagation();
    setShowBot(false);
  };


  const _handleQuickReplyPayload = (event, payload, text) => {
    event.preventDefault();
    event.stopPropagation();

    df_text_query(text);

  }

  const renderCards = (cards) => {
    return cards.map((card, i) => <Card key={i} payload={card.structValue} />);
  }

  const renderOneMessage = (message, i) => {

    if (message?.message) {
      return <Message key={i} speaks={message.from} text={message.message} />;
    } else if (message?.msg && message?.msg?.payload?.fields?.cards) { //message.msg.payload.fields.cards.listValue.values

      return <div key={i}>
        <div className='col s12 m8 offset-m2 l6 offset-13'>
          <div className="white lighten-5">
            <div className="row">
              <div style={{ overflow: 'hidden' }}>
                <div className="col" style={{ marginLeft: '2%', marginTop: '2%' }}>
                  <img src={orgIcon} className="btn-floating" style={{ width: '40px', height: '40px', backgroundColor: 'white' }} />
                  {/*<a className="btn-floating waves-effect waves-light blue" style={{ fontSize: '11px', textAlign: 'center' }}>{props.speaks}</a>*/}
                </div>
                <div>
                  <div style={{ height: 320, width: message.msg.payload.fields.cards.listValue.values.length * 300 }}>
                    {renderCards(message.msg.payload.fields.cards.listValue.values)}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    } else if (message?.msg &&
      message?.msg?.payload &&
      message?.msg?.payload.fields &&
      message?.msg?.payload?.fields?.quick_replies
    ) {
      return <QuickReplies
        text={message.msg.payload.fields.text ? message.msg.payload.fields.text : null}
        key={i}
        replyClick={_handleQuickReplyPayload}
        speaks={message.speaks}
        payload={message.msg.payload.fields.quick_replies.listValue.values} />;
    }
  }

  const renderMessages = (returnedMessages) => {
    if (returnedMessages) {
      return returnedMessages.map((message, i) => {
        return renderOneMessage(message, i);
      }
      );
    } else {
      return null;
    }
  }

  const _handleInputKeyPress = (e) => {
    if (e.key === 'Enter') {
      df_text_query(e.target.value);
      e.target.value = '';
    }
  }
  const orgIcon = require('../Images/Organization Logo.png');

  if (showBot) {
    return (
      <div style={{ position: 'absolute' }} className='chatBoat_content'>
        <nav>
          <div className="chatboat-nav-wrapper blue">
            <img src={orgIcon} className="btn-floating" style={{ width: '45px', height: '45px', backgroundColor: 'white', marginLeft: '5%' }} />
            <a href="/" className="brand-logo" style={{ marginLeft: "2%" }}>MHC Agent</a>
            <ul id="nav-mobile" className="right hide-on-med-and-down">
              <li><a onClick={hide}><b>Close</b></a></li>
            </ul>
          </div>
        </nav>
        <div className='chatboat_block'>
          <div id="chatbot" style={{ width: '100%', overflowY: 'auto', overflowX: 'hidden' }}>
            {renderMessages(messages)}
            <div ref={messagesEndRef}
              style={{ float: "left", clear: "both" }}>
            </div>
          </div>
          <div className="input_area" >
            <input style={{ margin: 0, paddingLeft: '1%', paddingRight: '1%', width: '100%' }} ref={talkInput} placeholder="Type your message...:" onKeyPress={_handleInputKeyPress} id="user_says" type="text" />
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div style={{ minHeight: 40, maxHeight: 500, width: 400, position: 'absolute', bottom: 0, right: 0, border: '1px solid lightgray' }}>
        <nav>
          <div className="nav-wrapper blue">
            <img src={orgIcon} className="btn-floating" style={{ width: '45px', height: '45px', backgroundColor: 'white', marginLeft: '5%' }} />
            <a href="/" className="brand-logo" style={{ marginLeft: "2%" }}>MHC Agent</a>
            <ul id="nav-mobile" className="right hide-on-med-and-down">
              <li><a onClick={show}>Open</a></li>
            </ul>
          </div>
        </nav>
        <div ref={messagesEndRef}
          style={{ float: "left", clear: "both" }}>
        </div>
      </div>
    );
  }

}

export default Chatbot;