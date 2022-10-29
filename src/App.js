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

function SignOut() {

  return auth.currentUser && (
    <button onClick={() => { auth.signOut() }} type="button" className="btn btn-danger">Sign Out</button>
  )
}

function ChatRoom() {
  const messagesRef = firestore.collection('messages');
  const query = messagesRef.orderBy('createdAt').limit(30);

  const [messages] = useCollectionData(query, { idField: 'id' });

  const [formValue, setFormValue] = useState('');


  function sendMessage(e) {
    e.preventDefault();
    const timeStamp = firebase.firestore.Timestamp.now();
    // console.log(timeStamp);
    // console.log(firebase.firestore.FieldValue.serverTimestamp().toDate());
    // console.log(firebase.firestore.FieldValue.serverTimestamp().toDate().getDate());
    // console.log(firebase.firestore.FieldValue.serverTimestamp().toDate().getMonth() + 1);
    // console.log(firebase.firestore.FieldValue.serverTimestamp().toDate().getFullYear());
    // console.log(firebase.firestore.FieldValue.serverTimestamp().toDate().toLocaleTimeString());
    console.log(timeStamp);//timestamp to store the time when messsage is sent
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
      <div className='container mt-4'>
        {messages && messages.map((msg, id) => { return <ChatMessage key={id} message={msg} /> })}
      </div>

      <form onSubmit={sendMessage}>
        <div className="message-input-wrap">
          <input type="text" value={formValue} onChange={(e) => { setFormValue(e.target.value) }} placeholder='Type your message...' />
          <button type="submit" className="message-send-btn" disabled={!formValue}>Send</button>
        </div>
      </form>
    </>
  )
}



export default App;