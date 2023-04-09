import React, { useState, useEffect } from 'react';

const Card = (props) => {

    const [couponCode, setCouponCode] = useState('');

    useEffect(() => {
        function generateCouponCode(length) {
            const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
            let code = '';
            for (let i = 0; i < length; i++) {
                code += chars.charAt(Math.floor(Math.random() * chars.length));
            }
            return code;
        }

        const code = generateCouponCode(8); // generate an 8-character code
        setCouponCode(code);
    }, []);

    return (

        <div style={{ width: 350, paddingRight: 30, marginLeft: '25%'}}>
            <div className="card">
                <p>{props.text}</p>
                <div className="card-image" style={{width: 320}}>
                    <img src={props.payload.fields.image.stringValue} />
                </div>
                <div className="card-content">
                    {props.payload.fields.description.stringValue}
                    <p><b>CouponCode: </b><a>{couponCode}</a></p>
                </div>
                <div className="card-action">
                    <a target="_blank" rel="noopener noreferrer" href={props.payload.fields.link.stringValue}>Book now</a>
                </div>
            </div>
        </div>
    );
};

export default Card;