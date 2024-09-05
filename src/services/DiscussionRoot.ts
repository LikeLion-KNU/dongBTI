import { TreeNode } from "./TreeNode";

export const DiscussionRoot = new TreeNode.Builder({
    question: "토론 좋아해?",
    choice: null,
})
    .setLeft(
        new TreeNode.Builder({
            question: "토론이 좋아 발명이 좋아?",
            choice: "토론 좋아해!",
        })
            .setLeft(
                new TreeNode.Builder({
                    question: null,
                    choice: "토론이 좋아!",
                    resultType: "heatDebater",
                }).build(),
            )
            .setRight(
                new TreeNode.Builder({
                    question: "어떤 분야를 하고싶어?",
                    choice: "내 꿈은 발명왕!!",
                })
                    .setLeft(
                        new TreeNode.Builder({
                            question: null,
                            choice: "기계/IT에 관심있어",
                            resultType: "siliconValley",
                        }).build(),
                    )
                    .setRight(
                        new TreeNode.Builder({
                            question: null,
                            choice: "다 좋아해",
                            resultType: "creator",
                        }).build(),
                    )
                    .build(),
            )
            .build(),
    )
    .setRight(
        new TreeNode.Builder({
            question: "게임 좋아해?",
            choice: "토론보다는 취미를 공유하고 싶어",
        })
            .setLeft(
                new TreeNode.Builder({
                    question: null,
                    choice: "게임을 하면 이겨야지!",
                    resultType: "winner",
                }).build(),
            )
            .setRight(
                new TreeNode.Builder({
                    question: null,
                    choice: "게임은 별로야...",
                    resultType: "scholar",
                }).build(),
            )
            .build(),
    )
    .build();
