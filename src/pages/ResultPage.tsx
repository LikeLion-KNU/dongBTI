import TopBar from "@/components/layout/TopBar";
import { Text } from "@/components/typography";

import { ClubDescription, ClubItem, ClubItems, ClubTitle, Line, TitleContainer } from "./ResultPage.styled";
import { css } from "@emotion/react";

export default function ResultPage() {
    return (
        <>
            <TopBar title="결과 보기" />
            <TitleContainer>
                <Text size="s" color="gray">
                    OOO님의 동BTI는...
                </Text>
                <Text size="xl" color="primary" weight="bold">
                    무대를 좋아하는 연주가형
                </Text>
            </TitleContainer>
            <Line />
            <Text
                size="s"
                css={css`
                    margin-bottom: 1rem;
                `}
            >
                OOO님을 위한 추천 동아리
            </Text>

            <ClubItems>
                <ClubItem>
                    <ClubTitle>asdf</ClubTitle>
                    <ClubDescription>asdf</ClubDescription>
                </ClubItem>
            </ClubItems>
        </>
    );
}
