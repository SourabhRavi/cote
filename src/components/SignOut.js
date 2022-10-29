import React from 'react';

import { auth } from '../firebase_config';

function SignOut() {

    return auth.currentUser && (
        <button onClick={() => { auth.signOut() }} type="button" className="sign-out-btn">Sign Out</button>
    )
}

export default SignOut;