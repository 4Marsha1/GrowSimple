import { Provider } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import store from './redux/store';
import Home from './containers/Home';
import Landing from './containers/Landing';
import Login from './containers/Login';
import Register from './containers/Register';
import PrivateRoute from './containers/PrivateRoute';
import InvertedPrivateRoute from './containers/InvertedPrivateRoute';

function App() {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <Routes>
                    <Route exact path='/' element={<InvertedPrivateRoute />}>
                        <Route
                            path='/'
                            exact
                            element={<Landing />}
                            key='route-landing'
                        />
                    </Route>
                    <Route exact path='/login' element={<InvertedPrivateRoute />}>
                        <Route
                            path='/login'
                            exact
                            element={<Login />}
                            key='route-login'
                        />
                    </Route>
                    <Route exact path='/register' element={<InvertedPrivateRoute />}>
                        <Route
                            path='/register'
                            exact
                            element={<Register />}
                            key='route-register'
                        />
                    </Route>
                    <Route exact path='/home' element={<PrivateRoute />}>
                        <Route
                            path='/home'
                            exact
                            element={<Home />}
                            key='route-home-screen'
                        />
                    </Route>
                </Routes>
            </BrowserRouter>
        </Provider>
    );
}

export default App;
