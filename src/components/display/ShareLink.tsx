import { Text } from "../typography";
import { ShareLinkWrapper } from "./ShareLink.styled";

interface ShareLinkProps {
    link: string;
    color: string;
}

interface LinkIconProps {
    color: string;
}

export const LinkIcon: React.FC<LinkIconProps> = ({ color }) => {
    return (
        <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_6_74)">
                <path
                    d="M12.5002 4.9288L10.3788 7.05012C9.98993 7.43903 9.98993 8.07542 10.3788 8.46433C10.7677 8.85324 11.4041 8.85324 11.793 8.46433L13.9144 6.34301C15.0811 5.17629 16.9903 5.17629 18.157 6.34301C19.3237 7.50974 19.3237 9.41893 18.157 10.5857L16.0357 12.707C15.6468 13.0959 15.6468 13.7323 16.0357 14.1212C16.4246 14.5101 17.061 14.5101 17.4499 14.1212L19.5712 11.9999C21.5228 10.0483 21.5228 6.88041 19.5712 4.9288C17.6196 2.97718 14.4518 2.97718 12.5002 4.9288ZM9.67173 14.8283C10.0606 15.2172 10.697 15.2172 11.0859 14.8283L15.3286 10.5857C15.7175 10.1967 15.7175 9.56035 15.3286 9.17144C14.9397 8.78253 14.3033 8.78253 13.9144 9.17144L9.67173 13.4141C9.28282 13.803 9.28282 14.4394 9.67173 14.8283ZM13.2073 15.5354L11.0859 17.6567C9.91922 18.8234 8.01003 18.8234 6.8433 17.6567C5.67658 16.49 5.67658 14.5808 6.8433 13.4141L8.96462 11.2928C9.35353 10.9039 9.35353 10.2675 8.96462 9.87855C8.57571 9.48964 7.93932 9.48964 7.55041 9.87855L5.42909 11.9999C3.47747 13.9515 3.47747 17.1193 5.42909 19.0709C7.3807 21.0225 10.5485 21.0225 12.5002 19.0709L14.6215 16.9496C15.0104 16.5607 15.0104 15.9243 14.6215 15.5354C14.2326 15.1465 13.5962 15.1465 13.2073 15.5354Z"
                    fill={color}
                />
            </g>
            <defs>
                <clipPath id="clip0_6_74">
                    <rect width="24" height="24" fill="white" transform="translate(0.5)" />
                </clipPath>
            </defs>
        </svg>
    );
};

export const ShareLink: React.FC<ShareLinkProps> = ({ link, color }) => {
    return (
        <ShareLinkWrapper>
            <LinkIcon color={color} />
            <Text size="xs" weight="bold" color={color}>
                {link}
            </Text>
        </ShareLinkWrapper>
    );
};
