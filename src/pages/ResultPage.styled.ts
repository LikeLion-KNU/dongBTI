import styled from "@emotion/styled";

export const ResultWrapper = styled.div`
    display: flex;
    flex-direction: column;
    height: calc(100% - 60px);

    padding-top: 60px;
`;

export const ResultContainer = styled.div`
    flex-grow: 1;
`;

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
    display: flex;
    flex-direction: column;
    margin: 1.5rem 0;
    gap: 1rem;
`;

export const ClubItem = styled.div`
    position: relative;
    border-radius: 1rem;
    background-color: white;
    padding: 0.75rem 0 0.75rem 3.2rem;
    margin-left: 1.6rem;
`;

export const ClubImage = styled.img`
    position: absolute;
    top: 50%;
    left: -32px;
    transform: translateY(-50%);
    width: 64px;
    height: 64px;
    border-radius: 50%;
`;

export const ClubTitle = styled.div`
    font-size: 18px;
    color: var(--color-primary);
    font-weight: 900;
    padding-bottom: 0.5rem;
`;

export const ClubDescription = styled.div`
    display: flex;
    flex-direction: column;
    line-height: 1.35;
`;

export const ButtonGroup = styled.div`
    display: flex;
    gap: 0.5rem;
    margin-top: 1.5rem;
`;
