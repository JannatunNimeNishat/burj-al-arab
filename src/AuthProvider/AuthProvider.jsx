import React, { createContext } from 'react';
import {createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword} from 'firebase/auth'
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
    const authInfo = {
        signUp,
        signIn
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