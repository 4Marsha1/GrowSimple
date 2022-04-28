import LoginComponent from '../components/Auth/LoginComponent';
import Navbar from '../components/Navbar'
import { useState } from 'react';

const Login = (props) => {
    const [user, setUser] = useState({
        username: '', password: '',
    })
    const { username, password } = user
    const handleChange = (e) => {
        const { name, value } = e.target;
        setUser({ ...user, [name]: value })
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        // REDUX FOR LOGIN
    }
    return (
        <>
            <Navbar />
            <LoginComponent
                username={username}
                password={password}
                handleChange={handleChange}
                handleSubmit={handleSubmit}
            />
        </>
    )
}

export default Login