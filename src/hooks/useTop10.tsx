import { useEffect, useState } from "react";

import { top10Response } from "@/pages/AnalyticsPage";

import { api } from "@/config/axios";

export const useTop10 = () => {
    const [top10, setTop10] = useState<top10Response | null>(null);
    const [isPending, setIsPending] = useState<boolean>(false);
    const [isError, setIsError] = useState<boolean>(false);

    useEffect(() => {
        setIsPending(true);
        setIsError(false);

        api.get<top10Response>(`/stats/top/mbti`)
            .then((data) => {
                setTop10({ top: data.data.top });
                console.log(data.data.top);
            })
            .catch(() => {
                setIsError(true);
            })
            .finally(() => {
                setIsPending(false);
            });
    }, []);

    return { isPending, isError, top10 };
};
