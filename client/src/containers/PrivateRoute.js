import React from 'react'
import { connect } from 'react-redux'
import { Navigate, Outlet } from 'react-router-dom'

const PrivateRoute = (props) => {
    return props.token ? <Outlet /> : <Navigate to='/' />
}

const mapStateToProps = state => {
    return {
        token: state.authReducer.token
    }
}

export default connect(mapStateToProps)(PrivateRoute)