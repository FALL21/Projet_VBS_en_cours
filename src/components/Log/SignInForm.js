import React, { useState } from 'react';
import axios from 'axios';


const SignInForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin =  (e) => {
        e.preventDefault();
        const emailError = document.querySelector('.email.error');
        const passwordError = document.querySelector('.password.error');
 
        console.log(email, password);
       axios({ 
            method: "post",
            url: `${process.env.REACT_APP_API_URL}api/user/login`,
            // withCredentials: true,
            data: {
                email,
                password,
            },
        })
         .then((res) => {
             console.log(res);
            if (res.data.errors) {
                emailError.innerHTML = res.data.errors.email;
                passwordError.innerHTML = res.data.errors.password;
            } else {
                window.location = '/post';
            } 
        }).catch((err) => {
                console.log(err);
            });
 
    };

    return (
        <form action="" onSubmit={handleLogin} id="sign-up-form">
            <label htmlFor="email">Email</label>
            <br />
            <input
                type="text"
                name='email'
                id='email'
                onChange={(e) => setEmail(e.target.value)}
                value={email} className="champ" />

            <div className="email error"></div>
            <br />
            <label htmlFor="password">Mot de Pass</label>
            <br />
            <input
                type="password"
                id='password'
                onChange={(e) => setPassword(e.target.value)}
                value={password} className="champ" /> 

            <div className="password error"></div>
            <br />
            <input type="submit" value="Se connecter" id='sub' />
        </form>
    );
};

export default SignInForm;