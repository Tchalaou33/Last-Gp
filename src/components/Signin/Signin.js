import React, {useState} from 'react';
import "./Signin.css";
import {useDispatch} from "react-redux";

import { signin } from '../../features/userSlice';

const Signin = () => {
    const [name, setName] = useState("")
    const [password, setPassword] = useState("")

    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();

        dispatch(
            signin({
                name: name,
                password: password,
                signedIn:true,
            })
        );
    };

    return (
        <div className="signin">
            <form onSubmit={(e) => handleSubmit(e)}>
                <h1>Sign In</h1>
                <input 
                    placeholder="Name" 
                    type="name"
                    onChange={(e) => setName(e.target.value)}
                />
                <input 
                    placeholder="Password" 
                    type="password"
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button type="submit">Sign In</button>

            </form>


        </div>
    );
};


export default Signin;


