import { useEffect, useState } from "react";

import { api } from "@/config/axios";

interface TotalCountResponse {
    status: number;
    total_count: number;
}

export const useTotalCount = () => {
    const [totalCount, setTotalCount] = useState<number | null>(null);
    const [isPending, setIsPending] = useState<boolean>(false);
    const [isError, setIsError] = useState<boolean>(false);

    useEffect(() => {
        setIsPending(true);
        setIsError(false);

        api.get<TotalCountResponse>(`/stats/total`)
            .then((data) => {
                setTotalCount(data.data.total_count);
            })
            .catch(() => {
                setIsError(true);
            })
            .finally(() => {
                setIsPending(false);
            });
    }, []);

    return { isPending, isError, totalCount };
};
