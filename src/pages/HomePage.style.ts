import styled from "@emotion/styled";

export const HomePageWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    width: 100%;
    height: 100vh;
`;

export const Header = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;

    margin-top: 50px;
`;

export const TextContainer = styled.div`
    margin: 10px;
`;

export const MiddleSection = styled.div`
    flex-grow: 0.5;
`;

export const Main = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export const InputContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 15px;
`;

export const ButtonContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    margin-top: 20%;
`;

export const MenuContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    position: absolute;
    top: 10px;
    right: 10px;
`;

export const ImageContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    width: auto;
    height: 100%;
    max-height: 566px;
    box-sizing: border-box;
    margin-top: 20px;
    margin-bottom: 20px;

    @media (max-height: 935px) {
        max-height: 360px;
        width: 100%;
        margin-top: 30px;
        margin-bottom: 60px;
    }

    @media (max-height: 896px) {
        max-height: 340px;
        width: 100%;
        margin-top: 0px;
        margin-bottom: 0px;
    }

    @media (max-height: 667px) {
        max-height: 150px;
        width: 100%;
        margin-top: 0px;
        margin-bottom: 0px;
    }
`;
