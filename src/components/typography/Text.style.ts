import { TextProps } from "./Text";
import styled from "@emotion/styled";

export const TextElement = styled.span<TextProps>`
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
            case "l":
                return "var(--font-weight-l)";
            case "r":
                return "var(--font-weight-r)";
            case "b":
                return "var(--font-weight-b)";
            case "eb":
                return "var(--font-weight-eb)";
            case "h":
                return "var(--font-weight-h)";
            case undefined:
                return "var(--font-weight-r)";
            default:
                return props.weight;
        }
    }};

    color: ${(props) => {
        switch (props.color) {
            case "primary":
                return "var(--color-primary)";
        }
    }};
`;
