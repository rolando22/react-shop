import React from "react";
import "@styles/Login.scss";

import logoYardSale from "@logos/logo_yard_sale.svg";

function Login () {
    return (
        <div className="login">
            <div className="form-container">
                <img src={logoYardSale} alt="logo" className="logo" />
                <form action="/" className="form">
                    <label htmlFor="email" className="label">Email address</label>
                    <input type="text" id="email" placeholder="platzi@example.com" className="input input-email" />
                    <label htmlFor="password" className="label">Password</label>
                    <input type="password" id="password" placeholder="*********" className="input input-password" />
                    <input type="submit" value="Log in" className="primary-button login-button" />
                    <a href="/">Forgot my password</a>
                </form>
                <button className="secondary-button sigup-button">Sign up</button>
            </div>
        </div>
    );
}

export { Login };