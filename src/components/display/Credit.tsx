import { Text } from "@/components/typography";

import LikeLionIcon from "@/assets/images/new/likelion.svg";
import MirIcon from "@/assets/images/new/mir.svg";

import styled from "@emotion/styled";

const Title = styled(Text)`
    display: block;
    color: var(--color-primary);
    width: 100%;
    text-align: center;

    margin-bottom: 10px;
`;

const LogoBox = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 4px;
`;

export const Credit = () => {
    return (
        <>
            <Title size="xs" weight="extrabold">
                Dong-BTI By. MIR & KNU-Like-Lion
            </Title>
            <LogoBox>
                <img src={MirIcon} />
                <Text size="xs" weight="bold">
                    X
                </Text>
                <img src={LikeLionIcon} />
            </LogoBox>
        </>
    );
};
