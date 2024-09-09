import { useState, useEffect } from "react";

import { top10Response } from "@/pages/AnalyticsPage";

import { api } from "@/config/axios";

interface top10ByDepartmentProps {
    department: string;
}

export const useTop10ByDepartment = (department: top10ByDepartmentProps) => {
    const [top10ByDepartment, setTop10ByDepartment] = useState<top10Response | null>(null);
    const [isPending, setIsPending] = useState<boolean>(false);
    const [isError, setIsError] = useState<boolean>(false);

    useEffect(() => {
        setIsPending(true);
        setIsError(false);

        api.get<top10Response>(`/stats/top/department?key=${department}`)
            .then((data) => {
                setTop10ByDepartment({ top: data.data.top });
                console.log(data.data.top);
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
