import {EN_US_LOCALE} from "@/misc/contants";

export const formatDate = (dateStr: string): string => {
    return new Date(dateStr).toLocaleDateString(EN_US_LOCALE, {
        month: "short",
        day: "2-digit",
        year: "numeric",
    });
}

export const formatCurrency = (amount: number): string => {
    return `$${amount.toLocaleString(EN_US_LOCALE, {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    })}`;
}

export function formatTime(dateStr: string) {
    return new Date(dateStr).toLocaleTimeString(EN_US_LOCALE, {
        hour: "2-digit",
        minute: "2-digit",
    });
}
