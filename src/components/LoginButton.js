import React from 'react'
import {Nav,Button} from 'react-bootstrap'
import { useAuth0 } from '@auth0/auth0-react'

const LoginButton = () => {

    const {loginWithRedirect} = useAuth0();
    return (
    <Nav>
        <Button onClick={()=> loginWithRedirect()}>Sign In</Button>
     </Nav>
    )
}

export default LoginButton
