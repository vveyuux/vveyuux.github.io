import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import coffeeGif from "../../assets/images/coffee-loading.gif";
import { useDispatch, useSelector } from "react-redux";
import { changeLoadedStatus } from "../redux/slices/preLoaderSlice";
import { AppDispatch, RootState } from "../redux/store";

const Preloader: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [progress, setProgress] = useState(0);
    const [fadeInContent, setFadeInContent] = useState(false);
    const loaded = useSelector((state: RootState) => state.preLoader.loaded);
    const dispatch: AppDispatch = useDispatch();

    const theme = useSelector((state: RootState) => state.theme.theme);

    useEffect(() => {
        if (progress < 100) {
            const interval = setInterval(() => {
                setProgress((prev) => prev + 1);
            }, 30);

            return () => clearInterval(interval);
        } else {
            dispatch(changeLoadedStatus(true));
        }
    }, [progress, dispatch]);

    useEffect(() => {
        if (loaded) {
            const timer = setTimeout(() => setFadeInContent(true), 500);
            return () => clearTimeout(timer);
        }
    }, [loaded]);

    useEffect(() => {
        document.body.classList.remove('light', 'dark');
        document.body.classList.add(theme);
        localStorage.setItem('theme', theme);
      }, [theme]);

    return (
        <AnimatePresence mode="wait">
            {!loaded && (
                <motion.div
                    className="flex items-center justify-center flex-col min-h-screen bg-background dark:bg-backgroundDark"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <img loading="lazy" className="rounded-full h-20 w-20 bg-transparent" src={coffeeGif} alt="coffee-loading" />
                    <div className="w-64 bg-gray-200 rounded-lg">
                        <motion.div
                            className="bg-primary dark:bg-primaryDark h-2 rounded-lg"
                            initial={{ width: 0 }}
                            animate={{ width: `${progress}%` }}
                            transition={{ duration: 0.5 }}
                        />
                    </div>
                </motion.div>
            )}
            {fadeInContent && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    {children}
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default Preloader;
