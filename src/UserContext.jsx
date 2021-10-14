import React, {useState, createContext, useEffect} from 'react';

// fetcher is an axios instance
import fetcher from './axios/axios';


// exporting context for user
export const UserContext = createContext();


// giving context to the user context using context provider
export const UserProvider = props => {

    const [user, setUser] = useState({});

    useEffect(() => {
        const fetchUsers = async () => {

            const res = await fetcher.get('/api/user');

            if (res) {
                setUser(res.data.user[0]);
            }

            else {
                console.log('not working')
            }
            

        }

        fetchUsers()

    }, [])


    return (
        <UserContext.Provider value = {[user, setUser]}>
            {props.children}
        </UserContext.Provider>
    )
}