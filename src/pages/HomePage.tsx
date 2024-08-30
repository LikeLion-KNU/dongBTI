import React from "react";
import { useNavigate } from "react-router-dom";

import { Button } from "@/components/form/Button";
import Dropdown from "@/components/form/Dropdown";
import { Input } from "@/components/form/Input";
import { SideBar } from "@/components/navigation/SideBar";
import { Text } from "@/components/typography/Text";

import menuIcon from "@/assets/icons/menu.svg";
import dongari from "@/assets/images/dongari.png";
import likelion from "@/assets/images/likelion.png";

import {
    HomePageWrapper,
    Header,
    TextContainer,
    InputContainer,
    ButtonContainer,
    Main,
    Footer,
    MiddleSection,
    MenuContainer,
} from "./HomePage.style";

export default function HomePage() {
    const navigate = useNavigate();

    const name = React.useRef<HTMLInputElement>(null);
    const [selectedMajor, setSelectedMajor] = React.useState<string>("");
    const [isOpen, setIsOpen] = React.useState(false);

    const handleSideBar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <HomePageWrapper>
            <MenuContainer role="button" onClick={handleSideBar}>
                <img src={menuIcon} />
            </MenuContainer>
            <SideBar isOpen={isOpen} setIsOpen={setIsOpen} />

            <Header>
                <img src={dongari} alt="동BTI" width="75px" height="75px"></img>
                <Text size="60px" weight="bold">
                    동BTI
                </Text>

                <TextContainer>
                    <Text size="m">나에게 딱! 맞는 </Text>
                    <Text size="m" color="primary" weight="bold">
                        동아리
                    </Text>
                    <Text size="m">를 추천드려용</Text>
                </TextContainer>
            </Header>

            <MiddleSection />

            <Main>
                <InputContainer>
                    <Input variants="primary" width="242px" height="30px" placeholder="이름을 입력하세용" ref={name} />
                    <Dropdown
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

            <Footer>
                <img src={likelion} alt="멋쟁이사자처럼" width="20px" height="20px"></img>
                <Text size="xs">X</Text>
                <img src={dongari} alt="총동아리연합회 미르" width="20px" height="20px"></img>
            </Footer>
        </HomePageWrapper>
    );
}
