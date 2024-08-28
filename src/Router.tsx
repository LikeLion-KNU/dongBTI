import { Route, Routes } from "react-router-dom";

import { RootLayout } from "./components/layout/RootLayout";
import HomePage from "./pages/HomePage";

import LoadingPage from './pages/ResultLoading';
import ResultShare from "./pages/ResultShare";
import ResultPage from "./pages/ResultPage";


export const Router = () => {
    return (
        <Routes>
            <Route path="/" element={<RootLayout />}>
                <Route index element={<HomePage />}></Route>
                <Route path="/loading" element={<LoadingPage />} /> 
                <Route path="/result" element={<ResultPage />}></Route>
                <Route path="/share" element={<ResultShare />}></Route>
            </Route>
        </Routes>
    );
};
