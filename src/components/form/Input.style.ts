import { InputProps } from "./Input";
import styled from "@emotion/styled";

export const InputElement = styled.input<InputProps>`
    width: ${(props) => props.width};
    height: ${(props) => props.height};

    border-radius: 12px;
    border: none;
    
    background-color: ${(props) => {
        switch (props.variants) {
            case "primary":
                return "#ECECEC";
            case "secondary":
                return "#fff";
        }
    }};
`;
