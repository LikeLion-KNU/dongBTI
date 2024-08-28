import { Route, Routes } from "react-router-dom";

import { RootLayout } from "./components/layout/RootLayout";
import HomePage from "./pages/HomePage";
import ResultShare from "./pages/ResultShare";

export const Router = () => {
    return (
        <Routes>
            <Route path="/" element={<RootLayout />}>
                <Route index element={<HomePage />}></Route>
                <Route path="/share" element={<ResultShare />}></Route>
            </Route>
        </Routes>
    );
};
