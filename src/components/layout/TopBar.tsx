import { TopBarContainer, TopBarWrapper } from "./TopBar.styled";

interface TopBarProps {
    title: string;
}

const TopBar: React.FC<TopBarProps> = ({ title }) => {
    return (
        <TopBarWrapper>
            <TopBarContainer>{title}</TopBarContainer>
        </TopBarWrapper>
    );
};

export default TopBar;
