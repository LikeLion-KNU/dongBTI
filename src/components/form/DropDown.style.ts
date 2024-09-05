import { DropDownProps } from "./DropDown";
import styled from "@emotion/styled";
import { Dropdown } from "primereact/dropdown";

interface LabelProps {
    color: string;
}

const getBackgroundColor = (color: string) => {
    switch (color) {
        case "primary":
            return "#ECECEC";
        case "secondary":
            return "#fff";
        default:
            return color;
    }
};

export const DropDownWrapper = styled.div<DropDownProps>`
    display: flex;
    border-radius: 12px;
    justify-content: center;

    background-color: ${(props) => getBackgroundColor(props.color)};

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

export const LabelContainer = styled.span<LabelProps>`
    display: inline-block;
    width: 100%;
    color: #333;
    padding: 10px;

    background-color: ${(props) => getBackgroundColor(props.color)};

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
