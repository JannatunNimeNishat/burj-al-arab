import React, { createContext } from 'react';
import {GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signInWithPopup} from 'firebase/auth'
import app from '../firebase/firebase.config';
const auth = getAuth(app);
export const AuthContext = createContext(null);

const AuthProvider = ({children}) => {
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
    const authInfo = {
        signUp,
        signIn,
        googleSignIn
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