import { TreeNode } from "./TreeNode";

export const DiscussionRoot = new TreeNode.Builder({
    question: "토론 좋아해?",
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
                            result: ["센토", "맨투맨", "동그라미", "오렌지파이터스"],
                        }).build(),
                    )
                    .setRight(
                        new TreeNode.Builder({
                            question: null,
                            choice: "내 몸에 손대지 마!!",
                            result: ["스트라이크", "파란", "스파이크"],
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
                            result: ["KUTC", "스매싱", "스윙스"],
                        }).build(),
                    )
                    .setRight(
                        new TreeNode.Builder({
                            question: null,
                            choice: "난 앞만 봐.",
                            result: ["KGA", "KNUBC"],
                        }).build(),
                    )
                    .build(),
            )
            .build(),
    )
    .setRight(
        new TreeNode.Builder({
            question: "사람 많은거 어때?",
            choice: "응 아니야~",
        })
            .setLeft(
                new TreeNode.Builder({
                    question: "사람 많은거 어때?",
                    choice: "장비 따위 필요 없어. 최고의 장비는 바로 나!",
                }).build(),
            )
            .setRight(
                new TreeNode.Builder({
                    question: "사람 많은거 어때?",
                    choice: "인간은 도구를 사용해야지!",
                }).build(),
            )
            .build(),
    )
    .build();
