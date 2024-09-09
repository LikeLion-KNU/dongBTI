import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import Footer from "@/components/display/Footer";
import DropDown from "@/components/form/DropDown";
import TopBar from "@/components/layout/TopBar";
import { Text } from "@/components/typography";

import { useTop10 } from "@/hooks/useTop10";
import { useTop10ByDepartment } from "@/hooks/useTop10ByDepartment";

import backIcon from "@/assets/back.svg";

import { TitleContainer, TitleTop, Main, MiddleSection, TableContainer, Card, Rank, Type } from "./AnalyticsPage.style";

export interface top10Response {
    top: [string, number][];
}

const renderData = (data: top10Response | null, isPending: boolean, isError: any) => {
    if (isPending) return <Text size="m">로딩중...</Text>;
    if (isError) return <Text size="m">오류가 발생했습니다.</Text>;
    if (!data) {
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
    const [selectedDepartment, setSelectedDepartment] = useState<string>("");
    const navigate = useNavigate();

    const handleGoBack = () => {
        navigate("/");
    };

    const { top10, isPending: top10Loading, isError: top10Error } = useTop10();
    const {
        top10ByDepartment,
        isPending: top10ByDepartmentLoading,
        isError: top10ByDepartmentError,
    } = useTop10ByDepartment(selectedDepartment);

    useEffect(() => {
        if (selectedDepartment) {
            setSelectedDepartment(selectedDepartment);
        }
    }, [selectedDepartment]);

    return (
        <>
            <img src={backIcon} onClick={handleGoBack} />
            <TopBar title="전체 통계" />

            <TitleContainer>
                <Text size="m" weight="bold">
                    어떤 유형이 가장 많을까요?
                </Text>
            </TitleContainer>

            <Main>{renderData(top10, top10Loading, top10Error)}</Main>

            <MiddleSection />

            <TitleContainer>
                <TitleTop>
                    <DropDown
                        color="secondary"
                        width="160px"
                        height="40px"
                        selectedDepartment={selectedDepartment}
                        setSelectedDepartment={setSelectedDepartment}
                    />
                    <Text size="m" weight="bold">
                        에서
                    </Text>
                </TitleTop>

                <Text size="m" weight="bold">
                    어떤 유형이 가장 많을까요?
                </Text>
            </TitleContainer>
            <Main>
                {selectedDepartment && renderData(top10ByDepartment, top10ByDepartmentLoading, top10ByDepartmentError)}
            </Main>
            <Footer />
        </>
    );
}
