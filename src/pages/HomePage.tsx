import React from "react";
import { useNavigate } from "react-router-dom";

import Footer from "@/components/display/Footer";
import { Button } from "@/components/form/Button";
import DropDown from "@/components/form/DropDown";
import { Input } from "@/components/form/Input";
import { SideBar } from "@/components/navigation/SideBar";
import { Text } from "@/components/typography/Text";

import menuIcon from "@/assets/icons/menu.svg";
import main from "@/assets/images/main.svg";

import {
    HomePageWrapper,
    Header,
    TextContainer,
    InputContainer,
    ButtonContainer,
    Main,
    MenuContainer,
    ImageContainer,
} from "./HomePage.style";
import { useUserInfo } from "@/store/store";

export default function HomePage() {
    const navigate = useNavigate();

    const name = useUserInfo((state) => state.name);
    const setName = useUserInfo((state) => state.setName);
    const setMajor = useUserInfo((state) => state.setMajor);

    const [selectedMajor, setSelectedMajor] = React.useState<string>("");
    const [isOpen, setIsOpen] = React.useState(false);

    const handleSideBar = () => {
        setIsOpen(!isOpen);
    };

    React.useEffect(() => {
        setMajor(selectedMajor);
    }, [selectedMajor, setMajor]);

    return (
        <HomePageWrapper>
            <MenuContainer role="button" onClick={handleSideBar}>
                <img src={menuIcon} width="100%" height="100%" />
            </MenuContainer>
            <SideBar isOpen={isOpen} setIsOpen={setIsOpen} />

            <Header>
                <TextContainer>
                    <Text size="s" color="#707070">
                        어떤 동아리가 좋을까?
                    </Text>
                </TextContainer>

                <Text size="50px" weight="heavy">
                    동BTI Test
                </Text>

                <TextContainer>
                    <Text size="m" color="#707070">
                        나에게 딱! 맞는{" "}
                    </Text>
                    <Text size="m" color="primary" weight="bold">
                        동아리
                    </Text>
                    <Text size="m" color="#707070">
                        를 추천드려용
                    </Text>
                </TextContainer>
            </Header>

            <ImageContainer>
                <img src={main} width="45%" />
            </ImageContainer>

            <Main>
                <InputContainer>
                    <Input
                        variants="primary"
                        width="242px"
                        height="30px"
                        placeholder="이름을 입력하세용"
                        value={name}
                        onChange={(e) => setName(e.currentTarget.value)}
                    />
                    <DropDown
                        color="primary"
                        width="242px"
                        height="30px"
                        selectedMajor={selectedMajor}
                        setSelectedMajor={setSelectedMajor}
                    />
                    <Text size="xs" color="#6E6E6E">
                        개인정보는 외부에 공유되지 않으니 안심하세용
                    </Text>
                </InputContainer>

                <ButtonContainer>
                    <Button
                        variants="primary"
                        width="242px"
                        height="55px"
                        children="테스트 시작하기"
                        onClick={() => navigate("/select")}
                    />
                </ButtonContainer>

                <TextContainer>
                    <Text size="xs">오늘까지 </Text>
                    <Text size="xs" color="primary" weight="bold">
                        39,239명
                    </Text>
                    <Text size="xs">이 참여했어요!</Text>
                </TextContainer>
            </Main>

            <Footer />
        </HomePageWrapper>
    );
}
