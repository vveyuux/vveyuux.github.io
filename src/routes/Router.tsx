import React, { Suspense } from "react";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import Loading from "../components/loading/Loading";
import { HOMEPAGE_PATH, PROJECTPAGE_PATH } from "../constants/constants";
import HomePage from "../pages/HomePage";
import Preloader from "../components/loading/Preloader";
import ProjectPage from "../pages/ProjectPage";
import { motion } from "framer-motion";
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
                <Routes location={location} key={location.pathname}>
                    <Route
                        path={HOMEPAGE_PATH}
                        element={
                            <PageWrapper keyName={HOMEPAGE_PATH}>
                                <HomePage />
                            </PageWrapper>
                        }
                    />
                    <Route
                        path={PROJECTPAGE_PATH}
                        element={
                            <PageWrapper keyName={PROJECTPAGE_PATH}>
                                <ProjectPage />
                            </PageWrapper>
                        }
                    />
                </Routes>
            </Preloader>
        </Suspense>
    );
};

const PageWrapper: React.FC<{ children: React.ReactNode, keyName: string }> = ({ children, keyName }) => {
    return (
            <motion.div key={keyName} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5}}>
                {children}
            </motion.div>
    );
};

export default Router;
