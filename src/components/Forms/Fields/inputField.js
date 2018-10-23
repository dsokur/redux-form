import React from 'react'

const inputField = ({ input, label, type, placeholder }) => (
    <div className='line'>
        <label>{ label }</label>
        <div>
            <input {...input} placeholder={placeholder} type={type} disabled={''} />
        </div>
    </div>
);


export default inputField