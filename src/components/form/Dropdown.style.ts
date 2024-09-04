import styled from "@emotion/styled";
import { Dropdown } from "primereact/dropdown";

interface DropDownProps {
    color: string;
    width: string;
    height: string;
}

export const DropDownWrapper = styled.div<DropDownProps>`
    display: flex;
    border-radius: 12px;
    justify-content: center;

    background-color: ${(props) => {
        switch (props.color) {
            case "primary":
                return "#ECECEC";
            case "secondary":
                return "#fff";
            default:
                return props.color;
        }
    }};

    height: ${(props) => props.height};
    width: ${(props) => props.width};
`;

export const DropDownContainer = styled(Dropdown)`
    width: 100%;
    font-size: 15px;
    justify-content: center;
    align-items: center;
    padding: 10px;
`;

export const LabelContainer = styled.span`
    display: inline-block;
    width: 100%;
    color: #333;
    padding: 10px;

    background-color: ${(props) => {
        switch (props.color) {
            case "primary":
                return "#ECECEC";
            case "secondary":
                return "#fff";
            default:
                return props.color;
        }
    }};

    &:hover {
        color: ${(props) => {
            switch (props.color) {
                case "primary":
                case "secondary":
                    return "#37cdcd";
                default:
                    return props.color;
            }
        }};
    }
`;
