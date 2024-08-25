import React from "react";
import Info from "../components/sections/Info";
import Navigation from "../components/navigation/Navigation";
import SocialMedia from "../components/sections/SocialMedia";
import About from "../components/sections/About";
import Experience from "../components/sections/Experience";
import Projects from "../components/sections/Projects";
import { experiences, HOMEPAGE_PATH, infoData, navMenu, projects, socialMediaLinks } from "../constants/constants";
import { motion } from "framer-motion";

const HomePage: React.FC = () => {
    return (
        <motion.div key={HOMEPAGE_PATH} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.3}} className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-20 lg:px-24 lg:py-0 bg-background dark:bg-backgroundDark transition-all duration-150 ease-in-out">
            <div className="lg:flex lg:justify-between lg:gap-4">
                <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24">
                    <div>
                        <Info fullname={infoData.fullname} position={infoData.position} status={infoData.status} />
                        <Navigation navMenu={navMenu} />
                    </div>
                    <SocialMedia menu={socialMediaLinks} />
                </header>
                <main id="content" className="pt-24 lg:w-1/2 lg:py-24">
                    <About />
                    <Experience experiences={experiences} />
                    <Projects projects={projects} />
                </main>
            </div>
        </motion.div>
    );
};

export default HomePage;
