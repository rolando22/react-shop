import React from "react";

function Menu () {
    return (
        <div className="desktop-menu">
            <ul>
                <li><a href="/" className="my-orders">My orders</a></li>
                <li><a href="/">My account</a></li>
                <li><a href="/">Sign out</a></li>
            </ul>
        </div>
    );
}

export { Menu };