import { TextProps } from "./Text";
import styled from "@emotion/styled";

export const TextElement = styled.span<TextProps>`
    font-weight: ${(props) => props.weight ?? "normal"};
    
    font-size: ${(props) => {
        switch (props.size) {
            case "xs":
                return "var(--font-size-xs)";
            case "s":
                return "var(--font-size-s)";
            case "m":
                return "var(--font-size-m)";
            case "l":
                return "var(--font-size-l)";
            case "xl":
                return "var(--font-size-xl)";
            case undefined:
                return "var(--font-size-m)";
            default:
                return props.size;
        }
    }};

    font-weight: ${(props) => {
        switch (props.weight) {
            case "light":
                return "var(--font-weight-light)";
            case "regular":
                return "var(--font-weight-regular)";
            case "bold":
                return "var(--font-weight-bold)";
            case "extrabold":
                return "var(--font-weight-extrabold)";
            case "heavy":
                return "var(--font-weight-heavy)";
            default:
                return "var(--font-weight-regular)";
        }
    }};

    color: ${(props) => {
        switch (props.color) {
            case "primary":
                return "var(--color-primary)";
            default:
                return props.color;
        }
    }};
`;
