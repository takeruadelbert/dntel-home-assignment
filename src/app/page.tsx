'use client';

import Table from "@/components/table/table";
import {generateData} from "@/utils/fakeData.util";
import {useEffect, useState} from "react";
import {Row} from "@/types/index.type";

export default function Home() {
    const [data, setData] = useState<Row[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Simulate loading data table
        const timer = setTimeout(() => {
            const generatedData = generateData(250);
            setData(generatedData);
            setLoading(false);
        }, 1000);

        return () => clearTimeout(timer);
    }, []);

    return (
        <main className="min-h-screen p-4 sm:p-8">
            <Table rows={data} isLoading={loading}/>
        </main>
    );
}
