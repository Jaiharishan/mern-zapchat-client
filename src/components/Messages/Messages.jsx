import Message from '../Message/Message'
import React from 'react'
import { Send } from '@material-ui/icons';
import { IconButton } from '@material-ui/core';

const Messages = () => {
    const user = true;
    const array = [1, 0, 1, 0, 1, 1, 0, 0];
    return (
        <div className='d-flex flex-column p-3'>

            {
                array.map((message, index) => {
                    return message ? <div key={index} className='d-flex align-items-center justify-content-start mt-3'><Message /></div> : <div key={index} className='d-flex align-items-center justify-content-end mt-3'><Message /></div> 
                })
            }
            

            <div className="d-flex align-items-center mt-4 mb-2">
                <input className='w-100 px-3 py-2' type="text" style={{outline: 'none', borderRadius: '1.5em', border: '1px solid rgb(200, 200, 200)'}} />

                <IconButton className='mx-1' style={{background: '#f3f3f3'}}>
                    <Send />
                </IconButton>
            </div>
        </div>
    )
}

export default Messages
