import {Column, Row} from "@/types/index.type";
import {Sort} from "@/hooks/useTable";
import React from "react";
import {ArrowDown, ArrowUp} from "lucide-react";

interface TableHeaderProps {
    columns: Column[];
    sort: Sort;
    toggleSort: (column: keyof Row) => void;
}

const TableHeader = ({columns, sort, toggleSort}: TableHeaderProps) => {
    return (
        <thead className="bg-[#FFFFFF] h-[72px] space-between pt-[20px] pr-[24px] pb-[20px] pl-[24px]">
        <tr>
            {columns.map((col) => (
                <td
                    key={col.key as string}
                    scope="col"
                    className="px-4 py-2 text-left text-[#546661] cursor-pointer select-none text-[14px]"
                    aria-sort={
                        sort.key === col.key ? sort.dir === 'asc' ? 'ascending' : 'descending' : 'none'
                    }
                    onClick={() => col.sortable && toggleSort(col.key)}
                >
                    {col.label}
                    {col.sortable && sort.key === col.key && (
                        <span className="ml-1">
                            {sort.dir === 'asc'
                                ? <ArrowUp size={16} className="inline-block"/>
                                : <ArrowDown size={16} className="inline-block"/>
                            }
                        </span>
                    )}
                </td>
            ))}
        </tr>
        </thead>
    );
}

export default React.memo(TableHeader);
