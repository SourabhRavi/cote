import React from 'react';
import firebase from 'firebase/compat/app'
import { auth } from '../firebase_config';

function SignIn() {
    const signInWithGoogle = () => {
        const provider = new firebase.auth.GoogleAuthProvider();
        auth.signInWithPopup(provider);
    }

    return (
        <button onClick={signInWithGoogle} type="button" className="btn btn-light">Sign In</button>
    )
}

export default SignIn;