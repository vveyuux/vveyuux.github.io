import React, { Suspense } from "react";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import Loading from "../components/loading/Loading";
import { HOMEPAGE_PATH, PROJECTPAGE_PATH } from "../constants/constants";
import HomePage from "../pages/HomePage";
import Preloader from "../components/loading/Preloader";
import ProjectPage from "../pages/ProjectPage";
import { AnimatePresence } from "framer-motion";
import ThemeToggleButton from "../components/button/ThemeToggleButton";

const Router: React.FC = () => {
    return (
        <BrowserRouter>
            <PageRoutes />
        </BrowserRouter>
    );
};

const PageRoutes: React.FC = () => {
    const location = useLocation();

    return (
        <Suspense fallback={<Loading />}>
            <Preloader>
                <ThemeToggleButton />
                <AnimatePresence mode="wait">
                    <Routes location={location} key={location.pathname}>
                        <Route path={HOMEPAGE_PATH} element={<HomePage />} />
                        <Route path={PROJECTPAGE_PATH} element={<ProjectPage />} />
                    </Routes>
                </AnimatePresence>
            </Preloader>
        </Suspense>
    );
};

export default Router;
