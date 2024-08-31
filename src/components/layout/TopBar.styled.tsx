import styled from "@emotion/styled";

export const TopBarWrapper = styled.div`
    height: 60px;
`;

export const TopBarContainer = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    display: flex;
    height: 56px;

    justify-content: center;
    align-items: center;

    border-bottom: 1px solid #e0e0e0;
    font-weight: 800;
    background-color: var(--color-background);
`;
