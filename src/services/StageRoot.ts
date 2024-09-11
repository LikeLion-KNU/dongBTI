import { TreeNode } from "./TreeNode";

export const StageRoot = new TreeNode.Builder({
    question: "무대 좋아해?",
    choice: null,
})
    .setLeft(
        new TreeNode.Builder({
            question: "악기 연주도 좋아해?",
            choice: "나는 무대에 서고 싶어!",
        })
            .setLeft(
                new TreeNode.Builder({
                    question: "밴드랑 클래식 어떤게 좋아?",
                    choice: "나는 악기 연주가 좋아",
                })
                    .setLeft(
                        new TreeNode.Builder({
                            question: "어쿠스틱 좋아해?",
                            choice: "나는 밴드!!",
                        })
                            .setLeft(
                                new TreeNode.Builder({
                                    question: null,
                                    choice: "어쿠스틱 감성 있지~",
                                    resultType: "tencm",
                                }).build(),
                            )
                            .setRight(
                                new TreeNode.Builder({
                                    question: "작곡에 관심있어?",
                                    choice: "어쿠스틱은 조용하던데...",
                                })
                                    .setLeft(
                                        new TreeNode.Builder({
                                            question: null,
                                            choice: "응! 관심 있어",
                                            resultType: "tchaikovsky",
                                        }).build(),
                                    )
                                    .setRight(
                                        new TreeNode.Builder({
                                            question: null,
                                            choice: "작곡은 어려워!",
                                            resultType: "stageMusician",
                                        }).build(),
                                    )
                                    .build(),
                            )
                            .build(),
                    )
                    .setRight(
                        new TreeNode.Builder({
                            question: null,
                            choice: "나는 클래식!!",
                            resultType: "mozart",
                        }).build(),
                    )
                    .build(),
            )
            .setRight(
                new TreeNode.Builder({
                    question: "노래부르는거 좋아해?",
                    choice: "나는 다른 걸 하고 싶어",
                })
                    .setLeft(
                        new TreeNode.Builder({
                            question: null,
                            choice: "노래방만 가면 다들 박수쳐줘!!",
                            resultType: "parkHyoShin",
                        }).build(),
                    )
                    .setRight(
                        new TreeNode.Builder({
                            question: null,
                            choice: "목보단 몸을 쓰는게 좋아",
                            resultType: "newJeans",
                        }).build(),
                    )
                    .build(),
            )
            .build(),
    )
    .setRight(
        new TreeNode.Builder({
            question: "같이 활동하는건 괜찮아?",
            choice: "나는 무대에 서는건 별로야...",
        })
            .setLeft(
                new TreeNode.Builder({
                    question: "제작하는거 좋아해?",
                    choice: "같이 활동하면서 공유하는거 좋아해",
                })
                    .setLeft(
                        new TreeNode.Builder({
                            question: null,
                            choice: "난 제작보단 기술다루는게 좋아",
                            resultType: "macGyver",
                        }).build(),
                    )
                    .setRight(
                        new TreeNode.Builder({
                            question: null,
                            choice: "직접 만드는거 좋아해!",
                            resultType: "cutieArtist",
                        }).build(),
                    )
                    .build(),
            )
            .setRight(
                new TreeNode.Builder({
                    question: "제작하는거 좋아해?",
                    choice: "각자 활동하면서 공유하는게 좋아",
                })
                    .setLeft(
                        new TreeNode.Builder({
                            question: null,
                            choice: "제작보다는 감상이 좋아",
                            resultType: "leedongjin",
                        }).build(),
                    )
                    .setRight(
                        new TreeNode.Builder({
                            question: null,
                            choice: "직접 만드는거 좋아해!",
                            resultType: "multiArtist",
                        }).build(),
                    )
                    .build(),
            )
            .build(),
    )
    .build();
