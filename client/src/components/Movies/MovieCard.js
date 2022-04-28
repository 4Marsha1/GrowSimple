import styles from './Movies.module.css'

const MovieCard = () => {
    return (
        <div className={styles['movie']}>
            <div className={styles['section']}>
                <span className={styles['title']}>Title</span>
                <span className={styles['tagline']}>Tagline</span>
                <span className={styles['overview']}>Overview</span>
            </div>
            <div className={styles['section']}>
                <span className={styles['status']}>Status: Released</span>
                <span className={styles['release_date']}>Released on: 12-12-12</span>
                <span className={styles['runtime']}>Runtime: 103</span>
                <span className={styles['budget']}>Budget: 10</span>
                <span className={styles['revenue']}>Revenue: 1000</span>
                <span className={styles['rating']}>Rating: 4</span>
            </div>
        </div>
    )
}

export default MovieCard