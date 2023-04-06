import React, { Component } from 'react';
import QuickReply from './QuickReply';

const orgIcon = require('../Images/Organization Logo.png');

class QuickReplies extends Component {
    constructor(props) {
        super(props);
        this._handleClick = this._handleClick.bind(this);
    }

    _handleClick(event, payload, text) {
        this.props.replyClick(event, payload, text);
    }

    renderQuickReply(reply, i) {
        return <QuickReply key={i} click={this._handleClick} reply={reply} />;
    }

    renderQuickReplies(quickReplies) {
        if (quickReplies) {
            return quickReplies.map((reply, i) => {
                    return this.renderQuickReply(reply, i);
                }
            )
        } else {
            return null;
        }
    }

    render() {
        return (
            <div className="col s12 m8 offset-m2 l6 offset-l3">
                <div className="white lighten-5">
                    <div className="row valign-wrapper">
                        <div className="col s2">
                        <img src={orgIcon} className="btn-floating" style={{ width: '40px', height: '40px', backgroundColor: 'white',marginLeft: '20%', marginTop: '2%' }} />
                        </div>
                        <div id="quick-replies" className="col s10">
                            {this.props.text && <p>
                                {this.props.text.stringValue}
                            </p>
                            }
                            {this.renderQuickReplies(this.props.payload)}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default QuickReplies;