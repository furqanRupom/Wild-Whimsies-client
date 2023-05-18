import React, { createContext, useEffect, useState } from 'react';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut,} from 'firebase/auth'
import app from '../firebase/firebase.config';
const auth = getAuth(app)
export const ToysContext = createContext()
const AuthProviders = ({children}) => {

    const [user,setUser] = useState();
    const googleProvider = new GoogleAuthProvider();


    // for loader
    const [loading,setLoading] = useState(true);


    // user register

    const registerUser = (email,password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }





    // user login

    const LoginUser = (email,password)=>{
        setLoading(true)
       return signInWithEmailAndPassword(auth,email,password)
    }

    // login with google

    const LogInWithGoogle = () =>{
            setLoading(true)
          return  signInWithPopup(auth,googleProvider)
    }

    // logout
    const logOut = ()=>{
        setLoading(true)
        return signOut(auth)
    }

    // observer

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth,currentUser=>{
            setUser(currentUser)
            setLoading(false)
        })
        return () => {
            unsubscribe()
        };
    }, []);

    const userInfo = {

        user,
        LoginUser,
        registerUser,
        LogInWithGoogle,
        logOut,
        loading
    }
    return (
       <ToysContext.Provider value={userInfo}>
        {children}
       </ToysContext.Provider>
    );
};

export default AuthProviders;