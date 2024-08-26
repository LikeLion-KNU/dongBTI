import styled from "@emotion/styled";

export interface TextProps extends React.ComponentProps<"span"> {
    size: "xs" | "s" | "m" | "l" | "xl";
}

export const Text = styled.span<TextProps>`
    font-size: ${(props) => {
        switch (props.size) {
            case "xs":
                return "13px";
            case "s":
                return "16px";
            case "m":
                return "18px";
            case "l":
                return "22px";
            case "xl":
                return "24px";
            case undefined:
                return "18px";
            default:
                return props.size;
        }
    }};
`;
