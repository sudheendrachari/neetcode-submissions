class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const aCode = 'a'.charCodeAt(0);
        const seen = new Map();
        for(const str of strs) {
            const counts = new Array(26).fill(0);
            for(const char of str) {
                const index = char.charCodeAt(0) - aCode;
                counts[index]++;
            }
            const key = counts.join('-');
            if(seen.has(key)) {
                seen.get(key).push(str);
            } else {
                seen.set(key, [str]);
            }
        }
        return [...seen.values()]
    }
}
