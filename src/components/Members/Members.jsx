import React from 'react'
import { Avatar } from '@material-ui/core'


const Members = () => {

    const array = [1, 1, 1, 1, 1, 1, 1];
    return (
        <div className='d-flex align-items-center mt-3 px-3 py-3' style={{borderBottom: '1px solid #f4f4f4'}} >

            {
                array.map((member, index) => {
                    return <div key={index} className="member d-flex flex-column align-items-center mx-3">
                    <Avatar src={`assets/person/${index + 1}.jpeg`} style={{ width: 70, height: 70}} />
                    <div style={{color: 'rgb(30, 30, 30)'}}>priya</div>
                </div>
                })
            }
            
            
        </div>
    )
}

export default Members
