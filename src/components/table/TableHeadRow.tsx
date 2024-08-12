import React from "react";
import { TableRowPropInterface, HeadRowInterface} from "../../interfaces/table.interface";

const TableHeadRow = ({ rowData }: TableRowPropInterface<HeadRowInterface>): React.ReactElement => {
    return (
        <tr>
            {rowData.map((head, index) => (
                <th
                    key={index}
                    className={`pl-4 py-4 pr-8 text-sm font-semibold text-text dark:text-textDark ${head.hidden && "hidden"} ${
                        head.sm && "sm:table-cell"
                    } ${head.md && "md:table-cell"} ${head.lg && "lg:table-cell"}`}
                >
                    {head.title}
                </th>
            ))}
        </tr>
    );
};

export default TableHeadRow;
