import { InputProps } from "./Input";
import styled from "@emotion/styled";

export const InputElement = styled.input<InputProps>`
    font-size: 15px;
    font-family: "NanumSquareNeo";
    width: ${(props) => props.width};
    height: ${(props) => props.height};

    border-radius: 12px;
    border: none;
    padding: 10px;

    background-color: ${(props) => {
        switch (props.variants) {
            case "primary":
                return "#ECECEC";
            case "secondary":
                return "#fff";
        }
    }};
`;
