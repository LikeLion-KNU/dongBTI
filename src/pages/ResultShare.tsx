import { useEffect, useState } from "react";

import { ResultCard, ResultCardDataProps } from "@/components/display/ResultCard";
import { ShareLink } from "@/components/display/ShareLink";
import { Button } from "@/components/form/Button";
import TopBar from "@/components/layout/TopBar";
import { Text } from "@/components/typography/Text";

import BackIcon from "@/assets/back.svg";
import ShareIcon from "@/assets/shareLarge.svg";

import { Content } from "./ResultShare.styled";
import styled from "@emotion/styled";

const Header = styled.div`
    margin-top: 70px;
    margin-left: 10px;

    & > img {
        margin-left: 6px;
        margin-bottom: 20px;
    }

    & > span {
        line-height: 30px;
    }
`;

export default function ResultShare() {
    const link = "https://knu.example.com";

    const [name, setName] = useState<string>("");
    const [dbti_type, setDbtiType] = useState<string>("");
    const [dbti_name, setDbtiName] = useState<string>("");
    const [cardOrder, setCardOrder] = useState<number>(0);
    const [color, setColor] = useState<string>("");

    function downloadCard() {
        alert("Card download");
    }

    useEffect(function initDisplay() {
        // 전역 상태에서 정보를 불러와 디스플레이 요소를 변경합니다.
        setName("홍길동");
        setDbtiType("Type-A");
        setDbtiName("무대를 좋아하는 연주가형");
        setCardOrder(173);
        setColor("blue");
    }, []);

    const props: ResultCardDataProps = {
        name: name,
        dbti_type: dbti_type,
        dbti_name: dbti_name,
        cardOrder: cardOrder,
        color: color,
    };

    return (
        <>
            <TopBar title="결과 공유" icon={<img src={BackIcon} />} />
            {/* 여기부터는 주요 콘텐츠 표시 영역입니다. */}
            <Content>
                <Header>
                    <img src={ShareIcon} />
                    <Text size="xl" weight="bold">
                        {name}님의 동BTI를
                        <br />
                        공유해보세요
                    </Text>
                </Header>
                <div style={{ marginBottom: "50px", display: "flex", flexDirection: "column", gap: "20px" }}>
                    <ResultCard props={props} />
                    <ShareLink link={link} color={color} />
                </div>
                <Button onClick={downloadCard} width="100%" height="60px" variants="primary">
                    <Text size="s" weight="extrabold">
                        이미지 저장
                    </Text>
                </Button>
            </Content>
        </>
    );
}
