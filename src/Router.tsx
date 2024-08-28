import { Route, Routes } from "react-router-dom";

import { RootLayout } from "./components/layout/RootLayout";
import HomePage from "./pages/HomePage";
import SelectPage from "./pages/SelectPage";

export const Router = () => {
    return (
        <Routes>
            <Route path="/" element={<RootLayout />}>
                <Route index element={<HomePage />}></Route>
            </Route>
            <Route path="/select" element={<RootLayout />}>
                <Route index element={<SelectPage />}></Route>
            </Route>
        </Routes>
    );
};
