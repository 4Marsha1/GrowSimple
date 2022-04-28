import { useEffect } from 'react'
import { connect } from 'react-redux'
import Movies from '../components/Movies'
import Navbar from '../components/Navbar'
import { getMovieList } from '../redux/actions/movies'

const Home = (props) => {
    useEffect(() => {
        props.dispatch(getMovieList(props.token))
    }, [])
    console.log(props.movies);
    return (
        <>
            <Navbar />
            <Movies movies={props.movies} />
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