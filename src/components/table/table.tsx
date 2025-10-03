"use client";

import {Column, Row} from "@/types/index.type";
import {useTable} from "@/hooks/useTable";
import React from "react";
import TableHeader from "@/components/table/tableHeader";
import TableRow from "@/components/table/tableRow";
import TableFooter from "@/components/table/tableFooter";
import Spinner from "@/components/ui/spinner";

type Props = {
    rows: Row[],
    isLoading: boolean,
};

const Table = ({rows, isLoading}: Props) => {
    const {
        pageRows,
        pageCount,
        pageIndex,
        setPageIndex,
        pageSize,
        setPageSize,
        sort,
        toggleSort,
    } = useTable(rows);

    const columns: Column[] = [
        {key: "patientName", label: "Patient", sortable: true},
        {key: "serviceDate", label: "Service Date", sortable: true},
        {key: "insuranceCarrier", label: "Insurance Carrier", sortable: true},
        {key: "amount", label: "Amount", sortable: true},
        {key: "status", label: "Status", sortable: true},
        {key: "lastUpdated", label: "Last Updated", sortable: true},
        {key: "user", label: "User", sortable: false},
        {key: "dateSent", label: "Date Sent", sortable: true},
        {key: "dateSentOriginal", label: "Date Sent Orig", sortable: true},
        {key: "pmsSyncStatus", label: "PMS Sync Status", sortable: false},
        {key: "provider", label: "Provider", sortable: true},
    ];

    if (isLoading) {
        return (
            <div className="bg-white rounded-lg border border-[#E5E7EB] min-h-[200px] flex flex-col justify-center">
                <Spinner/>
                <p className="text-center text-gray-500 mt-2">Loading data...</p>
            </div>
        );
    }

    return (
        <div className="bg-white">
            <table className="min-w-full border-0">
                <TableHeader columns={columns} sort={sort} toggleSort={toggleSort}/>
                <tbody>
                {pageRows.length > 0 ? (
                    pageRows.map((r) => <TableRow key={r.id} row={r}/>)
                ) : (
                    <tr>
                        <td colSpan={columns.length} className="px-4 py-6 text-center text-gray-500">
                            No data found
                        </td>
                    </tr>
                )}
                </tbody>
            </table>
            <TableFooter
                pageIndex={pageIndex}
                pageCount={pageCount}
                setPageIndex={setPageIndex}
                pageSize={pageSize}
                setPageSize={setPageSize}
            />
        </div>
    );
}

export default React.memo(Table);
