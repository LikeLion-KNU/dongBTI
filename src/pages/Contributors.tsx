import React from "react";
import TopBar from "@/components/layout/TopBar";
import DevProfileCard from "../components/display/DevProfileCard";
import * as S from '@/pages/Contributors.stlye'; // 스타일 파일을 가져옵니다.

// 개발자 데이터를 배열로 정의합니다.
const developers = [
  {
    name: "김대건",
    tasks: ["프로젝트 매니저", "AWS", "알고리즘"],
    githubId: "toothlessdev",
    instagramId: "toothlesskid_",
    department: "컴퓨터힉부 20학번",
    club: "멋.사. 12기 대표",
    role: "FE/PM"
  },
  {
    name: "남소은",
    tasks: ["메인페이지", "통계 페이지 디자인/구현"],
    githubId: "2NNS-v",
    instagramId: "2nns.v",
    department: "컴퓨터학부 21학번",
    club: "멋.사. 12기",
    role: "FE/Design"
  },
  {
    name: "박신영",
    tasks: ["분석 로딩 화면", "만든이들 디자인/구현"],
    githubId: "parknew0",
    instagramId: "park_new0",
    department: "컴퓨터학부 22학번",
    club: "멋.사. 12기",
    role: "FE/Design"
  },
  {
    name: "장기원",
    tasks: ["공유 디자인/구현", "만든이들 디자인"],
    githubId: "whitedev7773",
    instagramId: "giwon_w.dev7773",
    department: "컴퓨터학부 24학번",
    club: "멋.사. 12기",
    role: "FE/Design"
  },
  {
    name: "조재용",
    tasks: ["문제 선택지", "페이지 연결", "알고리즘"],
    githubId: "WithJo",
    instagramId: "jo_pobi",
    department: "컴퓨터학부 21학번",
    club: "멋.사. 12기",
    role: "FE/Design"
  },
  {
    name: "황부연",
    tasks: ["결과 페이지", "AWS", "DB"],
    githubId: "ArpaAP",
    instagramId: "dev._.buyeon",
    department: "컴퓨터학부 24학번",
    club: "멋.사. 12기",
    role: "FE/Design"
  },
];

const Contributors: React.FC = () => {
  return (
    <>
      <TopBar title="만든이들" />
      <S.Container>
        {developers.map((developer, index) => (
          <DevProfileCard
            key={index}
            name={developer.name}
            tasks={developer.tasks}
            githubId={developer.githubId}
            instagramId={developer.instagramId}
            department={developer.department}
            club={developer.club}
            role={developer.role}
          />
        ))}
      </S.Container>
    </>
  );
};

export default Contributors;
