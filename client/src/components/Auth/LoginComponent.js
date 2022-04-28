import styles from './Auth.module.css'
import { Link } from 'react-router-dom'
import { ReactComponent as UserSVG } from '../../assets/icons/user.svg'

const LoginComponent = ({ username, password, handleChange, handleSubmit }) => {
    return (
        <div className={styles['container']}>
            <span className={styles['header']}><UserSVG className={styles['svg']} /> Login</span>
            <form className={styles['form']} onSubmit={handleSubmit}>
                <input
                    className={styles['input']}
                    type="username"
                    name='username'
                    value={username}
                    onChange={handleChange}
                    placeholder='Username'
                />
                <input
                    className={styles['input']}
                    type="password"
                    name='password'
                    value={password}
                    onChange={handleChange}
                    placeholder='Password'
                />
                <input
                    className={styles['btn']}
                    type="submit"
                    value='Login'
                />
            </form>
            <Link to='/register' className={styles['redirect']}>
                Not a member? Register Now!
            </Link>
        </div>
    )
}

export default LoginComponent;