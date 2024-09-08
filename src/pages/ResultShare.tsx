import React from "react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import html2canvas from "html2canvas";

import { ResultCard, ResultCardDataProps } from "@/components/display/ResultCard";
import { ShareLink } from "@/components/display/ShareLink";
import { Button } from "@/components/form/Button";
import TopBar from "@/components/layout/TopBar";
import { Text } from "@/components/typography/Text";

import BackIcon from "@/assets/back.svg";
import ShareIcon from "@/assets/share.svg";

import { Content, ResultCardDiv } from "./ResultShare.styled";
import { useUserInfo } from "@/store/store";
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

export default function ResultShare({ type = "체육형 스타일", desc = "신체 활동을 좋아하는 타입" }) {
    const navigate = useNavigate();
    const link = "https://www.dongbti.com";

    const { name, setName } = useUserInfo();

    const [cardOrder, setCardOrder] = useState<number>(0);
    const [color, setColor] = useState<string>("");
    const [emoji, setEmoji] = useState<string>("");

    const cardRef = React.useRef(null);

    const cardDownload = () => {
        if (cardRef.current) {
            html2canvas(cardRef.current).then((canvas) => {
                const link = document.createElement("a");
                link.href = canvas.toDataURL("image/png");
                // 혹시 모를 상황에 대비하여 모든 공백을 _로 수정합니다.
                // js/ts는 stirng.replaceAll이 없기 때문에 모든 특정 문자를 바꾸기 위해 정규식으로 사용해야합니다.
                link.download = `${name}-${desc.replace(/\s+/g, "_")}.png`;
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
                // 전역 상태에서 정보를 불러와 디스플레이 요소를 변경합니다.
                setEmoji("sports");
                setColor("#559de0");
                setName("장기원"); // 임시 사용 코드
                setCardOrder(res.total_count); // n번째 발급 표시
            });
    }, []);

    const props: ResultCardDataProps = {
        name: name,
        dbti_type: type,
        dbti_name: desc,
        cardOrder: cardOrder,
        color: color,
        emoji: emoji,
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
                    <ShareLink link={link} color={color} />
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
