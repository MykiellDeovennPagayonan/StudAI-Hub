/* eslint-disable react/prop-types */
import './TopNav.css'
import { Link } from 'react-router-dom'
import { signOut } from 'firebase/auth'
import { auth } from '../functions/firebase'
import { useNavigate } from "react-router-dom";


export default function TopNav(props) {
  let navigate = useNavigate()

  function signUSerOut() {
    signOut(auth).then(() => {
      localStorage.clear()
      props.setLoggedIn(false)
      navigate("/login")
    })
  }

  return (
    <>
      <div className='topNav'>
        <div className='topNav-content'>
        <div className='top-tabs'>
          <button className='top-tabs-button' style={props.pageNum === 0 ? {backgroundColor: 'white', color: 'black'} : null} onClick={() => {props.setPageNum(0), props.setContentNum(0)}}> Study </button>
          <button className='top-tabs-button' style={props.pageNum === 1 ? {backgroundColor: 'white', color: 'black'} : null} onClick={() => {props.setPageNum(1), props.setContentNum(null)}}> History </button>
          <button className='top-tabs-button' style={props.pageNum === 2 ? {backgroundColor: 'white', color: 'black'} : null} onClick={() => {props.setPageNum(2), props.setContentNum(null)}}> Community </button>
        </div>
          {props.loggedIn ?
            <div className='topNav-content-log'>
              <p className='login-button' onClick={signUSerOut}> Log out </p>
            </div>
            :
            <Link to="/login" className='login-link'><p className='login-button'> Login </p></Link>
            }
        </div>
      </div>
    </>
  )
}
