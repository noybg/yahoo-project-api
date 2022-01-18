import React, {useState} from 'react'
import { Redirect } from 'react-router-dom'
import PageHeader from '../components/PageHeader';
import {formValidationHandler} from '../utils/validate'



const SignInScreen = () => {

    // form value & valid stats
    const [password, setPassword] = useState({})
    const [email, setEmail] = useState({})

     // general settings stats
    const [emailLabel, setEmailLabel] = useState(true)
    const [passwordLabel, setPasswordLabel] = useState(true)
    const [showPassword, setShowPassword] = useState(false)

    const inputBlurHandler = (inp,value) => {
        if( value.length === 0 || value === 'DEFAULT') {
            if(inp === 'email') {
                setEmailLabel(true)
            }
            if(inp === 'password'){ 
                setPasswordLabel(true)
            }
        }
    }

    const validateHandler = (inp, value) => {
        let setTheState;
        const errorValidate = formValidationHandler(inp, value);

        // email: 
        if( inp === 'email' ) {
            if(! errorValidate) {
                setTheState = { type: inp, isValid: true, value, error: errorValidate}
            } else {
                setTheState = { type: inp, isValid: false, value, error: errorValidate}
            }
            setEmail(setTheState)
        }
        
        // password: 
        if( inp === 'password' ) {
            if(! errorValidate) {
                setTheState = { type: inp, isValid: true, value, error: errorValidate}
                
            }  else {
                setTheState = { type: inp, isValid: false, value, error: errorValidate }
            }
            setPassword(setTheState)
        } 
    }

    if( localStorage.getItem('token') ) return <Redirect to="/market-list"/>

    return (
        <div className='sign-in'>

            <PageHeader>Login Page</PageHeader>
            <form
                className="sign-in__form"
                onSubmit={ (e) =>  {
                    e.preventDefault()
                   localStorage.setItem('token', `Your Email: ${email.value}`)
                   window.location = '/'
                }}
                autoComplete="off" noValidate
            >

                <div className="person-img-box">
                    <span><svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-person-fill" viewBox="0 0 16 16">
                    <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
                    </svg></span>
                </div>
                
                <div className="input-wrapper">
                    <label className={emailLabel ? 'label-focus' : ''} htmlFor="email">Email</label>
                    <input 
                        onBlur={ (e) => inputBlurHandler('email',e.target.value)} 
                        onFocus={ () => setEmailLabel(false)} 
                        type="email" name="email" 
                        onChange={ e => validateHandler("email", e.target.value)} 
                    />
                    {email.error && <span className="error-valid">{email.error}</span>}
                </div>

                <div className="input-wrapper">
                    <label className={passwordLabel ? 'label-focus' : ''} htmlFor="password">Password</label>
                    <input 
                        onBlur={ (e) => inputBlurHandler('password',e.target.value)} 
                        onFocus={ () => setPasswordLabel(false)} 
                        type={ showPassword ? 'text' : 'password'}  
                        autoComplete="on" name="password" 
                        onChange={ e => validateHandler("password",e.target.value)} 
                    />
                    {password.error && <span className="error-valid">{password.error}</span>}
                    <span className="show-password" onClick={ () => setShowPassword( ! showPassword )}>
                        {showPassword ? <i className="far fa-eye-slash"></i> : <i className="far fa-eye"></i>}
                    </span>
                </div>

                <div className="form-bottom">
                <div className="button-wrapper">
                <button className="submit" type="submit" disabled={password.isValid && email.isValid ? false : true }>Sign In</button>
                </div>
    
                </div>
            </form>
            
        </div>
    )
}

export default SignInScreen