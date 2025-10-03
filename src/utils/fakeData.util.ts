import {faker} from '@faker-js/faker';
import {Row} from "@/types/index.type";
import {INSURANCE_CARRIER_TYPES, PMS_STATUSES, CLAIM_STATUSES} from "@/misc/contants";

export const generateData = (count = 200): Row[] => {
    return Array.from({length: count}, () => ({
        id: faker.number.int({min: 100000, max: 999999}).toString(),
        patientName: faker.person.fullName(),
        serviceDate: faker.date.recent().toISOString(),
        insuranceCarrier: faker.company.name(),
        insuranceCarrierType: faker.helpers.arrayElement(INSURANCE_CARRIER_TYPES),
        amount: faker.number.int({min: 50, max: 5000}),
        status: faker.helpers.arrayElement(CLAIM_STATUSES),
        lastUpdated: faker.date.recent({days: 30}).toISOString(),
        dateSent: faker.date.recent().toISOString(),
        dateSentOriginal: faker.date.recent().toISOString(),
        pmsSyncStatus: faker.helpers.arrayElement(PMS_STATUSES),
        user: faker.internet.username(),
        provider: faker.company.name(),
        providerId: faker.number.int({min: 10000000000, max: 100000000000}).toString(),
    }));
}
