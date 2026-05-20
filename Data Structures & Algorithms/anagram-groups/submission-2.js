class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const res = new Map();
        const sortString = (str) => {
            // Convert to array of characters, sort, and join back into a string
            return [...str].sort((a, b) => a.charCodeAt(0) - b.charCodeAt(0)).join("");
        };
        for(const str of strs) {
            const sortedStr = sortString(str);
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
