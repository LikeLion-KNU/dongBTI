/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";

export const CardWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: white;
    border-radius: 12px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    padding: 16px;
    max-width: 450px;
    margin: 16px;
`;

export const Avatar = styled.img`
    width: 80px;
    height: 80px;
    border-radius: 10%;
    margin-right: 16px;
`;

export const ContentWrapper = styled.div`
    flex: 1;
`;

export const Name = styled.h3`
    font-size: 20px;
    font-weight: bold;
    margin: 0;
`;

export const TaskList = styled.p`
    font-size: 14px;
    color: #666;
    margin: 4px 0;
`;

export const SocialLinks = styled.div`
    display: flex;
    align-items: center;
    gap: 8px;
    margin-top: 8px;
    font-size: 14px;
    color: #888;
`;

export const MetaInfo = styled.div`
    display: flex;
    align-items: center;
    gap: 8px;
    margin-top: 8px;
`;

export const Badge = styled.span`
    display: inline-block;
    background-color: #37cdcd;
    color: white;
    padding: 4px 8px;
    border-radius: 12px;
    font-size: 12px;
    margin-right: 8px;
`;

export const ClubBadge = styled.span`
    display: inline-block;
    background-color: white;
    color: #f39c12;
    padding: 4px 8px;
    border-radius: 12px;
    font-size: 12px;
    margin-right: 8px;
    border: 1px solid #f39c12;
`;

export const Role = styled.span`
    display: inline-block;
    border: 1px solid #ddd;
    border-radius: 12px;
    padding: 4px 8px;
    font-size: 12px;
    color: #333;
`;

export const IconWrapper = styled.div`
    display: inline-flex;
    align-items: center;
    margin-right: 4px;
    img {
        width: 16px;
        height: 16px;
    }
`;
