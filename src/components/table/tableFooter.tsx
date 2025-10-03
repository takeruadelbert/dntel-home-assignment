import React from "react";
import {ChevronLeft, ChevronRight, ChevronsLeft, ChevronsRight} from "lucide-react";
import {rowsPerPageOptions} from "@/misc/contants";

type Props = {
    pageIndex: number;
    pageCount: number;
    setPageIndex: (n: number) => void;
    pageSize: number;
    setPageSize: (n: number) => void;
};

const TableFooter = ({pageIndex, pageCount, setPageIndex, pageSize, setPageSize}: Props) => {
    return (
        <div className="flex justify-between items-center p-4 text-sm text-gray-500">
            <div className="flex items-center space-x-2">
                <select
                    value={pageSize}
                    onChange={(e) => {
                        setPageSize(Number(e.target.value));
                        setPageIndex(0);
                    }}
                    className="border rounded-lg px-2 py-1 h-[34px] bg-white focus:ring-indigo-500 focus:border-indigo-500"
                >
                    {rowsPerPageOptions.map((numberRows) => (
                        <option key={numberRows}>{numberRows}</option>
                    ))}
                </select>
                <span>Rows per page</span>
            </div>

            <div className="flex items-center space-x-3">
                <span className="mr-2">
                    Page {pageIndex + 1} of {pageCount}
                </span>

                <button
                    onClick={() => setPageIndex(0)}
                    disabled={pageIndex === 0}
                    className="p-1 border rounded-md disabled:opacity-50 disabled:cursor-not-allowed"
                    aria-label="First page"
                >
                    <ChevronsLeft height={18} width={18} className={"text-pagination"}/>
                </button>

                <button
                    onClick={() => setPageIndex(Math.max(0, pageIndex - 1))}
                    disabled={pageIndex === 0}
                    className="p-1 border rounded-md disabled:opacity-50 disabled:cursor-not-allowed"
                    aria-label="Previous page"
                >
                    <ChevronLeft height={18} width={18} className={"text-pagination"}/>
                </button>

                <button
                    onClick={() => setPageIndex(Math.min(pageCount - 1, pageIndex + 1))}
                    disabled={pageIndex >= pageCount - 1}
                    className="p-1 border rounded-md disabled:opacity-50 disabled:cursor-not-allowed"
                    aria-label="Next page"
                >
                    <ChevronRight height={18} width={18} className={"text-pagination"}/>
                </button>

                <button
                    onClick={() => setPageIndex(pageCount - 1)}
                    disabled={pageIndex >= pageCount - 1}
                    className="p-1 border rounded-md disabled:opacity-50 disabled:cursor-not-allowed"
                    aria-label="Last page"
                >
                    <ChevronsRight height={18} width={18} className={"text-pagination"}/>
                </button>
            </div>
        </div>
    );
};

export default React.memo(TableFooter);
