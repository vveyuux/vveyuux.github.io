import React from "react";
import { allProjectData, HOMEPAGE_PATH, PROJECTPAGE_PATH, projectTableHeads } from "../constants/constants";
import { useNavigate } from "react-router-dom";
import LeftArrow from "../components/icon/LeftArrow";
import Table from "../components/table/Table";
import { ProjectTableBodyRowPropInterface } from "../interfaces/table.interface";
import { motion } from "framer-motion";

const ProjectPage: React.FC = () => {
    const navigate = useNavigate();
    return (
        <motion.div key={PROJECTPAGE_PATH} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.3}} className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-20 lg:px-24 lg:py-0 bg-background dark:bg-backgroundDark transition-all duration-150 ease-in-out">
            <div className="lg:py-24">
                <a
                    className="group mb-2 inline-flex items-center font-semibold leading-tight text-primary dark:text-primaryDark"
                    onClick={() => navigate(HOMEPAGE_PATH)}
                >
                    <LeftArrow />
                    <span className="border-b border-transparent pb-px transition group-hover:border-primary dark:group-hover:border-primaryDark motion-reduce:transition-none">
                        Go Back To Home Page
                    </span>
                </a>
                <h1 className="text-4xl font-bold tracking-tight text-text dark:text-textDark sm:text-5xl">All Projects</h1>
                <Table<ProjectTableBodyRowPropInterface> data={allProjectData} columns={projectTableHeads}/>
            </div>
        </motion.div>
    );
};

export default ProjectPage;
