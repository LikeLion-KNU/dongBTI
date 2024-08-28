import styled from "@emotion/styled";

export const CardElement = styled.div`
    overflow: hidden;
    width: 80%;
    height: auto;
    border-radius: 12px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease;

    img {
        width: 100%;
        height: auto;
        display: block; // Removes bottom space/gap
        transition: transform 0.3s ease;
    }

    &:hover img {
        transform: scale(1.05);
    }
`;
