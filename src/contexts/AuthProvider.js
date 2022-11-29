import React, { createContext, useEffect, useState } from 'react';
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut} from 'firebase/auth'
import app from '../firebase/firebase.config';

export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null); 
    const createUser = (email, password) =>{
        return createUserWithEmailAndPassword(auth, email, password);
    };
    const logInUser = (email, password) =>{
        return signInWithEmailAndPassword(auth, email, password);
    };
    const logOut = () =>{
        return signOut(auth);
    }

useEffect(()=>{
   const unsubscribe = onAuthStateChanged(auth, currentUser =>{
        console.log('user observing');
        setUser(currentUser);
    });
    return () => unsubscribe();
},[]);
const authInfo = {
    createUser,
    logInUser,
    logOut,
    user,
}

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;