import { ReactElement } from "react";

import { Text } from "../typography";
import { TopBarContainer, TopBarWrapper } from "./TopBar.styled";

interface TopBarProps {
    title: string;
    icon?: ReactElement;
}

const TopBar: React.FC<TopBarProps> = ({ title, icon }) => {
    return (
        <TopBarWrapper>
            <TopBarContainer>
                {icon}
                <Text size="m" weight="extrabold">
                    {title}
                </Text>
            </TopBarContainer>
        </TopBarWrapper>
    );
};

export default TopBar;
