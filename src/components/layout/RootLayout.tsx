import { Outlet } from "react-router-dom";

import styled from "@emotion/styled";

export const Layout = styled.main`
    width: min(100%, 800px);
    height: 100vh;
    
    margin: 0px auto;
    padding: 1.25rem;
`;

export const RootLayout = () => {
    return (
        <Layout>
            <Outlet />
        </Layout>
    );
};
