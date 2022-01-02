import React from 'react';
import "./Signin.css";

const Signin = () => {
    return (
        <div className="signin">
            <form>
                <h1>Sign In</h1>
                <input placeholder="Name" type="name" />
                <input placeholder="Password" type="password" />
                <button type="submit">Sign In</button>
                
            </form>
            
        </div>
    );
};


export default Signin;
