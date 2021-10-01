import React from 'react'
import { Avatar, IconButton } from '@material-ui/core';
import { MoreVert } from '@material-ui/icons';
const Chatheader = () => {
    return (
        <div className='d-flex align-items-center justify-content-between mt-1 px-3 py-2' style={{borderBottom: '1px solid #f4f4f4'}}>
            
            <div className="d-flex align-items-center">
                <Avatar src='assets/person/4.jpeg' className='mx-2' />
                <div className="" style={{fontSize:'1.125rem'}}>samuel</div>
            </div>

            <IconButton>
                <MoreVert />
            </IconButton>
           
            
        </div>
    )
}

export default Chatheader
