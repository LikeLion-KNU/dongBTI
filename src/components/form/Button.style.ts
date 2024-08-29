import { ButtonProps } from "./Button";
import styled from "@emotion/styled";

export const ButtonElement = styled.button<ButtonProps>`
    width: ${(props) => props.width};
    height: ${(props) => props.height};

    border-radius: 12px;

    border: ${(props) => {
        switch (props.variants) {
            case "primary" || "secondary":
                return "1px solid #37cdcd";

            case "select":
                return "1px solid #ECECEC";
        }
    }};
    // border: 1px solid #37cdcd; 혹시 몰라서 주석처리

    background-color: ${(props) => {
        switch (props.variants) {
            case "primary":
                return "#37cdcd";
            case "secondary":
                return "#fff";
            case "select":
                return "#ECECEC";
        }
    }};

    color: ${(props) => {
        switch (props.variants) {
            case "primary":
                return "#fff";
            case "secondary":
                return "#37cdcd";
            case "select":
                return "#707070";
        }
    }};
`;
