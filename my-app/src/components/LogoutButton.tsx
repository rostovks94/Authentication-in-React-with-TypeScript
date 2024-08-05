import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { Button } from 'react-bootstrap';

const LogoutButton: React.FC = () => {
    const { logout } = useAuth0();

    return (
        <Button
            variant="outline-danger"
            onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}
        >
            Logout
        </Button>
    );
};

export default LogoutButton;
