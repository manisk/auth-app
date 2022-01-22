import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Userlist from "../Users/Userlist";
import {clearUserData} from './../../utils/users'


export default function Home() {
    const navigate = useNavigate();
    useEffect(()=>{
        const isUserLoggedIn = Boolean(localStorage.getItem('token'));
        if(!isUserLoggedIn){
            navigate('/login');
        }
    }, []);
    const logout=()=>{
        clearUserData();
       navigate('/login')
    }
    return (
        <>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <div class="container-fluid">
                    <a class="navbar-brand" href="#">ReactApp</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarText">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="#">Home</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Features</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Pricing</a>
                            </li>
                        </ul>
                        <span class="navbar-text d-flex">
                            {/* <h4 className="px-3">Welcome!!Manish</h4> */}
                            <h4 className="px-3">Welcome!!{localStorage.getItem('email')}</h4>
                            <button className="btn btn-danger" onClick={logout} >Logout<i class="fa fa-power-off px-2" aria-hidden="true"></i></button>
                        </span>
                    </div>
                </div>
            </nav>
            <Userlist/>
        </>
    )
}