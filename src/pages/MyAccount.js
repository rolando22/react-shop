import React from "react";
import "@styles/MyAccount.scss";

function MyAccount () {
    return (
        <div className="login">
            <div className="form-container">
                <h1 className="title title-create">My account</h1>
                <form action="/" className="form">
                    <div>
                        <label htmlFor="name" className="label">Name</label>
                        <p className="value">Elon Musk</p>
                        <label htmlFor="email" className="label">Email adress</label>
                        <p className="value">platzi@example.com</p>
                        <label htmlFor="password" className="label">Password</label>
                        <p className="value">*********</p>  
                    </div>
                    <input type="submit" value="Edit" className="secondary-button login-button" />
                </form>
            </div>
        </div>
    );
}

export { MyAccount };