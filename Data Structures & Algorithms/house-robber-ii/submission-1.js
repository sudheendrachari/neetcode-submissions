class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    rob(nums) {
        if(nums.length === 1) return nums[0];
        function rob1(list) {
            let lastButOne = 0, last = 0;
            for(let i = 0; i<list.length; i++) {
                const max = Math.max(list[i] + lastButOne, last);
                lastButOne = last;
                last = max;
            }
            return last;
        }
        return Math.max( rob1(nums.slice(0, -1)), rob1(nums.slice(1)))
    }
}
