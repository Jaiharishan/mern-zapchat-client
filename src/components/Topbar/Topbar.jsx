import React from 'react'
import {IconButton} from '@material-ui/core';
import {Language, Person} from '@material-ui/icons';


const Topbar = () => {
    return (
        <div className='d-flex w-100 justify-content-between px-3 py-2' style={{borderBottom: '1px solid #f4f4f4'}}>


            <img src="assets/zaplogo.jpeg" style={{width: 56}} alt="" />


            <IconButton>
                <Language fontSize='large' style={{color: 'gold'}} />
            </IconButton>

            <IconButton>
                <Person fontSize='large' />
            </IconButton>
        </div>
    )
}

export default Topbar
