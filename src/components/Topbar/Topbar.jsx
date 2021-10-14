import React from 'react'
import {IconButton, Avatar} from '@material-ui/core';
import {Language} from '@material-ui/icons';
import { Link } from 'react-router-dom';

const stringToColor = (string) => {
    let hash = 0;
    let i;
  
    /* eslint-disable no-bitwise */
    for (i = 0; i < string.length; i += 1) {
      hash = string.charCodeAt(i) + ((hash << 5) - hash);
    }
  
    let color = '#';
  
    for (i = 0; i < 3; i += 1) {
      const value = (hash >> (i * 8)) & 0xff;
      color += `00${value.toString(16)}`.substr(-2);
    }
    /* eslint-enable no-bitwise */
  
    return color;
}


const stringAvatar = (name) => {
    return {
      style: {
        background: stringToColor(name),
        border: 'none'
      },
      children: `${name.split(' ')[0][0]}${name.split(' ')[1][0]}`,
    };
}




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
                    {/* <Person fontSize='large' /> */}
                    <Avatar style={{width: 50, height: 50}} {...stringAvatar('shijin s')} />
                </IconButton>
            </Link>
            
        </div>
    )
}

export default Topbar
