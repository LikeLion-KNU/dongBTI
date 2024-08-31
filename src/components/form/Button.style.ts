import { ButtonProps } from "./Button";
import styled from "@emotion/styled";

export const ButtonElement = styled.button<ButtonProps>`
    width: ${(props) => props.width};
    height: ${(props) => props.height};

    border: 1px solid var(--color-primary);
    border-radius: 12px;

    background-color: ${(props) => {
        switch (props.variants) {
            case "primary":
                return "var(--color-primary)";
            case "secondary":
                return "#fff";
        }
    }};

    color: ${(props) => {
        switch (props.variants) {
            case "primary":
                return "#fff";
            case "secondary":
                return "var(--color-primary)";
        }
    }};
`;
