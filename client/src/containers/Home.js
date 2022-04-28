import { useEffect } from 'react'
import { connect } from 'react-redux'
import Movies from '../components/Movies'
import Navbar from '../components/Navbar'
import { getMovieList, rateMovie } from '../redux/actions/movies'

const Home = (props) => {
    useEffect(() => {
        props.dispatch(getMovieList(props.token))
    }, [])
    console.log(props.movies);
    const rateMovieHandler = (id) => {
        console.log(id);
        if (!id) {
            alert('Error in selecting movie');
            return;
        }
        props.dispatch(rateMovie(id, props.token))
    }
    return (
        <>
            <Navbar />
            <Movies movies={props.movies} rateMovieHandler={rateMovieHandler} />
        </>
    )
}

const mapStateToProps = state => {
    return {
        token: state.authReducer.token,
        movies: state.movieReducer.movies
    }
}

export default connect(mapStateToProps)(Home)