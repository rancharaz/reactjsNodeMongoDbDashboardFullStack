import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'


const PrivateComponent = () => {

    const auth = localStorage.getItem('user')
    /* if data found in localStorage true  */
    return auth ? <Outlet /> : <Navigate to="/sign-up" />
}

export default PrivateComponent