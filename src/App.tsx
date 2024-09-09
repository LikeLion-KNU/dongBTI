import { BrowserRouter } from "react-router-dom";
import { Bounce, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { FontsStyle } from "@/styles/fonts";
import { GlobalStyle } from "@/styles/global";

import { Router } from "./Router";
import { Global } from "@emotion/react";

export default function App() {
    return (
        <BrowserRouter>
            <ToastContainer
                position="top-center"
                autoClose={3000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
                transition={Bounce}
            />
            <Global styles={[FontsStyle, GlobalStyle]} />
            <Router />
        </BrowserRouter>
    );
}
