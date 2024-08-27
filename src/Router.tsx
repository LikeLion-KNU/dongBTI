import { Route, Routes } from "react-router-dom";

import { RootLayout } from "./components/layout/RootLayout";
import HomePage from "./pages/HomePage";
import LoadingPage from './pages/ResultLoading';

export const Router = () => {
    return (
        <Routes>
            <Route path="/" element={<RootLayout />}>
                <Route index element={<HomePage />}></Route>
                <Route path="/loading" element={<LoadingPage />} /> 
            </Route>
        </Routes>
    );
};
