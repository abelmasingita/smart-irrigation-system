import React from 'react'
import {Navbar,Container,Nav} from 'react-bootstrap'
import LoginButton from './LoginButton'
import LogoutButton from './LogoutButton'
import { useAuth0 } from '@auth0/auth0-react'

const Header = () => {
    const {isAuthenticated} = useAuth0();

    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="#home">Smart Irrigation System</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#home"></Nav.Link>
                        <Nav.Link href="#home"></Nav.Link>
                    </Nav>
                    {
                        isAuthenticated ? (
                            <LogoutButton />
                        ) : (
                            <LoginButton/>
                        )
                    }                
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Header
