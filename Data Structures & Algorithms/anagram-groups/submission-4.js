class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const res = new Map();
        const getKey = (str) => {
            const key = new Array(26).fill(0);
            for(const c of str) {
                const keyIndex = c.charCodeAt(0) - 'a'.charCodeAt(0);
                key[keyIndex]++
            }
            return key.join('-');
        };
        for(const str of strs) {
            const sortedStr = getKey(str);
            if(res.has(sortedStr)) {
                res.get(sortedStr).push(str);
            } else {
                res.set(sortedStr, [str])
            }
        }
        const outArr = [];
        for(const [k, v] of res) {
            outArr.push(v);
        }
        return outArr;
    }
}
