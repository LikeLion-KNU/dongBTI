import { useEffect, useState } from "react";

import { top10Response } from "@/pages/AnalyticsPage";

import { api } from "@/config/axios";

export const useTop10 = () => {
    const [top10, setTop10] = useState<top10Response | null>(null);
    const [isPending, setIsPending] = useState<boolean>(false);
    const [isError, setIsError] = useState<boolean>(false);
    const [totalCount, setTotalCount] = useState<number>(0);

    useEffect(() => {
        setIsPending(true);
        setIsError(false);

        api.get<top10Response>(`/stats/top/mbti`)
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
