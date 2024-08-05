import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { Button } from 'react-bootstrap';

const LoginButton: React.FC = () => {
    const { loginWithRedirect } = useAuth0();

    return (
        <Button variant="outline-primary" onClick={() => loginWithRedirect()}>
            Login
        </Button>
    );
};

export default LoginButton;
