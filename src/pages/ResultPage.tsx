import { Button } from "@/components/form/Button";
import TopBar from "@/components/layout/TopBar";
import { Text } from "@/components/typography";

import aaa from "@/assets/images/dongari.svg";

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
    return (
        <>
            <TopBar title="결과 보기" />
            <ResultWrapper>
                <ResultContainer>
                    <TitleContainer>
                        <Text size="s" color="gray">
                            OOO님의 동BTI는...
                        </Text>
                        <Text size="l" color="primary" weight="bold">
                            유니크한 체육을 즐기는 스포츠맨형
                        </Text>
                    </TitleContainer>
                    <Line />
                    <Text size="m" weight="bold">
                        OOO님을 위한 추천 동아리
                    </Text>

                    <ClubItems>
                        <ClubItem>
                            <ClubTitle>수중탐사대</ClubTitle>
                            <ClubDescription>
                                <Text size="xs">더 넓고, 더 깊은 바다로!</Text>
                                <Text size="xs" weight="bold">
                                    경북대학교 유일무이 스킨스쿠버 동아리
                                </Text>
                            </ClubDescription>
                            <ClubImage src={aaa} alt="수중탐사대" />
                        </ClubItem>
                        <ClubItem>
                            <ClubTitle>싸울아비</ClubTitle>
                            <ClubDescription>
                                <Text size="xs">조선시대 무기를 직접 휘두르는</Text>
                                <Text size="xs" weight="bold">
                                    경북대학교 유일무이 병장기 동아리
                                </Text>
                            </ClubDescription>
                            <ClubImage src={aaa} alt="수중탐사대" />
                        </ClubItem>
                        <ClubItem>
                            <ClubTitle>인질범</ClubTitle>
                            <ClubDescription>
                                <Text size="xs">한 번 타면 영원히 질주해요. 앉을 시간이 없! 어! 요!</Text>
                                <Text size="xs" weight="bold">
                                    인라인, 보드 동아리
                                </Text>
                            </ClubDescription>
                            <ClubImage src={aaa} alt="수중탐사대" />
                        </ClubItem>
                    </ClubItems>

                    <Text size="xs" weight="light">
                        <b>3,800명</b>의 참가자 중 <b>38명</b>이 이 유형이 나왔어요!
                    </Text>
                </ResultContainer>

                <ButtonGroup>
                    <Button width="100%" height="50px" variants="secondary">
                        <Text size="s" weight="extrabold">
                            다시 검사하기
                        </Text>
                    </Button>
                    <Button width="100%" height="50px" variants="primary">
                        <Text size="s" weight="extrabold">
                            공유하기
                        </Text>
                    </Button>
                </ButtonGroup>
            </ResultWrapper>
        </>
    );
}
