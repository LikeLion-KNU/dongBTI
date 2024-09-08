import styled from "@emotion/styled";

interface SelectPageWrapperProps {
    variants?: "field" | "choice";
}

export const SelectPageWrapper = styled.div<SelectPageWrapperProps>`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    margin-top: 15vh;
    gap: 7vh;
    overflow: hidden;

    margin-top: ${(props) => {
        switch (props.variants) {
            case "field":
                return "3vh";
            case "choice":
                return "15vh";
        }
    }};
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
