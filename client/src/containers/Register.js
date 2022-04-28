import { useState } from 'react';
import Navbar from '../components/Navbar'
import RegisterComponent from '../components/Auth/RegisterComponent';

const Register = (props) => {
    const [user, setUser] = useState({
        name: '', email: '', password1: '', password2: ''
    })
    const { name, email, password1, password2 } = user
    const handleChange = (e) => {
        const { name, value } = e.target;
        setUser({ ...user, [name]: value })
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        // REDUX FOR REGISTER
    }
    return (
        <>
            <Navbar />
            <RegisterComponent
                name={name}
                email={email}
                password1={password1}
                password2={password2}
                handleChange={handleChange}
                handleSubmit={handleSubmit}
            />
        </>
    )
}

export default Register