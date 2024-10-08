import { Button } from "@/components/form/Button";
import TopBar from "@/components/layout/TopBar";
import { Text } from "@/components/typography";

import { useRatioResult } from "@/hooks/useRatioResult";
import { useResult } from "@/hooks/useResult";

import clubs from "@/constants/clubs";

import {
    ButtonGroup,
    ClubDescription,
    ClubImage,
    ClubImageWrapper,
    ClubItem,
    ClubItems,
    ClubTitle,
    Line,
    ResultContainer,
    ResultWrapper,
    TitleContainer,
} from "./ResultPage.styled";
import { css } from "@emotion/react";

export default function ResultPage() {
    const { name, mbti, result, navigate } = useResult();

    const { isPending, totalCount, mbtiCount } = useRatioResult();

    return (
        <>
            <TopBar title="결과 보기" />
            <ResultWrapper>
                <ResultContainer>
                    <TitleContainer>
                        <Text size="s" color="gray">
                            {name}님의 동BTI는...
                        </Text>
                        <Text size="l" color="primary" weight="bold">
                            {result.typeName}
                        </Text>
                    </TitleContainer>
                    <Line />
                    <Text size="m" weight="bold">
                        {name}님을 위한 추천 동아리
                    </Text>

                    <ClubItems>
                        {result.clubs.map((club) => {
                            let clubData = clubs.find((c) => c.name === club);

                            if (!clubData) {
                                return null;
                            }

                            return (
                                <ClubItem>
                                    <ClubTitle>{clubData.name}</ClubTitle>
                                    <ClubDescription>
                                        <Text
                                            size="xs"
                                            css={css`
                                                padding-bottom: 0.25rem;
                                            `}
                                        >
                                            {clubData.summary}
                                        </Text>
                                        <Text size="xs" weight="bold">
                                            {clubData.description}
                                        </Text>
                                    </ClubDescription>
                                    <ClubImageWrapper>
                                        <ClubImage
                                            src={new URL(`../assets/clubs/${clubData.name}.jpg`, import.meta.url).href}
                                            alt={clubData.name}
                                        />
                                    </ClubImageWrapper>
                                </ClubItem>
                            );
                        })}
                    </ClubItems>

                    <Text size="xs" weight="light">
                        {!isPending && (
                            <>
                                <b>{totalCount}명</b>의 참가자 중 <b>{mbtiCount}명</b>이 이 유형이 나왔어요!
                            </>
                        )}
                    </Text>
                </ResultContainer>

                <ButtonGroup>
                    <Button width="100%" height="50px" variants="secondary" onClick={() => navigate("/")}>
                        <Text size="s" weight="extrabold">
                            다시 검사하기
                        </Text>
                    </Button>
                    <Button
                        width="100%"
                        height="50px"
                        variants="primary"
                        onClick={() => navigate(`/share?type=${mbti}`)}
                    >
                        <Text size="s" weight="extrabold">
                            공유하기
                        </Text>
                    </Button>
                </ButtonGroup>
            </ResultWrapper>
        </>
    );
}
