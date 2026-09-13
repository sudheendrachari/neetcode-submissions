class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        let left = 0, max = 0;
        const seen = new Set();
        for(let right = 0; right < s.length; right++) {
            while(seen.has(s[right])) {
                seen.delete(s[left]);
                left++;
            }
            seen.add(s[right]);
            max = Math.max(max, seen.size);
        }
        return max;
    }
}
