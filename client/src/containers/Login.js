import LoginComponent from '../components/Auth/LoginComponent';
import Navbar from '../components/Navbar'
import { useState } from 'react';
import { connect } from 'react-redux';
import { loginUser } from '../redux/actions/auth';

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
        if (!username || !password) {
            alert('Incomplete Credentials');
            return;
        }
        props.dispatch(loginUser(username, password))
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

const mapStateToProps = state => {
    return {
        token: state.authReducer.token
    }
}

export default connect(mapStateToProps)(Login)