import React,{useState} from 'react'
import './Login.css'
import { Link } from 'react-router-dom'
import {auth ,googleProvider} from '../../server/firebase'

import { useDispatch,useSelector } from 'react-redux'
import { addUser } from '../../redux/action/action'  


const Login = () => {
  
  const dispatch = useDispatch()
    const signupWithGoogle = ()=>{
        auth.signInWithPopup(googleProvider)
        .then(res => 
         { dispatch( addUser(res))
          console.log(res)}
        )
        .catch(err => console.log(err))
    }

    const user = useSelector(state=>state.user)
    console.log("login >>> ",user);
  return (
    <div>
      <div className='Login_Logo'>
         <div className="login_container">
           <img src=""alt="logo" />
            <div className="login_inp_box">
              <h1>Sing-In</h1>
              <h4>Email or mobile phone number</h4>
                <input className='login_inp_text' type="text" />
                <button onClick={signupWithGoogle}
                   className='btn login_btn btn_gold'>with Google</button>
                <button className='btn login_btn btn_gold'>Con tinue</button>
             <div className="d_flex login_d_flex"> <p>By continuing, you agree to Amazon's
              <p className="link">Conditions of Use</p>
              <p>and </p>
              <p className="link">Privacy Notice</p>
              <p className="link">Need help?</p> </p>
              </div> 
            </div>
            <div className="d_flex login_d_flex2">
              <div className="hr"></div>
              <div className="hr"></div>
            </div>
           

         </div>
         <div className="login_lg_div">

         </div>
         <div className="login_container2">
           <div className="login_d_flex2 d_flex">
             <p className="link">Conditions of Use </p> <p className="link"> Privacy Notice </p>
             <p className="link">Help</p>
           </div>
           <div className="login_d_flex2 d_flex">
             <p>© 1996-2022, Amazon.com, Inc. or its affiliates</p>
           </div>
         </div>

      </div>
    </div>
  )
}

export default Login