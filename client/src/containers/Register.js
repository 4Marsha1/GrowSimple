import { useState } from 'react';
import Navbar from '../components/Navbar'
import RegisterComponent from '../components/Auth/RegisterComponent';
import { connect } from 'react-redux';
import { registerUser } from '../redux/actions/auth';

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
        if (!name || !email || !password1 || !password2) {
            alert('Incomplete Credentials');
            return;
        }
        else if (password1 !== password2) {
            alert('Passwords not match');
            return;
        }
        props.dispatch(registerUser(name, email, password1))
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

const mapStateToProps = state => {
    return {
        token: state.authReducer.token
    }
}

export default connect(mapStateToProps)(Register)