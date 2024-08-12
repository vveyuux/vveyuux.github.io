import React from "react";
import { ProjectTableBodyRowPropInterface, RowProps } from "../../interfaces/table.interface";
import LinkIcon from "../icon/LinkIcon";

const ProjectTableBodyRow: React.FC<RowProps<ProjectTableBodyRowPropInterface>> = ({ rowData }) => {
    return (
        <tr className="border-b border-primary/25 dark:border-primaryDark/25 last:border-none">
            <td className="pl-4 py-4 pr-4 align-top text-sm text-text dark:text-slate-300">
                <div className="translate-y-px">{rowData.year}</div>
            </td>
            <td className="pl-4 py-4 pr-4 align-top font-semibold leading-snug text-text dark:text-textDark">
                <div>
                    <div className="block sm:hidden">
                        <a
                            className="inline-flex items-baseline font-medium leading-tight text-text dark:text-textDark hover:text-primary dark:hover:text-primaryDark focus-visible:text-primary dark:focus-visible:text-primaryDark sm:hidden group/link text-base"
                            href={rowData.href}
                            target="_blank"
                            rel="noreferrer noopener"
                            aria-label="Emerson Collective (opens in a new tab)"
                        >
                            <span>
                                {rowData.projectName}{" "}
                                <span className="inline-block">
                                    {rowData.projectSubName}
                                    <LinkIcon />
                                </span>
                            </span>
                        </a>
                    </div>
                    <div className="hidden sm:block">{`${rowData.projectName} ${rowData.projectSubName}`}</div>
                </div>
            </td>
            {/* <td className="hidden pl-4 py-4 pr-4 align-top text-sm lg:table-cell">
                <div className="translate-y-px whitespace-nowrap">Upstatement</div>
            </td> */}
            <td className="hidden pl-4 py-4 pr-4 align-top lg:table-cell">
                <ul className="flex -translate-y-1.5 flex-wrap">
                    {rowData.builtWith.map((tech, index) => <li key={index} className="my-1 mr-1.5">
                        <div className="flex items-center rounded-full bg-accent/50 dark:bg-accentDark/50 px-3 py-1 text-xs font-medium leading-5 text-accentDark dark:text-textDark ">
                            {tech}
                        </div>
                    </li>) }
                </ul>
            </td>
            <td className="hidden pl-4 py-4 align-top sm:table-cell">
                <ul className="translate-y-1">
                    <li className="mb-1 flex items-center">
                        <a
                            className="inline-flex items-baseline font-medium leading-tight text-primary dark:text-primaryDark hover:text-secondary dark:hover:text-textDark focus-visible:text-text dark:focus-visible:text-textDark group/link text-sm"
                            href={rowData.href}
                            target="_blank"
                            rel="noreferrer noopener"
                            aria-label="emersoncollective.com (opens in a new tab)"
                        >
                            <span>
                                {" "}
                                <span className="inline-block">
                                    {rowData.titleLink}
                                    <LinkIcon />
                                </span>
                            </span>
                        </a>
                    </li>
                </ul>
            </td>
        </tr>
    );
};

export default ProjectTableBodyRow;
