import styled from "@emotion/styled";

export const SideBarWrapper = styled.div`
    z-index: 5;
    padding: 20px;
    border-radius: 0 0 15px 15px;
    height: auto;
    max-height: 100%;
    overflow-y: auto;
    width: 100%;
    max-width: 800px;
    top: -80%;
    backdrop-filter: blur(10px);
    background-color: #ffffff;
    position: fixed;
    align-items: flex-end;
    transition: 0.5s ease;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.08);
    opacity: 0;

    &.open {
        top: 0;
        opacity: 1;
        transition: 0.5s ease;
    }
    img.close {
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

export const Backdrop = styled.div`
    transition: backdrop-filter 0.4s ease-in-out;

    position: fixed;
    top: -20px;
    left: -20px;
    right: -20px;
    bottom: -20px;
    background-color: #ffffff10;
    backdrop-filter: blur(0px);
    pointer-events: none;

    z-index: 1;

    &.open {
        backdrop-filter: blur(10px);
    }
`;
