import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "../containers/Layout";
import { Home } from "../pages/Home";
import { Login } from "../containers/Login";
import { RecoveryPassword } from "../containers/RecoveryPassword";
import { SendEmail } from "../pages/SendEmail";
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
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </Layout>
        </BrowserRouter>
    );
}

export { App };