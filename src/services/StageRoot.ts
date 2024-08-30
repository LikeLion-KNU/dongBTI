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
                                    result: ["청음반", "우리노래반"],
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
                                            result: ["익스프레션", "POW"],
                                        }).build(),
                                    )
                                    .setRight(
                                        new TreeNode.Builder({
                                            question: null,
                                            choice: "작곡은 어려워!",
                                            result: ["그랜드챕스", "일렉스", "플레이아데스"],
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
                            result: ["관현악반", "크누피", "토레스"],
                        }).build(),
                    )
                    .build(),
            )
            .setRight(
                new TreeNode.Builder({
                    question: "노래부르는거 좋아해?",
                    choice: "나는 악기 연주보다는 다른 걸 하고 싶어",
                })
                    .setLeft(
                        new TreeNode.Builder({
                            question: null,
                            choice: "노래방만 가면 다들 박수쳐줘!!",
                            result: ["쌩목", "합창단"],
                        }).build(),
                    )
                    .setRight(
                        new TreeNode.Builder({
                            question: null,
                            choice: "목보단 몸을 쓰는게 좋아",
                            result: ["터프시커리", "연극반"],
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
                            result: ["사우회", "꿈틀"],
                        }).build(),
                    )
                    .setRight(
                        new TreeNode.Builder({
                            question: null,
                            choice: "직접 만드는거 좋아해!",
                            result: ["사우회", "요리조리"],
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
                            result: ["꼬모"],
                        }).build(),
                    )
                    .setRight(
                        new TreeNode.Builder({
                            question: null,
                            choice: "직접 만드는거 좋아해!",
                            result: ["경묵회", "팔레트", "뜨람"],
                        }).build(),
                    )
                    .build(),
            )
            .build(),
    )
    .build();
