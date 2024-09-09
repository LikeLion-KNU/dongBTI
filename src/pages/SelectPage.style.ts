import { TransitionGroup } from "react-transition-group";

import styled from "@emotion/styled";

interface SelectPageWrapperProps {
    variants?: "field" | "choice";
}

export const TransitionWrapper = styled(TransitionGroup)<SelectPageWrapperProps>`
    position: relative;
    width: 100%;
    height: 100%;
    overflow: hidden;
`;

export const SelectPageWrapper = styled.div<SelectPageWrapperProps>`
    position: absolute;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 7vh;
    overflow: hidden;
`;

interface ButtonWrapperProps {
    variants?: "field" | "choice";
}

export const ButtonWrapper = styled.div<ButtonWrapperProps>`
    display: flex;
    flex-direction: column;
    align-items: center;

    width: 100%;

    gap: ${(props) => {
        switch (props.variants) {
            case "field":
                return "2.5vh";
            case "choice":
                return "3vh";
        }
    }};
`;
