import React, { useState } from 'react';
import axios from 'axios';
import SessionStorageManager from './SessionStorageManager';
import { Form, Button, Container } from 'react-bootstrap';

const Login: React.FC = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const response = await axios.post('https://dummyjson.com/auth/login', {
                username,
                password,
            });
            SessionStorageManager.saveToken(response.data.token);
            // Redirect to home page or another page after login
        } catch (error) {
            console.error('Login failed:', error);
        }
    };

    return (
        <Container style={{ maxWidth: '400px', marginTop: '50px' }}>
            <h2 className="text-center">Login</h2>
            <Form onSubmit={handleLogin}>
                <Form.Group controlId="formUsername">
                    <Form.Label>Username</Form.Label>
                    <Form.Control
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />
                </Form.Group>
                <Form.Group controlId="formPassword" className="mt-3">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </Form.Group>
                <Button variant="primary" type="submit" className="mt-3 w-100">
                    Login
                </Button>
            </Form>
        </Container>
    );
};

export default Login;
