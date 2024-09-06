export class TreeNode {
    left: TreeNode | null;
    right: TreeNode | null;
    value: any;

    constructor(value: any) {
        this.left = null;
        this.right = null;
        this.value = value;
    }
    set setLeft(node: TreeNode) {
        this.left = node;
    }
    set setRight(node: TreeNode) {
        this.right = node;
    }
    get getValue() {
        return this.value;
    }

    static Builder = class Builder {
        private node: TreeNode;

        constructor(value: any) {
            this.node = new TreeNode(value);
        }
        setLeft(node: TreeNode): this {
            this.node.left = node;
            return this;
        }
        setRight(node: TreeNode): this {
            this.node.right = node;
            return this;
        }
        setValue(value: any): this {
            this.node.value = value;
            return this;
        }
        build(): TreeNode {
            return this.node;
        }
    };
}
