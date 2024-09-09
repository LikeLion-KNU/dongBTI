import { useEffect, useState } from "react";

import { api } from "@/config/axios";

interface Top10Response {
    top: [string, number][];
}

export const useTop10 = () => {
    const [top10, setTop10] = useState<Top10Response | null>(null);
    const [isPending, setIsPending] = useState<boolean>(false);
    const [isError, setIsError] = useState<boolean>(false);

    useEffect(() => {
        setIsPending(true);
        setIsError(false);

        api.get<Top10Response>(`/stats/top/mbti`)
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
