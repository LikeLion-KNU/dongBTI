import styled from "@emotion/styled";

export const DongariImage = styled("img")`
    width: 15vh;
    aspect-ratio: "1/1";
    margin-bottom: 55px;
`;

export const LoadingContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
`;

export const ZoomAnimation = styled.div`
    font-size: 50px;
    animation: zoom 1s infinite;
    @keyframes zoom {
        0%,
        100% {
            transform: scale(1);
        }
        50% {
            transform: scale(1.2);
        }
    }
`;

export const TypingText = styled.div<{ isCursorBlinking: boolean }>`
    font-size: 24px;
    margin-bottom: 20px;
    display: inline-flex;
    align-items: center;
    position: relative;
    min-height: 1.5em;

    &::after {
        content: "";
        display: inline-block;
        width: 2px;
        height: 1em;
        background-color: black;
        position: absolute;
        right: -8px;
        bottom: 7px;
        animation: ${({ isCursorBlinking }) => (isCursorBlinking ? "blink 0.7s steps(1) infinite" : "none")};
    }

    @keyframes blink {
        0%,
        50% {
            opacity: 1;
        }
        51%,
        100% {
            opacity: 0;
        }
    }
`;
