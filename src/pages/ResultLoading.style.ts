import styled from "@emotion/styled";

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
    0%, 100% {
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
  min-height: 1.5em; /* 타이핑 텍스트 영역의 최소 높이 설정 */

  &::after {
    content: "";
    display: inline-block;
    width: 2px;
    height: 1em;
    background-color: black;
    position: absolute;
    right: -8px; /* 오른쪽으로 약간 이동 */
    bottom: 5px; /* 아래쪽으로 약간 이동 */
    animation: ${({ isCursorBlinking }) => (isCursorBlinking ? 'blink 0.7s steps(1) infinite' : 'none')}; /* 조건에 따라 깜빡임 */
  }
  
  @keyframes blink {
    0%, 50% {
      opacity: 1;
    }
    51%, 100% {
      opacity: 0;
    }
  }
`;
