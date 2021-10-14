import React, {useContext} from 'react';
import Globalmember from '../../components/Globalmember/Globalmember';
import Topbar from '../../components/Topbar/Topbar';
import { UserContext } from '../../UserContext';
import Login from '../Login/Login';



const Global = () => {

    const [user, setUser] = useContext(UserContext)
    return (
        <>
        {
            user ?
            <>
            <Topbar />
            <Globalmember />
            </>
            :
            <Login />
        }
        </>
    )
}

export default Global
