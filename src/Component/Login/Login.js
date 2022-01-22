import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'
import './Login.scss'
import loginApi from './../../api/loginApi';
import { isLoggedIn, setUserData } from './../../utils/users'


export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [alertText, setAlertText] = useState('');
    const navigate = useNavigate();


    useEffect(() => {

        if (isLoggedIn()) {
            navigate('/home');
        }
    }, [])


    const login = async () => {
        if(!email || !password){
            setAlertText('Please,Enter emailId eve.holt@reqres.in')
            return
        }
        setLoading(true);
        try {
            const data = await loginApi(email, password);
            console.log('success', data);
            setUserData(data.token, email)
            navigate('/home');
        }
        catch (error) {
            console.log("error", error)
            const errortext = error.error;
            setAlertText(errortext);
        }
        finally {
            setLoading(false)
        }
    }



    return (
        <div className="container login-container d-flex p-5">

            <div className="login-form m-auto">
                {alertText && (
                    <div className="alert alert-danger ">
                        {alertText}
                        <i className="fa fa-times float-right" onClick={()=>setAlertText('')}></i>
                    </div>
                )}
                <h5 className='text-center'>LOGIN NOW<i className="fa fa-lock px-2" aria-hidden="true"></i></h5>

                <div className="form">
                    <div className="row">
                        <label htmlFor="email" className="form-label" >Email</label>
                        <input value={email} type="text" className="form-control"  onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <div className="row mb-3">
                        <label htmlFor="password" className="form-label">Password</label>
                        <input value={password} type="password" className="form-control" onChange={(e) => setPassword(e.target.value)} />
                    </div>

                    <div className="row">
                        {/* <button className="btn btn-primary" type="button" onClick={login}>Submit<i className="fa fa-sign-in px-2" aria-hidden="true"></i></button> */}
                        <button disabled={loading} className="btn btn-primary" type="button" onClick={login}>{loading ? 'loading..' : <span>Submit<i className="fa fa-sign-in px-2" aria-hidden="true"></i></span>}</button>
                        <div className='text-center py-2 login-reister-btn-text'><Link to='/register'>Register Now</Link></div>
                    </div>

                </div>
            </div>
        </div>
    )
}