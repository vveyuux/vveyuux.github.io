import React from "react";
import SunIcon from "../icon/SunIcon";
import { useSelector, useDispatch } from "react-redux";
import { toggleTheme } from "../redux/slices/themeSlice";
import { AppDispatch, RootState } from "../redux/store";
import MoonIcon from "../icon/MoonIcon";
import { AnimatePresence, motion } from "framer-motion";

const ThemeToggleButton: React.FC = () => {
    const theme = useSelector((state: RootState) => state.theme.theme);
    const dispatch: AppDispatch = useDispatch();

    const darkModeHandler = () => {
        dispatch(toggleTheme(theme === "dark" ? "light" : "dark"));
    };

    return (
        <button
            className="fixed bottom-4 right-4 p-2 lg:p-3 overflow-hidden bg-primary rounded-md shadow-lg hover:bg-[#b09e9a] z-50 transition-all duration-150 ease-in-out"
            type="button"
            onClick={() => darkModeHandler()}
        >
            <div className="relative h-8 w-8 lg:h-10 lg:w-10">
                <AnimatePresence>
                    {theme === "dark" ? (
                        <motion.div
                            key={"moon"}
                            initial={{ y: 100, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            exit={{ y: -100, opacity: 0 }}
                            transition={{ duration: 0.5 }}
                            className="absolute top-0 left-0"
                        >
                            <MoonIcon />
                        </motion.div>
                    ) : (
                        <motion.div
                            key={"sun"}
                            initial={{ y: 100, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            exit={{ y: -100, opacity: 0 }}
                            transition={{ duration: 0.5 }}
                            className="absolute top-0 left-0"
                        >
                            <SunIcon />
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </button>
    );
};

export default ThemeToggleButton;
