import React, { useState } from 'react';
import './App.css';

import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollectionData } from 'react-firebase-hooks/firestore';

import { firestore, auth } from './firebase_config';

import SignIn from './components/SignIn';
import Navbar from './components/Navbar';
import ChatMessage from './components/ChatMessage';



function App() {

  const [user] = useAuthState(auth);

  return (
    <div className="App">

      <section>
        {user ? <ChatRoom /> : <SignIn />}
      </section>

    </div>
  );
}

function ChatRoom() {

  const messagesRef = firestore.collection('messages');
  const query = messagesRef.orderBy('createdAt');

  const [messages] = useCollectionData(query, { idField: 'id' });

  const [formValue, setFormValue] = useState('');


  function sendMessage(e) {
    e.preventDefault();

    const sendInBg = async () => {
      const { uid, photoURL } = auth.currentUser;

      await messagesRef.add({
        text: formValue,
        createdAt: firebase.firestore.FieldValue.serverTimestamp(),
        uid,
        photoURL
      });
    }

    setFormValue('');

    return sendInBg();
  }

  return (
    <>
      <Navbar />
      <div className='container mt-3 chatroom-wrap' id='chat'>
        {messages ? messages.map((msg, id) => { return <ChatMessage key={id} message={msg} /> }) : <p className='placeholder-wave'><span className='placeholder col-12 bg-primary' style={{
          padding: "10px", borderTopRightRadius: "40px",
          borderTopLeftRadius: "40px",
          borderBottomRightRadius: "40px",
          maxWidth: "max-content", color: "#fff"
        }}>Loading messages...</span></p>}
      </div>

      <form id='form' onSubmit={sendMessage}>
        <div className="message-input-wrap">
          <input type="text" value={formValue} onChange={(e) => { setFormValue(e.target.value) }} placeholder='Type your message...' />
          <button type="submit" className="message-send-btn" disabled={!formValue}>Send</button>
        </div>
      </form>
    </>
  )
}


export default App;