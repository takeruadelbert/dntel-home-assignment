import {Status} from "@/types/index.type";
import React, {useState} from "react";
import {ChevronDown} from "lucide-react";
import clsx from "clsx";
import {statusOptions} from "@/misc/contants";

type Props = {
    search: string;
    setSearch: (statusValue: string) => void;
    status: Status | 'ALL';
    setStatus: (statusValue: Status | 'ALL') => void;
};

const TableFilter = ({search, setSearch, status, setStatus}: Props) => {
    const [isFilterVisible, setIsFilterVisible] = useState(true);

    const toggleFilter = () => {
        setIsFilterVisible(!isFilterVisible);
    };

    return (
        <div className="border rounded-md overflow-hidden shadow-sm mb-4">
            <div className="flex justify-between items-center bg-gray-50 px-4 py-3 border-b">
                <div className="text-sm font-medium">Filter</div>
                <button
                    onClick={toggleFilter}
                    className="text-gray-500 hover:text-gray-700"
                    aria-label={isFilterVisible ? "Hide filters" : "Show filters"}
                >
                    <ChevronDown className={clsx(
                        "h-5 w-5 transition-transform duration-300",
                        isFilterVisible ? "transform rotate-180" : ""
                    )}/>
                </button>
            </div>

            <div className={clsx(
                "transition-all duration-300 ease-in-out overflow-hidden",
                isFilterVisible ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
            )}>
                <div className="grid grid-cols-2 gap-6 p-4">
                    <div className="flex flex-col">
                        <label htmlFor="patientName" className="text-sm font-medium text-gray-700 mb-1">
                            Patient Name
                        </label>
                        <input
                            id="patientName"
                            type="text"
                            placeholder="Search by patient name"
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            className="border px-3 py-2 rounded text-sm"
                        />
                    </div>

                    <div className="flex flex-col">
                        <label htmlFor="status" className="text-sm font-medium text-gray-700 mb-1">
                            Status
                        </label>
                        <select
                            id="status"
                            value={status}
                            onChange={(e) => setStatus(e.target.value as Status | 'ALL')}
                            className="text-sm border px-3 py-2 rounded bg-white appearance-none"
                        >
                            {statusOptions.map((item) => (
                                <option key={item.value} value={item.value}>{item.label}</option>
                            ))}
                        </select>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default React.memo(TableFilter);
