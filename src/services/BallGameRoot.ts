import { TreeNode } from "./TreeNode";

export const BallGameRoot = new TreeNode.Builder({
    question: "공놀이 좋아해?",
    choice: null,
})
    .setLeft(
        new TreeNode.Builder({
            question: "사람 많은거 어때?",
            choice: "역시 체육은 공놀이지",
        })
            .setLeft(
                new TreeNode.Builder({
                    question: "접촉이 있어도 괜찮아?",
                    choice: "운동은 좀 복작복작 해야지",
                })
                    .setLeft(
                        new TreeNode.Builder({
                            question: null,
                            choice: "좀 부딪히는게 재밌지",
                            resultType: "intenseSportsman",
                        }).build(),
                    )
                    .setRight(
                        new TreeNode.Builder({
                            question: null,
                            choice: "내 몸에 손대지 마!!",
                            resultType: "coatSportsman",
                        }).build(),
                    )
                    .build(),
            )
            .setRight(
                new TreeNode.Builder({
                    question: "마주보고 운동하는거 좋아해?",
                    choice: "꼭 사람이 많을 필요는 없지",
                })
                    .setLeft(
                        new TreeNode.Builder({
                            question: null,
                            choice: "내 눈을 바라봐. 난 당신 얼굴이 궁금하다.",
                            resultType: "compatitionSportsman",
                        }).build(),
                    )
                    .setRight(
                        new TreeNode.Builder({
                            question: null,
                            choice: "난 앞만 봐.",
                            resultType: "fontSportsman",
                        }).build(),
                    )
                    .build(),
            )
            .build(),
    )
    .setRight(
        new TreeNode.Builder({
            question: "장비 사용하는거 좋아해?",
            choice: "응 아니야~",
        })
            .setLeft(
                new TreeNode.Builder({
                    question: "야외 활동 어때?",
                    choice: "장비 따위 필요 없어. 최고의 장비는 바로 나!",
                })
                    .setLeft(
                        new TreeNode.Builder({
                            question: null,
                            choice: "~ 신선한 바깥 공기가 좋아~!",
                            resultType: "natureSportsman",
                        }).build(),
                    )
                    .setRight(
                        new TreeNode.Builder({
                            question: null,
                            choice: "으 미세먼지 극혐",
                            resultType: "matSportsman",
                        }).build(),
                    )
                    .build(),
            )
            .setRight(
                new TreeNode.Builder({
                    question: "경쟁하는거 좋아해?",
                    choice: "인간은 도구를 사용해야지!",
                })
                    .setLeft(
                        new TreeNode.Builder({
                            question: null,
                            choice: "행복은 성적순이지~",
                            resultType: "fightSportsman",
                        }).build(),
                    )
                    .setRight(
                        new TreeNode.Builder({
                            question: null,
                            choice: "행복은 성적순이 아니야!",
                            resultType: "uniqueSportsman",
                        }).build(),
                    )
                    .build(),
            )
            .build(),
    )
    .build();
