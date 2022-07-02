import React from "react";
import { Link } from "react-router-dom";
import "@styles/NotFound.scss";

function NotFound () {
    return (
        <div>
            <h1 className="title-404">404</h1>
            <p className="text-404">Oops! Page not found.</p>
            <Link className="button-404" to="/">Return to Home.</Link>
        </div>
    );
}

export { NotFound };