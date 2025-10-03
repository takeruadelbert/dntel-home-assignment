import clsx from "clsx";
import React from "react";

type AvatarInitialsProps = {
    name: string;
    bgColor?: string;
    textColor?: string;
};

const AvatarInitial = ({name, bgColor = "bg-[#E0FEEF]", textColor = "text-[#196443]"}: AvatarInitialsProps) => {
    const parts = name.trim().split(" ").filter(Boolean);

    let initials = "";
    if (parts.length >= 2) {
        // First + last word
        initials = parts[0][0] + parts[parts.length - 1][0];
    } else if (parts.length === 1) {
        // Single word -> first two chars
        initials = parts[0].substring(0, 2);
    }

    initials = initials.toUpperCase();

    return (
        <span
            className={clsx(
                "inline-flex items-center justify-center w-[30px] h-[28px] rounded-[14px] text-sm font-semibold",
                bgColor,
                textColor
            )}
        >
      {initials}
    </span>
    );
};

export default React.memo(AvatarInitial);
