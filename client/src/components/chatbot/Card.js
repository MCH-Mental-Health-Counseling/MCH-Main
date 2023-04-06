import React from 'react';

const Card = (props) => {
    return (
        <div style={{ width: 350, paddingRight: 30, marginLeft: '25%'}}>
            <div className="card">
                <p>{props.text}</p>
                <div className="card-image" style={{width: 320}}>
                    <img src={props.payload.fields.image.stringValue} />
                </div>
                <div className="card-content">
                    {props.payload.fields.description.stringValue}
                    <p><b>CouponCode: </b><a>{props.payload.fields.Coupancode.stringValue}</a></p>
                </div>
                <div className="card-action">
                    <a target="_blank" rel="noopener noreferrer" href={props.payload.fields.link.stringValue}>Book now</a>
                </div>
            </div>
        </div>
    );
};

export default Card;