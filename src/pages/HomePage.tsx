import { Text } from "@/components/typography/Text";

import { HomePageWrapper } from "./HomePage.style";

import { useNavigate } from "react-router-dom";
import { Button } from "@/components/form/Button";

export default function HomePage() {

    const navigate = useNavigate();
    const goToLoadingPage = () => {
        navigate("/loading");
    };

    return (
        <HomePageWrapper>
            <Text size="xl">XL</Text>
            <Text size="l">L</Text>
            <Text size="m">M</Text>
            <Text size="s">S</Text>
            <Text size="xs">XS</Text>
            <Button width="150px" height="50px" variants="primary" onClick={goToLoadingPage}>
                로딩페이지 테스트
            </Button>
        </HomePageWrapper>
    );
}
