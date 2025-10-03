import {AlertCircle, Check} from "lucide-react";
import clsx from "clsx";
import React from "react";
import {PMSSyncStatus} from "@/types/index.type";

type SyncStatusProps = {
    status: PMSSyncStatus;
    className?: string;
};

const SyncStatus = ({status, className}: SyncStatusProps) => {
    const baseClasses =
        "inline-flex items-center justify-start gap-1.5 rounded-[4px] px-2.5 py-0.5 text-xs font-medium w-[111px] h-6";

    return (
        <span
            className={clsx(
                baseClasses,
                status === "SYNCED"
                    ? "bg-[#F0F9EB] text-[#01A151] border border-[#01A151]"
                    : "bg-[#EAEAEA] text-[#838580]",
                className,
            )}
        >
      {status === "SYNCED" ? (
          <Check size={14} className="w-4 h-4 text-[#01A151]"/>
      ) : (
          <AlertCircle size={14} className="w-4 h-4 text-[#838580]"/>
      )}
            {status === "SYNCED" ? " Synced" : " Not synced"}
    </span>
    );
};

export default React.memo(SyncStatus);
