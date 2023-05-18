import React, { useContext } from 'react';
import { ToysContext } from '../Providers/AuthProviders';
import { FaSpinner } from 'react-icons/fa';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({children}) => {
    const location = useLocation()
    const {user,loading} = useContext(ToysContext)
    if(loading){
        return <div className='animate-spin h-[500px] flex items-center justify-center'><FaSpinner className="text-4xl" /></div>
    }
    if(user){
        return children
    }
    return <Navigate to="/login" state={{from:location}} replace={true}></Navigate>
}

export default PrivateRoute;