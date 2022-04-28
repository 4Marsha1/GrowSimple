import MovieCard from './MovieCard'
import styles from './Movies.module.css'

const Movies = ({ movies }) => {
    return (
        <div className={styles['container']}>
            <span className={styles['header']}>Top Movies</span>
            <div className={styles['movies']}>
                {
                    movies.map((movie, idx) => {
                        return <MovieCard key={idx} movie={movie} />
                    })
                }
            </div>
        </div>
    )
}

export default Movies