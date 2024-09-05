import React from "react";
import { useNavigate } from "react-router-dom";

import DropDown from "@/components/form/DropDown";
import { AppBar } from "@/components/navigation/AppBar";
import { Text } from "@/components/typography";

import useAxios from "@/hooks/useAxios";

import backIcon from "@/assets/back.svg";

import { TitleContainer, TitleTop, Main, MiddleSection, TableContainer, Card, Rank, Type } from "./AnalyticsPage.style";

interface axiosProps {
    top: Array<[number, string]>;
}

const renderData = (data: axiosProps | null, loading: boolean, error: AxiosError<string> | Error | null) => {
    if (loading) return <Text size="m">Loading...</Text>;
    if (error) return <Text size="m">Error: {error}</Text>;
    if (data?.top.length == 0) {
        return (
            <Text size="m" color="secondary">
                데이터가 존재하지 않습니다.
            </Text>
        );
    }
    if (data && data.top) {
        return (
            <TableContainer>
                {data.top.map((value, index) => (
                    <Card key={index}>
                        <Rank>{index + 1}위</Rank>
                        <Type>{value[0]}</Type>
                    </Card>
                ))}
            </TableContainer>
        );
    }
    return null;
};

export default function AnalyticsPage() {
    const [selectedMajor, setSelectedMajor] = React.useState<string>("humanities");
    const navigate = useNavigate();

    const handleGoBack = () => {
        navigate("/");
    };

    const {
        data: allData,
        loading: allDataLoading,
        error: allDataError,
    } = useAxios<axiosProps | null>(
        {
            url: `/stats/top/mbti`,
            method: "GET",
        },
        [],
    );

    const {
        data: majorData,
        loading: majorDataLoading,
        error: majorDataError,
    } = useAxios<axiosProps | null>(
        {
            url: `/stats/top/department?key=${selectedMajor}`,
            method: "GET",
        },
        [selectedMajor],
    );

    return (
        <>
            <img src={backIcon} onClick={handleGoBack} />
            <AppBar children="전체 통계" />

            <TitleContainer>
                <Text size="m">어떤 유형이 가장 많을까요?</Text>
            </TitleContainer>

            <Main>{renderData(allData, allDataLoading, allDataError)}</Main>

            <MiddleSection />

            <TitleContainer>
                <TitleTop>
                    <DropDown
                        color="secondary"
                        width="100%"
                        height="40px"
                        selectedMajor={selectedMajor}
                        setSelectedMajor={setSelectedMajor}
                    />
                    <Text size="m">에서</Text>
                </TitleTop>

                <Text size="m">어떤 유형이 가장 많을까요?</Text>
            </TitleContainer>
            <Main>{renderData(majorData, majorDataLoading, majorDataError)}</Main>
        </>
    );
}
