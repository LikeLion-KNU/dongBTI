import { AppBarProps } from "./AppBar";
import styled from "@emotion/styled";

export const AppBarElement = styled.span<AppBarProps>`
    position: relative;

    width: 100%;
    height: 60px;

    display: flex;
    justify-content: center;
    align-items: center;

    box-sizing: border-box;

    border-bottom: 2px solid #0000001f;

    & > span {
        font-weight: 800;
    }

    & > img {
        position: absolute;
        left: 15px;
    }
`;
