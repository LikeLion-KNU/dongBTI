import { BrowserRouter } from "react-router-dom";

import { Router } from "./Router";
import { GlobalStyle } from "./styles/global";
import { Global } from "@emotion/react";

export default function App() {
    return (
        <BrowserRouter>
            <Global styles={GlobalStyle} />
            <Router />
        </BrowserRouter>
    );
}
