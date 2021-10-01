import React from 'react'
import Chatheader from '../../components/Chatheader/Chatheader'
import Members from '../../components/Members/Members'
import Messages from '../../components/Messages/Messages'
import Topbar from '../../components/Topbar/Topbar'
const Chatpage = () => {
    return (
        <>
            <Topbar />
            <Members />
            <Chatheader />
            <Messages />
        </>
    )
}

export default Chatpage
