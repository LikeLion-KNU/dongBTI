import { Button } from "@/components/form/Button";
import TopBar from "@/components/layout/TopBar";
import { Text } from "@/components/typography";

import { useResult } from "@/hooks/useResult";

import aaa from "@/assets/images/dongari.svg";

import clubs from "@/constants/clubs";

import {
    ButtonGroup,
    ClubDescription,
    ClubImage,
    ClubItem,
    ClubItems,
    ClubTitle,
    Line,
    ResultContainer,
    ResultWrapper,
    TitleContainer,
} from "./ResultPage.styled";

export default function ResultPage() {
    const { name, mbti, result, navigate } = useResult();

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
                                        <Text size="xs">{clubData.summary}</Text>
                                        <Text size="xs" weight="bold">
                                            {clubData.description}
                                        </Text>
                                    </ClubDescription>
                                    <ClubImage src={aaa} alt={clubData.name} />
                                </ClubItem>
                            );
                        })}
                    </ClubItems>

                    <Text size="xs" weight="light">
                        <b>3,800명</b>의 참가자 중 <b>38명</b>이 이 유형이 나왔어요!
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
