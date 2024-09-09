import { Text } from "@/components/typography";

import GithubIcon from "@/assets/icons/github.svg";
import InstagramIcon from "@/assets/icons/instagram.svg";

import { DeveloperChips } from "./DeveloperChips";
import styled from "@emotion/styled";

interface DeveloperInfo extends Object {
    name: string;
    worklist: Array<string>;
    github_id: string;
    instagram_id: string;
    grade_year: number;
    is_manager: boolean;
}

interface DeveloperCardProps extends React.ComponentProps<"div"> {
    info: DeveloperInfo;
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: left;
    gap: 14px;
    background-color: white;
    padding: 20px;
    border-radius: 20px;
    box-shadow: 2px 2px 30px rgba(0, 0, 0, 0.06);

    flex-grow: 1;
    flex-basis: 0;

    $ > img {
        border-radius: 10px;
    }
}
`;

const Image = styled.img`
    width: 73px;
    height: 73px;
    border-radius: 10px;
`;

const InfoContainer = styled.div`
    display: flex;
    gap: 16px;
    align-items: center;
`;

const InfoDiv = styled.div`
    height": 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

const NameWorkDiv = styled.div`
    display: flex;
    flex-direction: column;
    gap: 7px;

    & > span {
        display: block;
    }
`;

interface SNSProps extends React.ComponentProps<"div"> {
    id: string;
}

const Github: React.FC<SNSProps> = ({ id }) => {
    return (
        <div style={{ opacity: 0.5, display: "flex", alignItems: "center", gap: "4px" }}>
            <img src={GithubIcon} />
            <Text size="11px">{id}</Text>
        </div>
    );
};

const Instagram: React.FC<SNSProps> = ({ id }) => {
    return (
        <div style={{ opacity: 0.5, display: "flex", alignItems: "center", gap: "4px" }}>
            <img src={InstagramIcon} />
            <Text size="11px">{id}</Text>
        </div>
    );
};

const SNSLinks = styled.div`
    display: flex;
    gap: 12px;
    margin-top: 14px;
`;

export const DeveloperProfile: React.FC<DeveloperCardProps> = ({ info }) => {
    return (
        <Container>
            <InfoContainer>
                <Image src={`https://github.com/${info.github_id}.png`} />
                <InfoDiv>
                    <NameWorkDiv>
                        <Text size="m" weight="extrabold">
                            {info.name}
                        </Text>
                        <Text size="12px" color="#818181">
                            {info.worklist.join(" · ")}
                        </Text>
                    </NameWorkDiv>
                    <SNSLinks>
                        <Github id={info.github_id} />
                        <Instagram id={info.instagram_id} />
                    </SNSLinks>
                </InfoDiv>
            </InfoContainer>
            <DeveloperChips cse_year={info.grade_year} is_manager={info.is_manager} />
        </Container>
    );
};
