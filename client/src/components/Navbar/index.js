import styles from './Navbar.module.css';
import Sidebar from '../Sidebar';
import { Link } from 'react-router-dom';

const Navbar = (props) => {
    const { isSidebarOpen, toggleSidebar } = props
    return (
        <nav className={styles['navbar']}>
            <Link className={styles['btn']} to='/'>
                <span className={styles['logo']}>MoviesTMBD</span>
            </Link>
            <div className={styles['links']}>
                {/* <>
                            <Link className={styles['btn']} to='/developers'>
                                <span className={styles['link']}>Developers</span>
                            </Link> |
                            <Link className={styles['btn']} to='/posts'>
                                <span className={styles['link']}>Posts</span>
                            </Link> |
                            <Link className={styles['btn']} to='/dashboard'>
                                <span className={styles['link']}>Dashboard</span>
                            </Link> |
                            <button className={styles['btn']}>
                                <span className={styles['link']}>Logout</span>
                            </button>
                        </> */}

                <>
                    <Link className={styles['btn']} to='/register'>
                        <span className={styles['link']}>Register</span>
                    </Link> |
                    <Link className={styles['btn']} to='/login'>
                        <span className={styles['link']}>Login</span>
                    </Link>
                </>
            </div>
            {
                isSidebarOpen ? <Sidebar toggleSidebar={toggleSidebar} /> :
                    <div className={styles['hamburger']} onClick={toggleSidebar}>
                        <span className={styles['hr']}></span>
                        <span className={styles['hr']}></span>
                        <span className={styles['hr']}></span>
                    </div>
            }
        </nav>
    )
}

export default Navbar