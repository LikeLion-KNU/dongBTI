import { Text } from "@/components/typography/Text";

import likelion from "@/assets/images/likelion.svg";
import mir from "@/assets/images/mir.svg";

import { FooterWrapper } from "./Footer.style";

export default function Footer() {
    return (
        <FooterWrapper>
            <img src={likelion} alt="멋쟁이사자처럼" width="20px" height="20px"></img>
            <Text size="xs">X</Text>
            <img src={mir} alt="총동아리연합회 미르" width="20px" height="20px"></img>
        </FooterWrapper>
    );
}
