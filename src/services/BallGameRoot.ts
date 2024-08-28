import { TreeNode } from "./TreeNode";

export const BallGameRoot = new TreeNode.Builder("구기/비구기")
    .setLeft(
        new TreeNode.Builder("역시 체육은 공놀이지")
            .setLeft(
                new TreeNode.Builder("운동은 좀 복작복작 해야지")
                    .setLeft(
                        new TreeNode.Builder("좀 부딪히는게 재밌지")
                            .setValue(["센토", "맨투맨", "동그라미", "오렌지파이터스"])
                            .build(),
                    )
                    .setRight(
                        new TreeNode.Builder("내 몸에 손대지 마!!")
                            .setValue(["스트라이크", "파란", "스파이크"])
                            .build(),
                    )
                    .build(),
            )
            .setRight(
                new TreeNode.Builder("꼭 사람이 많을 필요는 없지")
                    .setLeft(
                        new TreeNode.Builder("내 눈을 바라봐. 난 당신 얼굴이 궁금하다.")
                            .setValue(["KUTC", "스매싱", "스윙스"])
                            .build(),
                    )
                    .setRight(new TreeNode.Builder("난 앞만 봐.").setValue(["KGA", "KNUBC"]).build())
                    .build(),
            )
            .build(),
    )
    .setRight(
        new TreeNode.Builder("응 아니야~")
            .setLeft(new TreeNode.Builder("장비 따위 필요 없어. 최고의 장비는 바로 나!").build())
            .setRight(new TreeNode.Builder("인간은 도구를 사용해야지!").build())
            .build(),
    )
    .build();
