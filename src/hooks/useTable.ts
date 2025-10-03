import {useMemo, useState} from 'react';
import {Row, Status} from "@/types/index.type";

export type Sort = {
    key: keyof Row | null;
    dir: 'asc' | 'desc' | null,
};

export const useTable = (rows: Row[], initialPageSize = 10) => {
    const [search, setSearch] = useState('');
    const [status, setStatus] = useState<Status | 'ALL'>('ALL');
    const [sort, setSort] = useState<Sort>({key: null, dir: null});
    const [pageIndex, setPageIndex] = useState(0);
    const [pageSize, setPageSize] = useState(initialPageSize);

    const filtered = useMemo(() => {
        return rows.filter((r) => {
            const matchesSearch = r.patientName.toLowerCase().includes(search.toLowerCase());
            const matchesStatus = status === 'ALL' || r.status === status;
            return matchesSearch && matchesStatus;
        });
    }, [rows, search, status]);

    const sorted = useMemo(() => {
        if (!sort.key || !sort.dir) return filtered;

        const sortKey = sort.key;
        const sortDir = sort.dir;

        return [...filtered].sort((a, b) => {
            const A = a[sortKey];
            const B = b[sortKey];

            if (!isNaN(Date.parse(String(A))) && !isNaN(Date.parse(String(B)))) {
                return sortDir === 'asc' ? Date.parse(String(A)) - Date.parse(String(B)) : Date.parse(String(B)) - Date.parse(String(A));
            }

            if (typeof A === 'number' && typeof B === 'number') {
                return sort.dir === 'asc' ? A - B : B - A;
            }

            return sortDir === 'asc' ? String(A).localeCompare(String(B)) : String(B).localeCompare(String(A));
        });
    }, [filtered, sort]);

    const pageCount = Math.ceil(sorted.length / pageSize);
    const pageRows = useMemo(
        () => sorted.slice(pageIndex * pageSize, (pageIndex + 1) * pageSize),
        [sorted, pageIndex, pageSize]
    );

    const toggleSort = (key: keyof Row) => {
        setSort((prev) => {
            if (prev.key !== key) {
                return {key, dir: 'asc'};
            }

            if (prev.dir === 'asc') {
                return {key, dir: 'desc'};
            }

            return {key: null, dir: null};
        });
    };

    return {
        pageRows,
        total: sorted.length,
        pageCount,
        pageIndex,
        setPageIndex,
        pageSize,
        setPageSize,
        search,
        setSearch,
        status,
        setStatus,
        sort,
        toggleSort,
    };
}
