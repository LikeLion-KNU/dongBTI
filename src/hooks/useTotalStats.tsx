import { useEffect, useState } from "react";

import { api } from "@/config/axios";

interface TotalStatsResponse {
    total_count: number;
}

export const useTotalStats = () => {
    const [isPending, setIsPending] = useState<boolean>(false);
    const [isError, setIsError] = useState<boolean>(false);
    const [totalCount, setTotalCount] = useState<number>(0);

    useEffect(() => {
        setIsPending(true);
        api.get<TotalStatsResponse>(`/stats/total`)
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
