import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import {Nav,Button} from 'react-bootstrap'

const LogoutButton = () => {

    const {logout} = useAuth0();
    return (
        <Nav>
            <Button onClick={()=> logout()}>Log Out</Button>
        </Nav>
    )
}

export default LogoutButton
