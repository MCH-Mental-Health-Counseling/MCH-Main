import React from 'react';

const userIcon = require('../Images/userIcon.png');
const orgIcon = require('../Images/Organization Logo.png');
const Message = (props) => {
    return (

        <div className="col s12 m8 offset-m2 l6 offset-13">
            <div className="white lighten-5">
                {props.speaks === 'bot' && <div className="row valign-wrapper" style={{ display: 'flex', alignItems: 'center', marginBottom: 0 }}>

                    <div className="col" style={{ marginLeft: '2%', marginTop: '2%' }}>
                        <img src={orgIcon} className="btn-floating" style={{ width: '40px', height: '40px', backgroundColor: 'white' }} />
                        {/*<a className="btn-floating waves-effect waves-light blue" style={{ fontSize: '11px', textAlign: 'center' }}>{props.speaks}</a>*/}
                    </div>
                    <div style={{ marginTop: '2%', width: '65%' }}>
                        <span className="black-text" style={{ backgroundColor: '#e8e4e4', display: 'inline-block', padding: '2%', borderRadius: '5px' }}>
                            {props.text}
                        </span>
                    </div>
                </div>
                }
                <div className="white lighten-5">
                    {props.speaks === 'user' && <div className="row valign-wrapper" style={{ display: 'flex', alignItems: 'center', marginBottom: 0, justifyContent: 'flex-end' }}>
                        <div style={{ marginTop: '2%', textAlign: 'right', width: '65%' }}>
                            <span className="black-text" style={{ backgroundColor: '#d9e7f5', padding: '2%', borderRadius: '5px' }}>
                                {props.text}
                            </span>
                        </div>

                        <div className="col" style={{ marginRight: '2%', marginTop: '2%' }}>
                            <img src={userIcon} className="btn-floating" style={{ width: '40px', height: '40px', backgroundColor: 'white' }} />
                            {/* <a className="btn-floating waves-effect waves-light blue" style={{ fontSize: '11px', textAlign: 'center' }}>{props.speaks}</a> */}
                        </div>
                    </div>
                    }
                </div>
            </div>
        </div>

    );
};


export default Message;