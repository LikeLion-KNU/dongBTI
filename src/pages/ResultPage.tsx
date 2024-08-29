import TopBar from "@/components/layout/TopBar";
import { Text } from "@/components/typography";

import { Line, TitleContainer } from "./ResultPage.styled";

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
        </>
    );
}
