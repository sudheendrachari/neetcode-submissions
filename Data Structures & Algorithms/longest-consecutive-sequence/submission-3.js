class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        const numSet = new Set(nums);
        let res = 0;
        for(let i = 0; i<nums.length; i++) {
            let n = nums[i];
            let seq = 1;
            if(numSet.has(n-1)) {
                continue;
            }
            while (numSet.has(n+1)) {
                seq+=1;
                n+=1;
            }
            res = Math.max(res, seq);
        }
        return res;
    }
}
