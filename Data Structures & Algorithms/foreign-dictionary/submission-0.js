class Solution {
    /**
     * @param {string[]} words
     * @returns {string}
     */
    foreignDictionary(words) {
        const indegree = {};
        const adjList = {};
        for (const word of words) {
            for (const char of word) {
                indegree[char] = 0;
                adjList[char] = new Set();
            }
        }

        for (let i = 0; i < words.length - 1; i++) {
            const w1 = words[i],
                w2 = words[i + 1];
            const minLen = Math.min(w1.length, w2.length);

            if (w1.slice(0, minLen) == w2.slice(0, minLen) && w1.length > w2.length) {
                return "";
            }

            for (let j = 0; j < minLen; j++) {
                if (w1[j] != w2[j]) {
                    if (!adjList[w1[j]].has(w2[j])) {
                        adjList[w1[j]].add(w2[j]);
                        indegree[w2[j]]++;
                    }
                    break;
                }
            }
        }

        const q = [];
        for (const char in indegree) {
            if (indegree[char] === 0) q.push(char);
        }
        let head = 0;
        while (head < q.length) {
            const ch = q[head];
            for (const nextChar of adjList[ch]) {
                indegree[nextChar]--;
                if (indegree[nextChar] === 0) {
                    q.push(nextChar);
                }
            }
            head++;
        }
        if(q.length !== Object.keys(indegree).length) {
            return '';
        }
        return q.join('');
    }
}
