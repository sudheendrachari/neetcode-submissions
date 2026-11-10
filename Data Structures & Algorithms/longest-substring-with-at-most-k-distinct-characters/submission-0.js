class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    lengthOfLongestSubstringKDistinct(s, k) {
        let left = 0;
        let max = 0;
        const counter = new Map();
        for (let right = 0; right < s.length; right++) {
            counter.set(s[right], (counter.get(s[right]) || 0) + 1);
            while (counter.size > k) {
                counter.set(s[left], counter.get(s[left]) - 1);
                if (counter.get(s[left]) === 0) {
                    counter.delete(s[left]);
                }
                left++;
            }
            max = Math.max(max, right - left + 1);
        }
        return max;
    }
}
