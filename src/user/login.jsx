import React from 'react';
import { loginValidateSave } from './components/validations';
import facebook from "../images/facebook.png"
import search from "../images/search.png"
import linkedin from "../images/linkedin.png"
import twitter from "../images/twitter.png"
import demo from "../images/login.png"
import './style.css'

function Login() {
    const save = () => {
        var isValid = loginValidateSave()
        if (isValid === true) {

            window.location.href = '/profile'
        }
    }
    return (
        <div className="row loginrow"  >
            <div className="col-md-6 centeralign">
                <div className="main-headdiv">
                    <h1>Sign In</h1>
                    <h4>New user? <a rel="noopener noreferrer" className="a-create">Create an account</a></h4>
                </div>
                <div>

                    <div class="form-group">


                        <input type="email" class="form-control  form-inputsec" id="txtEmail" aria-describedby="emailHelp" placeholder="Username or email" name="txtEmail" />
                    </div>
                    <div class="form-group">

                        <input type="password" class="form-control form-inputsec" id="txtPassword" placeholder="Password" name="txtPassword" />
                    </div>

                    <div class="form-group custom-checkbox">
                        <input type="checkbox" id="html" />
                        <label for="html">Keep me signed in</label>
                    </div>
                    <div className="fieldOuter fullwidthOverride">
                        <button className="signin-btn" onClick={save}>Sign In</button>
                    </div>
                    <div className="fieldOuter fieldOuter-line">

                        <hr className="xyz" />
                        <div className="sign-text">Or Sign In With</div>  <hr className="xyz" />

                    </div>
                    <div className="fieldOuters margin-auto-center">
                        <div className="social-icon-wrapper">
                            <div className="socialicon">
                                <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                                    <img src={facebook} alt="Facebook" />
                                </a>
                            </div>
                            <div className="socialicon">
                                <a href="https://www.google.co.in/" target="_blank" rel="noopener noreferrer">
                                    <img src={search} alt="Search Icon" />
                                </a>
                            </div>
                            <div className="socialicon">
                                <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                                    <img src={linkedin} alt="LinkedIn" />
                                </a>
                            </div>
                            <div className="socialicon">
                                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                                    <img src={twitter} alt="Twitter" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-md-6 centeralign d-md-block d-none d-flex justify-content-center align-items-center">
                <div className="d-flex justify-content-center align-items-center" style={{ height: '100%' }}>
                    <img src={demo} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Login;