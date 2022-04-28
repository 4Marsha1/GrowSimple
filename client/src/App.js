import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './containers/Home';
import Landing from './containers/Landing';
import Login from './containers/Login';
import Register from './containers/Register';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route
                    path='/'
                    exact
                    element={<Landing />}
                    key='route-landing'
                />
                <Route
                    path='/login'
                    exact
                    element={<Login />}
                    key='route-login'
                />
                <Route
                    path='/register'
                    exact
                    element={<Register />}
                    key='route-register'
                />
                <Route
                    path='/home'
                    exact
                    element={<Home />}
                    key='route-home-screen'
                />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
