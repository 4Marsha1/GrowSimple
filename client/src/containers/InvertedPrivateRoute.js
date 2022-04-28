import React from 'react'
import { connect } from 'react-redux'
import { Navigate, Outlet } from 'react-router-dom'

const InvertedPrivateRoute = (props) => {
    return props.token ? <Navigate to='/home' /> : <Outlet />
}

const mapStateToProps = state => {
    return {
        token: state.authReducer.token
    }
}

export default connect(mapStateToProps)(InvertedPrivateRoute)