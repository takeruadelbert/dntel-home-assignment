import {faker} from '@faker-js/faker';
import {InsuranceCarrierType, PMSSyncStatus, Row, Status} from "@/types/index.type";

const statuses: Status[] = ['REJECTED', 'PENDING', 'CALL', 'RESUBMITTED'];
const pmsStatuses: PMSSyncStatus[] = ['SYNCED', 'NOT_SYNCED'];
const insuranceCarriers: InsuranceCarrierType[] = ['Primary', 'Secondary'];

export const generateData = (count = 200): Row[] => {
    return Array.from({length: count}, () => ({
        id: faker.number.int({min: 100000, max: 999999}).toString(),
        patientName: faker.person.fullName(),
        serviceDate: faker.date.recent().toISOString(),
        insuranceCarrier: faker.company.name(),
        insuranceCarrierType: faker.helpers.arrayElement(insuranceCarriers),
        amount: faker.number.int({min: 50, max: 5000}),
        status: faker.helpers.arrayElement(statuses),
        lastUpdated: faker.date.recent({days: 30}).toISOString(),
        dateSent: faker.date.recent().toISOString(),
        dateSentOriginal: faker.date.recent().toISOString(),
        pmsSyncStatus: faker.helpers.arrayElement(pmsStatuses),
        user: faker.internet.username(),
        provider: faker.company.name(),
        providerId: faker.number.int({min: 10000000000, max: 100000000000}).toString(),
    }));
}
