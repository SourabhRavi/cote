import React from 'react';
import { auth } from '../firebase_config';

function ChatMessage(props) {
    const { text, uid, photoURL } = props.message;
    const messageClass = uid === auth.currentUser.uid ? 'sent' : 'received';

    return (
        <>
            <div className={`message ${messageClass}`}>
                <p className='message-text'>{text}</p>
                <img className='profile-photo' src={photoURL} style={{ height: "25px", width: "25px" }} alt="" />
            </div>
        </>
    )
}

export default ChatMessage;