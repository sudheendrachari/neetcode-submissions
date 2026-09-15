class Solution {
    /**
     * @param {string} beginWord
     * @param {string} endWord
     * @param {string[]} wordList
     * @return {number}
     */
    ladderLength(beginWord, endWord, wordList) {
        if(!wordList.includes(endWord)) {
            return 0
        }
        const patternMap = new Map();
        wordList.unshift(beginWord);
        const len = wordList[0].length;
        for(const word of wordList) {
            for(let i = 0; i < len; i++) {
                const pattern = word.slice(0, i) + '_' + word.slice(i+1, len);
                if(!patternMap.has(pattern)) patternMap.set(pattern, []);
                patternMap.get(pattern).push(word);
            }
        }
        let count = 1;
        const visited = new Set();
        const q = [];
        q.push(beginWord);
        while(q.length) {
            const qLen = q.length;
            for(let i = 0; i < qLen; i++) {
                const word = q.shift();
                if(word === endWord) {
                    return count;
                }
                visited.add(word);
                for(let j = 0; j < len; j++) {
                    const pattern = word.slice(0, j) + '_' + word.slice(j+1, len);
                    for(const nei of patternMap.get(pattern)) {
                        if(!visited.has(nei)) {
                            q.push(nei);
                        }
                    }
                }
            }
            count++;
        }
        return 0;
    }
}
