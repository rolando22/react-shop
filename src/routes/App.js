import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "../containers/Layout";
import { Home } from "../pages/Home";
import { Login } from "../containers/Login";
import { RecoveryPassword } from "../containers/RecoveryPassword";
import { SendEmail } from "../pages/SendEmail";
import { NewPassword } from "../pages/NewPassword";
import { MyAccount } from "../pages/MyAccount";
import { CreateAccount } from "../pages/CreateAccount";
import { Checkout } from "../pages/Checkout";
import { NotFound } from "../pages/NotFound";
import "../styles/global.scss";

function App () {
    return (
        <BrowserRouter>
            <Layout>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/recovery-password" element={<RecoveryPassword />} />
                    <Route path="/send-email" element={<SendEmail />} />
                    <Route path="/new-password" element={<NewPassword />} />
                    <Route path="/my-account" element={<MyAccount />} />
                    <Route path="/signup" element={<CreateAccount />} />
                    <Route path="/chekout" element={<Checkout />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </Layout>
        </BrowserRouter>
    );
}

export { App };