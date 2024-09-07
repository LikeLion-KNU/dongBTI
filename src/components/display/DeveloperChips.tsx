import styled from "@emotion/styled";

// Styled components for each chip
const ChipContainer = styled.div`
    display: flex;
    gap: 8px;
`;

// 공통 chip 레이아웃
const Chip = styled.div`
    padding: 6px 12px;
    border-radius: 10px;
    font-size: 11px;
    font-weight: bold;
    display: inline-block;
`;

const CSEChip = styled(Chip)`
    background-color: var(--color-primary);
    color: #ffffff;
`;

const LikeLionChip = styled(Chip)`
    color: var(--color-likelion);
    border: 1px solid var(--color-likelion);
`;

const PositionChip = styled(Chip)`
    background-color: #ffffff;
    color: #000000;
    border: 1px solid #000000;
`;

interface DevChipProps extends React.ComponentProps<"div"> {
    cse_year: number;
    is_manager: boolean;
}

export const DeveloperChips: React.FC<DevChipProps> = ({ cse_year, is_manager }) => {
    return (
        <ChipContainer>
            <CSEChip>컴퓨터학부 {cse_year}학번</CSEChip>
            <LikeLionChip>멋사 12기 {is_manager ? "대표" : ""}</LikeLionChip>
            <PositionChip>FE/{is_manager ? "PM" : "Design"}</PositionChip>
        </ChipContainer>
    );
};
