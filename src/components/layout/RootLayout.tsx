import { Outlet } from "react-router-dom";

import gradients from "@/assets/icons/gradients.svg";

import styled from "@emotion/styled";

export const Layout = styled.main`
    width: min(100%, 800px);

    margin: 0px auto;
    padding: 1.25rem;

    background-image: url(${gradients});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
`;

export const RootLayout = () => {
    return (
        <Layout>
            <Outlet />
        </Layout>
    );
};
