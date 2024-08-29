import { ButtonProps } from "./Button";
import styled from "@emotion/styled";

export const ButtonElement = styled.button<ButtonProps>`
    font-family: NanumSquareNeo;

    width: ${(props) => props.width};
    height: ${(props) => props.height};

    border: 1px solid #37cdcd;
    border-radius: 12px;

    background-color: ${(props) => {
        switch (props.variants) {
            case "primary":
                return "#37cdcd";
            case "secondary":
                return "#fff";
        }
    }};

    color: ${(props) => {
        switch (props.variants) {
            case "primary":
                return "#fff";
            case "secondary":
                return "#37cdcd";
        }
    }};
`;
