import styled from "@emotion/styled";

export const TitleContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
`;

export const Line = styled.hr`
    width: 100%;
    margin: 1.25rem 0;
    height: 1px;
    border: 1px solid #e0e0e0;
`;

export const ClubItems = styled.div`
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    gap: 1rem;
`;

export const ClubItem = styled.div`
    display: flex;
    gap: 1rem;
    padding: 1rem;
    border-radius: 1rem;
    background-color: #f5f5f5;
`;

export const ClubTitle = styled.div`
    font-size: 1rem;
    font-weight: bold;
`;

export const ClubDescription = styled.div`
    padding: 1rem 0.5rem;
    background-color: #f0f0f0;
    border-radius: 0.5rem;
    font-size: 0.875rem;
    color: #666;
`;
