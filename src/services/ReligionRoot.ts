import { TreeNode } from "./TreeNode";

export const ReligionRoot = new TreeNode.Builder({
    question: "어떻게 생각해?",
    choice: null,
})
    .setLeft(
        new TreeNode.Builder({
            question: null,
            choice: "신은 있어!",
            resultType: "god",
        }).build(),
    )
    .setRight(
        new TreeNode.Builder({
            question: null,
            choice: "부처가 좋아",
            resultType: "budda",
        }).build(),
    )
    .build();
