class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const m = new Map();
        for (let i = 0; i<strs.length; i++) {
            const str = strs[i];
            const count = new Array(26).fill(0);
            for (const c of str) {
                count[c.charCodeAt(0) - 'a'.charCodeAt(0)] += 1;
            }
            const key = count.join(',');
            if(!m.has(key)) {
                m.set(key, []);
            }
            m.get(key).push(str);
        }
        return [...m.values()];
    }
}
