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
        <div className="googles">
          <button className="google" onClick={signInWithGoogle}>
            <img
              className="google-logo"
              src="src\images\google-logo.png"
              alt="google icon"
            />
            <span style={{ color: "#4285f4" }}>G</span>
            <span style={{ color: "#ea4335" }}>o</span>
            <span style={{ color: "rgb(251, 188, 5)" }}>o</span>
            <span style={{ color: "#4285f4" }}>g</span>
            <span style={{ color: "#34a853" }}>l</span>
            <span style={{ color: "#ea4335" }}>e</span>
          </button>
        </div>
      </div>
    </div>
  );
}