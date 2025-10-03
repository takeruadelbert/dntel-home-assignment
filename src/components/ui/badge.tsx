import clsx from "clsx";
import React from "react";
import {InsuranceCarrierType} from "@/types/index.type";

type BadgeProps = {
    children: React.ReactNode;
    variant: InsuranceCarrierType;
    className?: string;
};

const Badge = ({children, variant, className}: BadgeProps) => {
    const baseClasses =
        "inline-flex items-center justify-center rounded-[4px] text-xs font-semibold leading-4 px-2.5 py-0.5 h-[24px]";

    const variants = {
        Primary: "text-primary bg-primaryBg",
        Secondary: "text-secondary bg-secondaryBg",
    };

    return (
        <span className={clsx(baseClasses, variants[variant], className)}>
          {children}
        </span>
    );
};

export default React.memo(Badge);
