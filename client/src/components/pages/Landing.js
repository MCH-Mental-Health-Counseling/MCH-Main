import React from 'react';
import "./Landing.scss";
import Chatbot from '../chatbot/Chatbot';

const Landing = ({ view, setView }) => {
    const openChatboat = () =>{
        setView("chatboat")
    }
    return (
        <>
            <div className='landingPage_container'>
                <h3>Welcome to MHC</h3>
                <h5>
                    Mental health is something that affects us all, and it's important to take control of it. With the help of AI, we can now monitor our mental health better and more efficiently. AI tools can help us to recognize patterns in our behavior, alert us to potential problems, and even suggest ways to improve our mental health. By using these tools, we can gain a better understanding of our own mental state and be proactive in taking steps to maintain a healthy mind.
                </h5>
                <p onClick={openChatboat}>Get support with the help of our Chatbot.</p>
            </div>
            {/* {view === "chatboat" && ( */}
                {/*<Chatbot />*/}
            {/* )} */}
        </>
    )
}

export default Landing;