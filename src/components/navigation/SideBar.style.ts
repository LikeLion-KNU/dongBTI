import styled from "@emotion/styled";

export const SideBarWrapper = styled.div`
    z-index: 5;  
    padding: 20px;  
    border-radius: 0 0 15px 15px;
    height: auto;
    max-height: 100%;
    overflow-y: auto;
    width:100%;
    top: -80%;
    backdrop-filter: blur(5px);
    position: fixed;  
    align-items: flex-end;
    transition: 0.5s ease; 
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    &.open {    
        top: 0;    
        transition: 0.5s ease;  
    }
    img {
        display: block;
        margin-left: auto; /* Align the image to the right */
        cursor: pointer; /* Add a pointer cursor for better UX */
    }
`

export const Menu = styled.li`  
    margin: 20px 8px;
    list-style-type: none;
    cursor: pointer;
`;