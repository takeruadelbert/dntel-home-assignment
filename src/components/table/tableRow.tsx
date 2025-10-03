import {Row} from "@/types/index.type";
import {formatCurrency, formatDate, formatTime} from "@/utils/generalHelper.util";
import React from "react";
import Badge from "@/components/ui/badge";
import SyncStatus from "@/components/ui/syncStatus";
import AvatarInitial from "@/components/ui/avatarInitial";

type Props = { row: Row };

const TableRow = ({row}: Props) => {
    return (
        <tr className="border-b border-0 border-solid border-[#17533B0A]">
            <td className="px-4 py-3 whitespace-nowrap">
                <div className="text-sm font-medium text-gray-900">{row.patientName}</div>
                <div className="text-xs text-[#B3B3B3]">ID: {row.id}</div>
            </td>
            <td className="px-4 py-2 text-sm text-gray-700">{formatDate(row.serviceDate)}</td>
            <td className="px-4 py-3 whitespace-nowrap">
                <div className="text-sm text-gray-900">{row.insuranceCarrier}</div>
                <Badge variant={row.insuranceCarrierType} className={"w-full"}>{row.insuranceCarrierType}</Badge>
            </td>
            <td className="px-4 py-2 text-right text-sm text-gray-700">{formatCurrency(row.amount)}</td>
            <td className="px-4 py-3 text-sm text-gray-700 whitespace-nowrap">
                {row.status}
            </td>
            <td className="px-4 py-3 whitespace-nowrap">
                <div className="text-sm font-medium text-gray-900">
                    {formatDate(row.lastUpdated)}
                </div>
                <div className="text-xs text-gray-500">
                    {formatTime(row.lastUpdated)}
                </div>
            </td>
            <td className="px-4 py-2">
                <AvatarInitial name={row.patientName}/>
            </td>
            <td className="px-4 py-2 text-sm text-gray-700">{formatDate(row.dateSent)}</td>
            <td className="px-4 py-2 text-sm text-gray-700">{formatDate(row.dateSentOriginal)}</td>
            <td className="px-4 py-3 whitespace-nowrap">
                <SyncStatus status={row.pmsSyncStatus} className={"w-full"}/>
                <div className="text-xs text-gray-500">Status modified today</div>
            </td>
            <td className="px-4 py-3 whitespace-nowrap">
                <div className="text-sm font-medium text-gray-900">{row.provider}</div>
                <div className="text-xs text-[#B3B3B3]">ID:{row.providerId}</div>
            </td>
        </tr>
    );
}

export default React.memo(TableRow);
