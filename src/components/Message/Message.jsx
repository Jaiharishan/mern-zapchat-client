import { Avatar } from '@material-ui/core'
import React from 'react'

const Message = () => {
    return (
        <div className='d-flex flex-column' style={{width: 'fit-content'}}>

            <div className="d-flex align-items-center justify-content-between px-1">
                <div className="d-flex align-items-center">
                    <Avatar src='assets/person/4.jpeg' />
                    <div className="mx-2">samuel</div>
                </div>

                <div className="">14:34</div>
            </div>


            <div className="d-flex align-items-center py-2 px-3 mt-2" style={{background: '#f8f8f8', borderRadius: '1em'}}>
                hello I am jai! Nice to meet you
            </div>

            
            

        </div>
    )
}

export default Message
