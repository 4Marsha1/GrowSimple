import styles from './Movies.module.css'

const MovieCard = ({ movie, rateMovieHandler }) => {
    const add0 = (value) => (value < 10 ? "0" : "") + value;
    let day = new Date(movie.release_date).getDate();
    day = add0(day);
    const monthList = ["Jan", "Feb", "Mar", "Apr", "May", "June", "July", "Aug", "Sep", "Oct", "Nov", "Dec"];
    let month = new Date(movie.release_date).getMonth();
    let year = new Date(movie.release_date).getFullYear();
    let hours = new Date(movie.release_date).getHours();
    hours = add0(hours);
    let mins = new Date(movie.release_date).getMinutes();
    mins = add0(mins);
    return (
        <div className={styles['movie']}>
            <div className={styles['section']}>
                <span className={styles['title']}>{movie.title}</span>
                <span className={styles['tagline']}>{movie.tagline}</span>
                <span className={styles['overview']}>{movie.overview}</span>
            </div>
            <div className={styles['section']}>
                <span className={styles['status']}>Status: {movie.status}</span>
                <span className={styles['release_date']}>Released on: {day + " " + monthList[month] + " " + year + " " + hours + ":" + mins}</span>
                <span className={styles['runtime']}>Runtime: {movie.runtime}</span>
                <span className={styles['budget']}>Budget: {movie.budget}</span>
                <span className={styles['revenue']}>Revenue: {movie.revenue}</span>
            </div>
            <div className={styles['section']}>
                <button className={styles['btn']} onClick={() => rateMovieHandler(movie._id)}>Rate this movie</button>
                <button className={styles['btn']}>View Rating</button>
            </div>
        </div>
    )
}

export default MovieCard