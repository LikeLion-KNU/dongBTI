import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

import { api } from "@/config/axios";
import { useUserInfo } from "@/store/store";

export const useSubmitResult = () => {
    const [isPending, setIsPending] = useState<boolean>(false);
    const major = useUserInfo((state) => state.major);

    const navigate = useNavigate();
    const [searchParams] = useSearchParams();

    useEffect(() => {
        const mbti = searchParams.get("type");
        console.log(searchParams);

        api.post("/stats", { department: major, mbti })
            .then(() => {
                navigate(`/result?type=${mbti}`);
            })
            .finally(() => {
                setIsPending(false);
            });
    }, []);

    return { isPending };
};
