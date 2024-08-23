import React from "react";
import { InfoPropsInterface } from "../../interfaces/info.interface";
import LinkIcon from "../icon/LinkIcon";

import myPic from "../../assets/images/me.jpg";
import { RESUME_PATH } from "../../constants/constants";

const Info: React.FC<InfoPropsInterface> = ({ fullname, position, status }) => {
    return (
        <>
            <div className="lg:mb-6 group relative grid lg:place-items-center gap-4 sm:grid-cols-8 sm:gap-8 md:gap-4">
                <img className="sm:order-1 sm:col-span-2 sm:translate-y-1 info-img hidden xl:block" src={myPic} alt="me" />
                <h1 className="sm:order-2 sm:col-span-6 text-4xl font-bold tracking-tight text-text dark:text-textDark xl:text-3xl">
                    {fullname ? fullname : "Full Name Here"}
                </h1>
            </div>
            <h2 className="mt-3 text-lg font-medium tracking-tight text-text dark:text-textDark sm:text-xl">
                {position ? position : "Position Here"}
            </h2>
            <p className="mt-3 max-w-xs leading-normal text-text dark:text-slate-300">{status ? status : "Status Here"}</p>
            <div className="mt-4">
                <a
                    className="text-primary dark:text-primaryDark hover:text-secondary dark:hover:text-textDark focus-visible:text-text dark:focus-visible:text-textDark font-semibold group/link text-base transition-all duration-150 ease-in-out"
                    href={RESUME_PATH}
                    target="_blank"
                >
                    <span>
                        View My{" "}
                        <span className="inline-block">
                            CV
                            <LinkIcon />
                        </span>
                    </span>
                </a>
            </div>
        </>
    );
};

export default Info;
