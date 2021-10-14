import { Search } from '@material-ui/icons';
import React, { useEffect, useState } from 'react';
import Membercard from '../Membercard/Membercard';
import fetcher from '../../axios/axios';

const Globalmember = () => {

    const [users, setUsers] = useState([]);

    // const token = localStorage.getItem('jwtToken');

    // const fetchUrl = 'http://localhost:4000/api/users'; 

    // to send a get request for users using axios and setting token in headers

    useEffect(() => {
        const fetchUsers = async () => {

            const res = await fetcher.get('/api/users');

            if (res) {
                setUsers(res.data.users);
            }

            else {
                console.log('not working')
            }
            

        }

        fetchUsers()

    }, [])



    return (
        <div className='d-flex flex-column align-items-center mt-5'>

            <div className="searchbox d-flex align-items-center px-2 py-2" style={{width:'50%', border: '1px solid rgb(170, 170, 170)', borderRadius: '1.5em', minWidth: '200px'}}>
                <input type="text" placeholder="search for friends" className='w-100 px-2' style={{border: 'none', outline: 'none', fontSize: '1.125rem'}} />
                <Search />
            </div>


            <div className="d-flex flex-wrap align-items-center justify-content-center mt-5">


                {
                    users.map((user, i) => {
                        return <Membercard key={i} user = {user} />
                    })
                }
                
            </div>

        </div>
    )
}

export default Globalmember
