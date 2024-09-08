import { useMemo } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

import { results } from "@/constants/results";

import { useUserInfo } from "@/store/store";

export const useResult = () => {
    const navigate = useNavigate();
    const [searchParams] = useSearchParams();

    const mbti = searchParams.get("type");

    const findResult = (mbti: string) => {
        const result = results.find((value) => value.resultType === mbti);
        if (!result) throw new Error(`${mbti} 에 해당하는 결과가 존재하지 않습니다`);
        return result;
    };

    const result = useMemo(() => {
        return findResult(mbti as string);
    }, [mbti]);

    const { name } = useUserInfo();

    return { name, mbti, result, navigate };
};
