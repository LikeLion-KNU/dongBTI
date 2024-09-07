import { Route, Routes, useLocation } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";

import { RootLayout } from "./components/layout/RootLayout";
import AnalyticsPage from "./pages/AnalyticsPage";
import HomePage from "./pages/HomePage";
import LoadingPage from "./pages/ResultLoading";
import ResultPage from "./pages/ResultPage";
import ResultShare from "./pages/ResultShare";
import SelectPage from "./pages/SelectPage";
import "@/transition/fade-slide.css";

export const Router = () => {
    const location = useLocation();

    return (
        <TransitionGroup>
            <CSSTransition key={location.key} timeout={500} classNames="fade-slide">
                <Routes location={location}>
                    <Route path="/" element={<RootLayout />}>
                        <Route index element={<HomePage />}></Route>
                        <Route path="/loading" element={<LoadingPage />} />
                        <Route path="/result" element={<ResultPage />}></Route>
                        <Route path="/share" element={<ResultShare />}></Route>
                        <Route path="/select" element={<SelectPage />}></Route>
                        <Route path="/analytics" element={<AnalyticsPage />}></Route>
                    </Route>
                </Routes>
            </CSSTransition>
        </TransitionGroup>
    );
};
