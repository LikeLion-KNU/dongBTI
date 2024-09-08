import React from "react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import html2canvas from "html2canvas";

import { ResultCard, ResultCardDataProps } from "@/components/display/ResultCard";
import { ShareLink } from "@/components/display/ShareLink";
import { Button } from "@/components/form/Button";
import TopBar from "@/components/layout/TopBar";
import { Text } from "@/components/typography/Text";

import { useResult } from "@/hooks/useResult";

import BackIcon from "@/assets/back.svg";
import ShareIcon from "@/assets/share.svg";

import { Content, ResultCardDiv } from "./ResultShare.styled";
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
    const { name, result } = useResult();
    const navigate = useNavigate();
    const link = "https://www.dongbti.com";

    const [cardOrder, setCardOrder] = useState<number>(0);

    const cardRef = React.useRef(null);

    const cardDownload = () => {
        if (cardRef.current) {
            html2canvas(cardRef.current).then((canvas) => {
                const link = document.createElement("a");
                link.href = canvas.toDataURL("image/png");
                // 혹시 모를 상황에 대비하여 모든 공백을 _로 수정합니다.
                // js/ts는 stirng.replaceAll이 없기 때문에 모든 특정 문자를 바꾸기 위해 정규식으로 사용해야합니다.
                link.download = `${name}-${result.typeName}-${result.department}.png`;
                link.click();
            });
        }
    };

    useEffect(function initDisplay() {
        fetch("https://api.dongbti.com/stats/total")
            .then((response) => {
                return response.json();
            })
            .then((res) => {
                setCardOrder(res.total_count); // n번째 발급 표시
            });
    }, []);

    const props: ResultCardDataProps = {
        name: name,
        dbti_type: `${result.department.charAt(0).toUpperCase() + result.department.slice(1)} 타입`,
        dbti_name: result.typeName,
        cardOrder: cardOrder,
        color: `var(--card-color-${result.department})`,
        emoji: result.department,
    };

    return (
        <>
            <TopBar title="결과 공유" icon={<img src={BackIcon} onClick={() => navigate(-1)} />} />
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
                {/* ResultCardDiv 기준으로 이미지가 다운로드됩니다. */}
                <ResultCardDiv ref={cardRef}>
                    <ResultCard props={props} />
                    <ShareLink link={link} color={`var(--card-color-${result.department})`} />
                </ResultCardDiv>
                <Button onClick={cardDownload} width="100%" height="60px" variants="primary">
                    <Text size="s" weight="extrabold">
                        이미지 저장
                    </Text>
                </Button>
            </Content>
        </>
    );
}
