import React, { createContext, useEffect, useState } from 'react';
import {GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut} from 'firebase/auth'
import app from '../firebase/firebase.config';
const auth = getAuth(app);
export const AuthContext = createContext(null);

const AuthProvider = ({children}) => {
    const [user,setUser] = useState(null);

    const signUp = (email,password)=>{
        return createUserWithEmailAndPassword(auth,email,password);
    }
    const signIn = (email,password)=>{
        return signInWithEmailAndPassword(auth, email, password);
    }
    //signIn with google
    const provider = new GoogleAuthProvider();
    const googleSignIn = ()=>{
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
        })
        return ()=>{

            unSubscribe();
        }
    },[])
    const authInfo = {
        user,
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