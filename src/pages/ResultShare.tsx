import { useEffect, useState } from "react";

import { AppBar } from "@/components/navigation/AppBar";
import { Text } from "@/components/typography/Text";

import BackIcon from "@/assets/back.svg";
import ShareIcon from "@/assets/shareLarge.svg";

import styled from "@emotion/styled/macro";

const Header = styled.div`
    margin-top: 20px;
    margin-left: 30px;

    & > img {
        margin-bottom: 20px;
    }
`;

export default function ResultShare() {
    const [name, setName] = useState<string>("");

    useEffect(() => {
        // 전역 상태에서 이름을 불러와서 setName으로 디스플레이 이름을 변경합니다.
        setName("홍길동");
    }, []);

    return (
        <>
            {/* 나중에 통일된 Header||AppBar로 변경해도 됩니다. */}
            <AppBar>
                <img src={BackIcon} />
                <Text size="m">결과 공유</Text>
            </AppBar>
            <Header>
                <img src={ShareIcon} />
                <Text size="xl">
                    {name}님의 동BTI를
                    <br />
                    공유해보세요
                </Text>
            </Header>
        </>
    );
}
