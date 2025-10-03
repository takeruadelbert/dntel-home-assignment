export type Status = 'REJECTED' | 'PENDING' | 'CALL' | 'RESUBMITTED';
export type PMSSyncStatus = 'SYNCED' | 'NOT_SYNCED';
export type InsuranceCarrierType = 'Primary' | 'Secondary';

export type Row = {
    id: string;
    patientName: string;
    serviceDate: string;
    insuranceCarrier: string;
    insuranceCarrierType: InsuranceCarrierType;
    amount: number;
    status: Status;
    lastUpdated: string;
    dateSent: string;
    dateSentOriginal: string;
    user: string;
    pmsSyncStatus: PMSSyncStatus;
    provider: string;
    providerId: string;
}

export interface Column {
    key: keyof Row;
    label: string;
    sortable?: boolean;
}
