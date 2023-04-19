import React, { createContext, useEffect, useState } from 'react';
import {GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut} from 'firebase/auth'
import app from '../firebase/firebase.config';
const auth = getAuth(app);
export const AuthContext = createContext(null);

const AuthProvider = ({children}) => {
    const [user,setUser] = useState(null);
    const [loading,setLoading] = useState(true);

    const signUp = (email,password)=>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth,email,password);
    }
    const signIn = (email,password)=>{
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }
    //signIn with google
    const provider = new GoogleAuthProvider();
    const googleSignIn = ()=>{
        setLoading(true);
        return signInWithPopup(auth,provider);

    }
    //signOut
    const logOut = ()=>{
        return signOut(auth);
    }




    //listener
    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth, currentUser =>{
            // if(currentUser === null || currentUser)
            setUser(currentUser);
            setLoading(false)
        })
        return ()=>{

            unSubscribe();
        }
    },[])
    const authInfo = {
        user,
        loading,
        signUp,
        signIn,
        googleSignIn,
        logOut
    }

    return (
        <div>
            <AuthContext.Provider value={authInfo}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;