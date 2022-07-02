import React from "react";
import "@styles/CreateAccount.scss";

function CreateAccount () {
    return (
        <div className="login">
            <div className="form-container">
                <h1 className="title title-create">My account</h1>
                <form action="/" className="form">
                    <div>
                        <label htmlFor="name" className="label">Name</label>
                        <input type="text" id="name" placeholder="Elon Musk" className="input input-name" />
                        <label htmlFor="email" className="label">Email adress</label>
                        <input type="text" id="email" placeholder="platzi@example.com" className="input input-email" />
                        <label htmlFor="password" className="label">Password</label>
                        <input type="password" id="password" placeholder="*********" className="input input-password" />  
                    </div>
                    <input type="submit" value="Save" className="primary-button login-button" />
                </form>
            </div>
        </div>
    );
}

export { CreateAccount };