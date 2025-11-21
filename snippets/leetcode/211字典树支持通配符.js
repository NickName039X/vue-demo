var WordDictionary = function () {
    this.trieRoot = new TrieNode();
};

WordDictionary.prototype.addWord = function (word) {
    this.trieRoot.insert(word);
};

//二十六叉树
WordDictionary.prototype.search = function (word) {
    const dfs = (index, node) => {
        if (index === word.length) {
            return node.isEnd;
        }
        const ch = word[index];
        if (ch !== ".") {
            const child = node.children[ch.charCodeAt() - "a".charCodeAt()];
            //肯定有值

            console.log("child ===> ", child);

            if (child && dfs(index + 1, child)) {
                return true;
            }
        } else {
            for (const child of node.children) {
                if (child && dfs(index + 1, child)) {
                    return true;
                }
            }
        }
        return false;
    };

    return dfs(0, this.trieRoot);
};

class TrieNode {
    constructor() {
        this.children = new Array(26).fill(0);
        this.isEnd = false;
    }

    //先构建解空间,即画一颗二十六叉树
    insert(word) {
        let node = this;
        for (let i = 0; i < word.length; i++) {
            const ch = word[i];
            const index = ch.charCodeAt() - "a".charCodeAt();
            // console.log('node',node);

            if (node.children[index] === 0) {
                node.children[index] = new TrieNode();
            }
            node = node.children[index];
        }
        node.isEnd = true;
    }

    getChildren() {
        return this.children;
    }

    isEnd() {
        return this.isEnd;
    }
}

var wd = new WordDictionary();
wd.addWord("bad");
wd.addWord("pad");
const result = wd.search("ba.");
console.log("result", result);
