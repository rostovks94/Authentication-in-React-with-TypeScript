import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import LogoutButton from './LogoutButton';
import LoginButton from './LoginButton';

const NavigationBar: React.FC = () => {
    const { user, isAuthenticated } = useAuth0();

    return (
        <Navbar expand="lg" className="bg-light">
            <Container>
                <Navbar.Brand as={Link} to={'/'}>My App</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to={'/'}>Home</Nav.Link>
                        {isAuthenticated ? (
                            <>
                                <Nav.Link as={Link} to={'/profile'}>Profile</Nav.Link>
                                <img style={{ width: '40px', borderRadius: '50%', marginLeft: '10px' }} src={user?.picture} alt={user?.name} />
                                <LogoutButton />
                            </>
                        ) : (
                            <LoginButton />
                        )}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default NavigationBar;
