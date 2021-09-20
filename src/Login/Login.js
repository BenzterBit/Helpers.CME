import React, {useState} from 'react'
import './Login.css'
import {Link, useHistory} from 'react-router-dom'
import { auth } from '../firebase';

function Login() {
    //state vars
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const history = useHistory();

    const signIn =(e)=>{
        e.preventDefault();
        auth.signInWithEmailAndPassword(email,password)
        .then(auth => {
            if(auth){
                history.push('/')
            }
        }).catch(err => alert(err))
    }
    return (
        <div>
            <div className="login">
                <h2 className="active"> sign in </h2>
                    <div className='form'>
                        <br/>
                        <br/>
                        <input type="email" className="text" name="email" 
                        value={email} onChange={e=>setEmail(e.target.value)} required/>
                        <span >email</span>
                        <br/>            
                        <br/>
                        <input type="password" className="text" name="password" 
                        value={password} onChange={e=>setPassword(e.target.value)} required />
                        <span >password</span>
                        <br/>
                        {/* <input type="checkbox" id="checkbox-1-1" className="custom-checkbox" />
                        <label for="checkbox-1-1">Keep me Signed in</label> */}
                        <button className="signin" type='submit' onClick={signIn}>
                        Sign In
                        </button>
                        <hr/>
                        <Link to='/forgot' className="forgot">Forgot Password?</Link>
                        <br/>
                        <br/>
                        <br/>
                        <Link to='/signup' className="forgot">Sign up</Link>
                    </div>

            </div>
            
        </div>
    )
}

export default Login;
