import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import './Register.scss'
import registerApi from "../../api/registerApi";
import { useNavigate } from "react-router-dom";
import { isLoggedIn } from './../../utils/users'


export default function Register() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const[alertText,setAlertText]=useState('');
    const navigate = useNavigate();

    useEffect(() => {
        if (isLoggedIn()) {
            navigate('/home')
        }
    }, [])

    //Register user
    const register = async () => {
        if(!email || !password){
            setAlertText('Please,fill all the input boxes')
            return
        }
        setLoading(true)
        try {
            if (password !== confirmPassword) {
                alert("Password not matching.")
                return;
            }

            //TODO: call register api
            const data = await registerApi(email, password)
            console.log('success', data);
            navigate('/login')

        }
        catch (error) {
            //alert(error.error)
            const alertText = error.error;
            setAlertText(alertText);
        }
        finally {
            setLoading(false)
        }
    }

    return (
        <>
            <div className="container register-container d-flex">
                <div className="register-form m-auto">
                   {alertText && <div className="alert alert-danger">
                       {alertText}
                       <i className="fa fa-times float-right" onClick={()=>setAlertText('')}></i>
                    </div>}
                    <h5 className="text-center">Register Now<i className="fa fa-user px-2" aria-hidden="true"></i></h5>
                    <div className="form">
                        <div className="row mb-3">
                            <label htmlFor="email" className="label-form">Email</label>
                            <input value={email} type="text" className="form-control" onChange={(e) => setEmail(e.target.value)} />
                        </div>
                        <div className="row mb-3">
                            <label htmlFor="password" className="form-label">Password</label>
                            <input value={password} type="password" className="form-control" onChange={(e) => setPassword(e.target.value)} />
                        </div>
                        <div className="row">
                            <label htmlFor="confirm-password" className="form-label">Confirm Password</label>
                            <input value={confirmPassword} type="password" className="form-control" onChange={(e) => setConfirmPassword(e.target.value)} />
                        </div>
                        <div className="row py-3">
                            {/* <button disabled={loading} className="btn btn-primary" onClick={register}>Register Now<i className="fa fa-sign-in px-2" aria-hidden="true"></i></button> */}
                            <button disabled={loading} className="btn btn-primary" onClick={register}>{loading ? 'Loading..' : <span>Register Now<i className="fa fa-sign-in px-2" aria-hidden="true"></i></span>}</button>
                            <div className="text-center login-reister-btn-text py-2">
                                <Link to="/login">Login Now</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}