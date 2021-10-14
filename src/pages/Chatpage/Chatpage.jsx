import React, {useContext} from 'react'
import Chatheader from '../../components/Chatheader/Chatheader'
import Members from '../../components/Members/Members'
import Messages from '../../components/Messages/Messages'
import Topbar from '../../components/Topbar/Topbar';
import { UserContext } from '../../UserContext';
import Login from '../Login/Login';

const Chatpage = () => {
    const [user, setUser] = useContext(UserContext)
    console.log(user);


    return (
        <>
        {
            user ?
            <>
            <Topbar />
            <Members />
            <Chatheader />
            <Messages />
            </>
            :
            <Login />
        }
        </>
    )
}

export default Chatpage
