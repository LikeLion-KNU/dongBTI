import React from "react";
import { useNavigate } from "react-router-dom";

import DropDown from "@/components/form/DropDown";
import { AppBar } from "@/components/navigation/AppBar";
import { Text } from "@/components/typography";

import backIcon from "@/assets/back.svg";

import { TitleContainer, TitleTop, Main, Content, MiddleSection } from "./AnalyticsPage.style";

export default function AnalyticsPage() {
    const [selectedMajor, setSelectedMajor] = React.useState<string>("");
    const navigate = useNavigate();

    const handleGoBack = () => {
        navigate("/");
    };

    return (
        <>
            <img src={backIcon} onClick={handleGoBack} />
            <AppBar children="전체 통계" />

            <TitleContainer>
                <Text size="m">어떤 유형이 가장 많을까요?</Text>
            </TitleContainer>

            <Main>
                <Content>
                    <Text size="m">1위 </Text>
                    <Text size="m">무대를 좋아하는 연주가형</Text>
                </Content>

                <Content>
                    <Text size="m">2위 </Text>
                    <Text size="m">극락왕생을 원하는 부처님형</Text>
                </Content>
                <Content>
                    <Text size="m">3위 </Text>
                    <Text size="m">티칭의 대가 현우진형</Text>
                </Content>
            </Main>
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
            <Main>
                <Content>
                    <Text size="m">1위 </Text>
                    <Text size="m">무대를 좋아하는 연주가형</Text>
                </Content>

                <Content>
                    <Text size="m">2위 </Text>
                    <Text size="m">극락왕생을 원하는 부처님형</Text>
                </Content>
                <Content>
                    <Text size="m">3위 </Text>
                    <Text size="m">티칭의 대가 현우진형</Text>
                </Content>
            </Main>
        </>
    );
}
