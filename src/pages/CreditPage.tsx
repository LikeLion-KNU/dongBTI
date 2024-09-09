import { useNavigate } from "react-router-dom";

import { Credit } from "@/components/display/Credit";
import { DeveloperProfile } from "@/components/display/DeveloperProfile";
import TopBar from "@/components/layout/TopBar";
import { Text } from "@/components/typography";

import BackIcon from "@/assets/back.svg";

import { Content, FixedBackground, TitleHeader, MessageBox, ProfileWrapper } from "./CreditPage.styled";

const KimDaegeon = {
    name: "김대건",
    worklist: ["프로젝트 매니저", "AWS", "알고리즘"],
    github_id: "toothlessdev",
    instagram_id: "toothlesskid_",
    grade_year: 20,
    is_manager: true,
};

const NamSoeon = {
    name: "남소은",
    worklist: ["메인페이지", "통계 페이지 디자인/구현"],
    github_id: "2NNS-V",
    instagram_id: "2nns.v",
    grade_year: 21,
    is_manager: false,
};

const ParkSinyoung = {
    name: "박신영",
    worklist: ["분석 로딩 화면", "만든이들 디자인/구현"],
    github_id: "parknew0",
    instagram_id: "park_new0",
    grade_year: 22,
    is_manager: false,
};

const JangGiwon = {
    name: "장기원",
    worklist: ["공유 디자인/구현", "만든이들 디자인"],
    github_id: "whitedev7773",
    instagram_id: "giwon_w.dev7773",
    grade_year: 24,
    is_manager: false,
};

const JoJaeyong = {
    name: "조재용",
    worklist: ["문제 선택지", "페이지 연결", "알고리즘"],
    github_id: "WithJo",
    instagram_id: "jo_pobi",
    grade_year: 21,
    is_manager: false,
};

const HwangBuyeon = {
    name: "황부연",
    worklist: ["결과 페이지", "AWS", "알고리즘", "DB"],
    github_id: "ArpaAP",
    instagram_id: "dev._.buyeon",
    grade_year: 24,
    is_manager: false,
};

export default function CreditPage() {
    const navigate = useNavigate();

    return (
        <>
            <TopBar title="만든이들" icon={<img src={BackIcon} onClick={() => navigate(-1)} />} />
            <Content>
                <TitleHeader>
                    <Text size="l" weight="extrabold">
                        감사 인사
                    </Text>
                    <Text size="s" weight="extrabold">
                        Special Message
                    </Text>
                </TitleHeader>
                <MessageBox>
                    <Text size="xs">
                        동아리 활동을 통해 더 많은 도전과 성장을 이루어가며, 함께 더 큰 꿈을 실현해 나가길 기대합니다.
                        <br />
                        <br />
                        여러분의 열정과 꿈이 Dong-BTI를 통해 활짝 피어나길 진심으로 응원합니다!
                        <br />
                        <br />
                        Dong-BTI를 이용해주셔서 감사합니다 :)
                        <br />
                        <br />- 총동아리 연합 및 개발진 일동 -
                    </Text>
                    <br />
                    <br />
                    <Credit />
                </MessageBox>

                <TitleHeader>
                    <Text size="l" weight="extrabold">
                        개발자들
                    </Text>
                    <Text size="s" weight="extrabold">
                        Developers
                    </Text>
                </TitleHeader>
                <ProfileWrapper>
                    <DeveloperProfile info={KimDaegeon} />
                    <DeveloperProfile info={NamSoeon} />
                    <DeveloperProfile info={ParkSinyoung} />
                    <DeveloperProfile info={JangGiwon} />
                    <DeveloperProfile info={JoJaeyong} />
                    <DeveloperProfile info={HwangBuyeon} />
                </ProfileWrapper>
                <br />
                <br />
                <Credit />
                <br />
                <br />
            </Content>
            <FixedBackground />
        </>
    );
}
