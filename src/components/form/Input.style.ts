import { InputProps } from "./Input";
import styled from "@emotion/styled";

export const InputElement = styled.input<InputProps>`
    transition: border-color 0.25s ease-in-out;

    font-size: 13px;
    font-family: "NanumSquareNeo";
    width: ${(props) => props.width};
    height: ${(props) => props.height};

    border-radius: 12px;
    outline: 1px solid transparent;
    border: 1px solid transparent;
    padding: 10px 16px;

    background-color: ${(props) => {
        switch (props.variants) {
            case "primary":
                return "#EDF1F7";
            case "secondary":
                return "#fff";
        }
    }};

    &:focus {
        border: 1px solid var(--color-primary);
    }
`;
