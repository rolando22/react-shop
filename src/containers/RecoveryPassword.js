import React from "react";

function RecoveryPassword () {
    return (
        <div className="login">
            <div className="form-container form-container-emailSent">
                <img src="./logos/Platzi_YardSale_Logos/logo_yard_sale.svg" alt="logo" className="logo" />
                <h1 className="title">Email has been sent!</h1>
                <p className="subtitle">Please check your inbox for instructions on how reset the password</p>
                <div className="email-image">
                    <img src="./icons/Platzi_YardSale_Icons/email.svg" alt="email" />
                </div>
                <button className="primary-button login-button">Login</button>
                <p className="resend">
                    <span>Didn't receive the mail?</span>
                    <a href="/">Resend</a>
                </p>
            </div>
        </div>
    );
}

export { RecoveryPassword };