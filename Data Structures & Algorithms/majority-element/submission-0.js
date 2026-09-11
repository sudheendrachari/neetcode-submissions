class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    majorityElement(nums) {
        let maxVal;
        const freq = new Map();
        for(const n of nums) {
            const cur = freq.get(n) || 0;
            if ((freq.get(maxVal) || 0) < (cur+1)) {
                maxVal = n;
            }
            freq.set(n, cur + 1);
        }
        return maxVal

    }
}
