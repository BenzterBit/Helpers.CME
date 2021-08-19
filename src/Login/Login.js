import React from 'react'
import './Login.css'
import {Link} from 'react-router-dom'

function login() {
    return (
        <div>
            <div className="login">
                <h2 className="active"> sign in </h2>
                    <div className='form'>
                        <br/>
                        <br/>
                        <input type="email" className="text" name="email" required/>
                        <span >email</span>
                        <br/>            
                        <br/>
                        <input type="password" className="text" name="password" required />
                        <span >password</span>
                        <br/>
                        <input type="checkbox" id="checkbox-1-1" className="custom-checkbox" />
                        <label for="checkbox-1-1">Keep me Signed in</label>
                        <button className="signin">
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

export default login
