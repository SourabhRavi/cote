import React from 'react';
import firebase from 'firebase/compat/app'
import { auth } from '../firebase_config';
import logo from './logo.svg';
import glogo from './google-logo.png';

function SignIn() {
    const signInWithGoogle = () => {
        const provider = new firebase.auth.GoogleAuthProvider();
        auth.signInWithPopup(provider);
    }

    return (
        <div className='wrapper'>
            <div className="signIn-wrap">
                <div className="logo-wrap" style={{ color: "#fff", fontSize: "30px" }}>
                    <img src={logo} alt="" style={{ height: "38px", width: "38px" }} />
                    &nbsp;&nbsp;<p className='logo-text' style={{ lineHeight: "35px" }}>Cote</p>
                </div>
                <div className="description-wrap" style={{ marginBottom: "10px" }}>
                    <p style={{ fontSize: "26px", color: "#fff", fontWeight: "300" }}><span style={{ fontWeight: "500", color: "#FFD74B" }}>Co</span>llaborate. Communica<span style={{ fontWeight: "500", color:"#5FD3FF" }}>te</span></p>
                </div>
                <div className="container"><button onClick={signInWithGoogle} type="button" className="btn btn-light" style={{ fontWeight: "400", fontSize: "20px" }}><img src={glogo} alt="" height="25px" width="25px" /> Sign In</button></div>
            </div>
        </div>
    )
}

export default SignIn;