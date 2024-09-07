import { Route, Routes } from "react-router-dom";

import { RootLayout } from "./components/layout/RootLayout";
import AnalyticsPage from "./pages/AnalyticsPage";
import { CreditPage } from "./pages/CreditPage";
import HomePage from "./pages/HomePage";
import LoadingPage from "./pages/ResultLoading";
import ResultPage from "./pages/ResultPage";
import ResultShare from "./pages/ResultShare";
import SelectPage from "./pages/SelectPage";

export const Router = () => {
    return (
        <Routes>
            <Route path="/" element={<RootLayout />}>
                <Route index element={<HomePage />}></Route>
                <Route path="/loading" element={<LoadingPage />} />
                <Route path="/result" element={<ResultPage />}></Route>
                <Route path="/share" element={<ResultShare />}></Route>
                <Route path="/select" element={<SelectPage />}></Route>
                <Route path="/analytics" element={<AnalyticsPage />}></Route>
                <Route path="/credits" element={<CreditPage />}></Route>
            </Route>
        </Routes>
    );
};
