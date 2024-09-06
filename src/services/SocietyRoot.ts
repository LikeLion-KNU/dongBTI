import { TreeNode } from "./TreeNode";

export const SocietyRoot = new TreeNode.Builder({
    question: "봉사와 교류중에 뭐가 더 좋아?",
    choice: null,
})
    .setLeft(
        new TreeNode.Builder({
            question: "교육봉사 어때?",
            choice: "남을 돕는건 보람차~",
        })
            .setLeft(
                new TreeNode.Builder({
                    question: null,
                    choice: "가르치는거 좋아해!!",
                    resultType: "hyunwoojin",
                }).build(),
            )
            .setRight(
                new TreeNode.Builder({
                    question: "어떤게 더 보람차?",
                    choice: "난 가르치는건 어려워...",
                })
                    .setLeft(
                        new TreeNode.Builder({
                            question: null,
                            choice: "주변을 개선해 나가는걸 좋아해!",
                            resultType: "philanthropist",
                        }).build(),
                    )
                    .setRight(
                        new TreeNode.Builder({
                            question: null,
                            choice: "세상이 좀 더 아름다워졌으면 좋겠어!",
                            resultType: "teresa",
                        }).build(),
                    )
                    .build(),
            )
            .build(),
    )
    .setRight(
        new TreeNode.Builder({
            question: null,
            choice: "교류는 언제나 즐거워!",
            resultType: "american",
        }).build(),
    )
    .build();
