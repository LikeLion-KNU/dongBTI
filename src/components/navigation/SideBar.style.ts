import styled from "@emotion/styled";

export const SideBarWrapper = styled.div`
    z-index: 5;  
    padding: 20px;  
    border-radius: 0 0 15px 15px;
    height: 20%;  
    width:70%;
    top: -80%;
    background-color: rgba(255, 255, 255, 0.8);
    backdrop-filter: blur(5px);
    position: fixed;  
    align-items: flex-end;
    transition: 0.5s ease; 
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    &.open {    
        top: 0;    
        transition: 0.5s ease;  
    }
`

export const Menu = styled.li`  
    margin: 20px 8px;
    list-style-type: none;
    cursor: pointer;
`;