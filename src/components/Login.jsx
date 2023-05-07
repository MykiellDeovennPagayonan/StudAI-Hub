/* eslint-disable react/prop-types */
import "./Login.css";
import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "../functions/firebase";
import { Link } from 'react-router-dom'
import { useNavigate } from "react-router-dom";

export default function Login(props) {
  let navigate = useNavigate()

  function signInWithGoogle() {
    signInWithPopup(auth, provider).then(() => {
      localStorage.setItem("loggedIn", true)
      props.setLoggedIn(true)
      navigate("/")
    })
  }

  return (
    <div className="login">
      <Link to="/" className="login-back-button"> Back </Link>
      <div className="login-content">
        <h1> Sign in with Google </h1>
        <button className="signin-with-google" onClick={signInWithGoogle}> Sign in with Google</button>
      </div>
    </div>
  );
}