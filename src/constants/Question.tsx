import React from "react";

interface Question {
    text: string;
    imageUrl: string;
    option: React.ReactNode[];
}

export const questions: Question[] = [
    {},
    {
        text: "공놀이 좋아해?",
        imageUrl: "https://cdn.pixabay.com/photo/2015/01/-613199_640.jpg",
        option: ["역시 체육은 공놀이지", "응 아니야"],
    },
    {
        text: "어떻게 운동하는게 좋아?",
        imageUrl: "https://cdn.pixabay.com/photo/2015/01/26/22/40/child-613199_640.jpg",
        option: ["운동은 좀 복작복작해야지", "꼭 사람이 많을 필요는 없지"],
    },
    {
        text: "장비빨 잘받아?",
        imageUrl: "https://file2.nocutnews.co.kr/newsroom/image/2024/08/01/202408011205387201_0.jpg",
        option: [
            <>
                장비따윈 필요 없어. <br /> 최고의 장비는 바로 나!
            </>,
            "인간은 도구를 사용해야지",
        ],
    },
    {
        text: "운동하면서 부딛히는거 괜찮아?",
        imageUrl: "https://cdn.pixabay.com/photo/2015/01/26/22/40/child-613199_640.jpg",
        option: ["좀 부딛히는게 재밌지", "내 몸에 손대지마"],
    },
    {
        text: "마주보면서 운동하는거 어때?",
        imageUrl: "https://file2.nocutnews.co.kr/newsroom/image/2024/08/01/202408011205387201_0.jpg",
        option: [
            <>
                내 눈을 바라봐. <br /> 난 당신 얼굴이 궁금하다
            </>,
            "난 앞만 봐",
        ],
    },
    {
        text: "어디서 운동하는게 좋아?",
        imageUrl: "https://cdn.pixabay.com/photo/2015/01/26/22/40/child-613199_640.jpg",
        option: ["바깥 공기가 좋아", "미세먼지 극혐"],
    },
    {
        text: "경쟁 좋아해?",
        imageUrl: "https://cdn.pixabay.com/photo/2015/01/26/22/40/child-613199_640.jpg",
        option: ["행복은 성적순이지~", "행복은 성적순이 아니야!"],
    },
];
