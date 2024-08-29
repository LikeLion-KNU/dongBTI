import styled from "@emotion/styled";

export const Content = styled.div`
    // 100vh에서 상단 AppBar의 높이만큼 감소시킵니다.
    // 상하 padidng 값을 추가합니다. (10+10)
    // 100vh - 60px + 20px
    height: calc(100vh - 40px);
    box-sizing: border-box;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: left;
`;
