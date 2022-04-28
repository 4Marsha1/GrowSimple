import MovieCard from './MovieCard'
import styles from './Movies.module.css'

const Movies = () => {
    return (
        <div className={styles['container']}>
            <span className={styles['header']}>Top Movies</span>
            <div className={styles['movies']}>
                <MovieCard />
                <MovieCard />
                <MovieCard />
            </div>
        </div>
    )
}

export default Movies