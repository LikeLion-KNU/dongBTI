import { Outlet } from "react-router-dom";

import styled from "@emotion/styled";

export const Layout = styled.main`
    width: min(100%, 800px);

    margin: 0px auto;
    padding: 10px;
`;

export const RootLayout = () => {
    return (
        <Layout>
            <Outlet />
        </Layout>
    );
};
