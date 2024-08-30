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
                    result: ["H.Q", "VINE", "솔토론회", "Now&Here", "KNU UNSA", "에이스"],
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
                            result: ["앱동", "크누 모빌리티"],
                        }).build(),
                    )
                    .setRight(
                        new TreeNode.Builder({
                            question: null,
                            choice: "다 좋아해",
                            result: ["돌구름", "솔라이브"],
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
                    result: ["국상무쌍", "트러블메이커", "복현기우회", "H.P"],
                }).build(),
            )
            .setRight(
                new TreeNode.Builder({
                    question: null,
                    choice: "게임은 별로야...",
                    result: ["현시연", "코스모스"],
                }).build(),
            )
            .build(),
    )
    .build();
