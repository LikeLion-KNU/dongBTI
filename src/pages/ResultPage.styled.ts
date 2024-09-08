import styled from "@emotion/styled";

export const ResultWrapper = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;

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
    padding: 0.75rem 0.25rem 0.75rem 3.2rem;
    margin-left: 1.6rem;
    word-break: keep-all;
`;

export const ClubImageWrapper = styled.div`
    position: absolute;
    top: 50%;
    left: -32px;
    transform: translateY(-50%);

    display: flex;
    justify-content: center;
    align-items: center;

    width: 64px;
    height: 64px;
    border-radius: 50%;
    overflow: hidden;
    background-color: white;

    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.09);
`;

export const ClubImage = styled.img`
    width: 64px;
    height: auto;
    object-fit: cover;
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
    line-height: 1.4;
`;

export const ButtonGroup = styled.div`
    display: flex;
    gap: 0.5rem;
    margin-top: 1.5rem;
`;
