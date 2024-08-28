import React from 'react';
import { Text } from "@/components/typography/Text";

import {SideBar} from '@/components/navigation/SideBar';
import { HomePageWrapper, Header, TextContainer, InputContainer, ButtonContainer, Main, Footer, MiddleSection, MenuContainer} from "./HomePage.style";

import menuIcon from '@/assets/icons/menu.svg';
import dongari from '@/assets/images/dongari.png';
import likelion from '@/assets/images/likelion.png';

import {Input} from "@/components/form/Input";
import {Button} from "@/components/form/Button";


// import { useNavigate } from "react-router-dom";

export default function HomePage() {
    const name = React.useRef<HTMLInputElement>(null);
    const major = React.useRef<HTMLInputElement>(null);

    const [isOpen, setIsOpen] = React.useState(false);
    const handleSideBar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <HomePageWrapper>
            <MenuContainer role="button" onClick={handleSideBar}>
                <img src = {menuIcon} />
            </MenuContainer>
            <SideBar isOpen = {isOpen} setIsOpen = {setIsOpen} />

            <Header>
                <img src = {dongari} alt = "동BTI" width="75px" height="75px"></img>
                <Text size = '60px' weight='bold'>동BTI</Text>

                <TextContainer>
                    <Text size="m">나에게 딱! 맞는 </Text>
                    <Text size="m" color="primary" weight="bold">동아리</Text>
                    <Text size="m">를 추천드려용</Text>
                </TextContainer>
            </Header>

            <MiddleSection />

            <Main>
                <InputContainer>
                    <Input variants = "primary" width="242px" height = "30px" placeholder='이름을 입력하세용' ref = {name}/>
                    <Input variants = "primary" width="242px" height = "30px" placeholder='학과를 입력하세용' ref = {major} />
                    <Text size = "xs" color = '#6E6E6E'>개인정보는 외부에 공유되지 않으니 안심하세용</Text>
                </InputContainer>

                <ButtonContainer>
                    <Button variants = "primary" width="242px" height="55px" children = "테스트 시작하기" />
                </ButtonContainer>

                <TextContainer>
                    <Text size = "xs">오늘까지 </Text>
                    <Text size = "xs" color="primary" weight="bold">39,239명</Text>
                    <Text size = "xs">이 참여했어요!</Text>
                </TextContainer> 
            </Main>

            <Footer>
                <img src = {likelion} alt = "멋쟁이사자처럼" width="20px" height="20px"></img>
                <Text size = "xs">X</Text>
                <img src = {dongari} alt = "총동아리연합회 미르" width="20px" height="20px"></img>
            </Footer>
        </HomePageWrapper>
    );
}
