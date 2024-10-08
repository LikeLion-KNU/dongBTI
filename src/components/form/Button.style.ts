import { ButtonProps } from "./Button";
import styled from "@emotion/styled";

export const ButtonElement = styled.button<ButtonProps>`
    font-family: NanumSquareNeo;

    width: ${(props) => props.width};
    max-width: 800px;
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
                return "var(--color-primary)";
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
                return "var(--color-primary)";
            case "select":
                return "#707070";
        }
    }};
`;
