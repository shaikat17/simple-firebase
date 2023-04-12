import React, { useState } from 'react'
import { GoogleAuthProvider, getAuth, signInWithPopup, signOut } from "firebase/auth";
import app from '../../firebase/firebase.init';

const Login = () => {
    const [user, setUser] = useState(null)
    const auth = getAuth(app);
    console.log(app)
    const provider = new GoogleAuthProvider();

    const handleGoogleSignIn = () => {
        signInWithPopup(auth, provider)
        .then(result => {
            const user = result.user
            console.log(user)
            setUser(user)
        })
        .catch( error => {
            const errorMessage = error.message
            console.log(error.msg)
        })
    }

    const handleSignOut = () => {
        signOut(auth)
        .then(result => {
            console.log(result)
            setUser(null)
        })
        .catch(error => {
            console.log(error)
        })
    }
  return (
    <div>
        { user ? <button onClick={handleSignOut}>Logout</button> :
        <button onClick={handleGoogleSignIn}>Google Login</button>
        }
        { user && <div>
            <h3>{user.displayName}</h3>
            <p>{user.email}</p>
            <img src={user.photoURL} alt="" />
        </div>}
    </div>
  )
}

export default Login