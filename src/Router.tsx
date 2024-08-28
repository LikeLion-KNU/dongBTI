import { Route, Routes } from "react-router-dom";

import { RootLayout } from "./components/layout/RootLayout";
import HomePage from "./pages/HomePage";
import ResultPage from "./pages/ResultPage";

export const Router = () => {
    return (
        <Routes>
            <Route path="/" element={<RootLayout />}>
                <Route index element={<HomePage />}></Route>
                <Route path="/result" element={<ResultPage />}></Route>
            </Route>
        </Routes>
    );
};
