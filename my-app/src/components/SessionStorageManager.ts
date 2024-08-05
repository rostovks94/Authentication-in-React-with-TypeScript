const saveToken = (token: string) => {
    try {
        sessionStorage.setItem('jwtToken', token);
    } catch (error) {
        console.error('Error saving token:', error);
    }
};

const getToken = (): string | null => {
    try {
        return sessionStorage.getItem('jwtToken');
    } catch (error) {
        console.error('Error retrieving token:', error);
        return null;
    }
};

const removeToken = () => {
    try {
        sessionStorage.removeItem('jwtToken');
    } catch (error) {
        console.error('Error removing token:', error);
    }
};

export default { saveToken, getToken, removeToken };
