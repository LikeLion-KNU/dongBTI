import styled from "@emotion/styled";

export const HomePageWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center; 
    width: 100%;
    height: 100vh;
`;

export const Header = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    margin-top:50px;
`;

export const TextContainer = styled.div`
    margin : 10px;
`

export const MiddleSection = styled.div`
    flex-grow: 0.8;
`

export const Main = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

export const InputContainer = styled.div`
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap:15px;
`

export const ButtonContainer = styled.div`
    display:flex;
    justify-content: center;
    align-items: center;

    margin-top:50px;
`

export const Footer = styled.div`
    display:flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    margin:20px;
`

export const MenuContainer = styled.div`
    display:flex;
    justify-content: flex-end;
    align-items: flex-end;
`