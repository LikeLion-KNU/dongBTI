import { BrowserRouter } from "react-router-dom";

import { FontsStyle } from "@/styles/fonts";
import { GlobalStyle } from "@/styles/global";

import { Router } from "./Router";
import { Global } from "@emotion/react";

export default function App() {
    return (
        <BrowserRouter>
            <Global styles={[FontsStyle, GlobalStyle]} />
            <Router />
        </BrowserRouter>
    );
}
