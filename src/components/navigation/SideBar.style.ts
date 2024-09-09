import styled from "@emotion/styled";

export const SideBarWrapper = styled.div`
    z-index: 5;
    padding: 20px;
    border-radius: 0 0 15px 15px;
    height: auto;
    max-height: 100%;
    overflow-y: auto;
    width: 100%;
    top: -80%;
    backdrop-filter: blur(10px);
    background-color: rgba(255, 255, 255, 0.7);
    position: fixed;
    align-items: flex-end;
    transition: 0.5s ease;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);

    &.open {
        top: 0;
        transition: 0.5s ease;
    }
    img {
        display: block;
        margin-left: auto;
        cursor: pointer;
    }
`;

export const Menu = styled.li`
    margin: 20px 8px;
    list-style-type: none;
    cursor: pointer;

    &:hover {
        color: #37cdcd;
    }
    &.active {
        color: #37cdcd;
    }
`;
