class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        let l = 0, max = 0;
        let unique = new Set();
        for(let r = 0; r< s.length; r++) {
            while(unique.has(s[r])) {
                unique.delete(s[l]);
                l++;
            }
            unique.add(s[r]);
            max = Math.max(max, unique.size);
        }
        return max;
    }
}
