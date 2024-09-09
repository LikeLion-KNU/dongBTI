import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

import { api } from "@/config/axios";

interface RatioResultResponse {
    status: number;
    count: number;
    total_count: number;
}

export const useRatioResult = () => {
    const [searchParams] = useSearchParams();

    const [isPending, setIsPending] = useState<boolean>(false);
    const [totalCount, setTotalCount] = useState<number>(0);
    const [mbtiCount, setMbtiCount] = useState<number>(0);

    useEffect(() => {
        setIsPending(true);
        api.get<RatioResultResponse>(`/stats?type=${searchParams.get("type")}`)
            .then((data) => {
                setMbtiCount(data.data.count);
                setTotalCount(data.data.total_count);
            })
            .finally(() => {
                setIsPending(false);
            });
    }, []);

    return { isPending, totalCount, mbtiCount };
};
