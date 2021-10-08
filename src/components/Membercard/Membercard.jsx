import { Avatar, Button } from '@material-ui/core'
import React from 'react'

const Membercard = () => {

    const cardStyles = {

    }
    return (
        <div className='d-flex flex-column mx-3 my-2'
        style={{width: '250px', minWidth: '150px', height: 'auto', border: '1px solid rgb(200, 200, 200)', borderRadius: '1em'}}>
            
            <img height='150px' className='w-100'style={{borderTopLeftRadius: '1em', borderTopRightRadius: '1em'}} src="assets/post/1.jpeg" alt="background-img" />

            <div style={{position: 'relative'}} className="d-flex flex-column align-items-center">


                <Avatar style={{width: 50, height:50, position: 'absolute', top: '-27px'}} src='assets/person/6.jpeg' />

                <div style={{fontSize: '1.25rem'}} className="mt-4">Carl Max</div>

                <div style={{color: 'rgb(80, 80, 80)'}} className="w-75 text-center mt-2">A simple humble person</div>

                <Button style={{background: '#0066ff', borderRadius: '1.25em'}}  variant="contained" className='m-3 text-light w-50' disableElevation>follow</Button>
            </div>
            
        </div>
    )
}

export default Membercard
