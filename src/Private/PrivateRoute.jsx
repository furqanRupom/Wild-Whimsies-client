import React, { useContext } from 'react';
import { ToysContext } from '../Providers/AuthProviders';
import { FaSpinner } from 'react-icons/fa';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({children}) => {
    const location = useLocation()
    const {user,loading} = useContext(ToysContext)
    if(loading){
        return <div className="absolute w-full h-full inset-0 bg-white overflow-hidden">
             <div className='animate-spin h-full flex items-center justify-center'><FaSpinner className="text-5xl text-lime-500" /></div>
        </div>
    }
    if(user){
        return children
    }
    return <Navigate to="/login" state={{from:location}} replace={true}></Navigate>
}

export default PrivateRoute;