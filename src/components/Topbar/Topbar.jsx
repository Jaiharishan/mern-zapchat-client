import React from 'react'
import {IconButton} from '@material-ui/core';
import {Language, Person} from '@material-ui/icons';
import { Link } from 'react-router-dom';


const Topbar = () => {
    return (
        <div className='d-flex w-100 justify-content-between px-3 py-2' style={{borderBottom: '1px solid #f4f4f4'}}>


            <Link to='/chat'>
                <img src="assets/zaplogo.jpeg" style={{width: 56}} alt="brand-logo" />
            </Link>
            

            <Link to='/'>
                <IconButton>
                    <Language fontSize='large' style={{color: 'gold'}} />
                </IconButton>
            </Link>

            
            <Link to='/profile'>
                <IconButton>
                    <Person fontSize='large' />
                </IconButton>
            </Link>
            
        </div>
    )
}

export default Topbar
