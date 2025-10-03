import {InsuranceCarrierType, PMSSyncStatus, Status} from "@/types/index.type";

export const statusOptions = [
    {
        label: 'All',
        value: 'ALL'
    },
    {
        label: 'Rejected',
        value: 'REJECTED'
    },
    {
        label: 'Pending',
        value: 'PENDING'
    },
    {
        label: 'Call',
        value: 'CALL'
    },
    {
        label: 'Resubmitted',
        value: 'RESUBMITTED'
    },
];

export const rowsPerPageOptions = [10, 25, 50];

export const CLAIM_STATUSES: Status[] = ['REJECTED', 'PENDING', 'CALL', 'RESUBMITTED'];
export const PMS_STATUSES: PMSSyncStatus[] = ['SYNCED', 'NOT_SYNCED'];
export const INSURANCE_CARRIER_TYPES: InsuranceCarrierType[] = ['Primary', 'Secondary'];

export const EN_US_LOCALE = 'en-US';
