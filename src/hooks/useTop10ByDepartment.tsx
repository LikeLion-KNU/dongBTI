import { useState, useEffect } from "react";

import { api } from "@/config/axios";

interface Top10Response {
    top: [string, number][];
}

export const useTop10ByDepartment = (department: string) => {
    const [top10ByDepartment, setTop10ByDepartment] = useState<Top10Response | null>(null);
    const [isPending, setIsPending] = useState<boolean>(false);
    const [isError, setIsError] = useState<boolean>(false);

    useEffect(() => {
        setIsPending(true);
        setIsError(false);

        api.get<Top10Response>(`/stats/top/department?key=${department}`)
            .then((data) => {
                setTop10ByDepartment({ top: data.data.top });
                console.log("top10 by department", data.data.top);
            })
            .catch(() => {
                setIsError(true);
            })
            .finally(() => {
                setIsPending(false);
            });
    }, [department]);

    return { isPending, isError, top10ByDepartment };
};
