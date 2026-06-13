class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @returns {number[][]}
     */
    combinationSum(nums, target) {
        const res = [], cur = [], curSum = 0;
        function helper(i, curArr, curTotal) {
            if(i === nums.length) {
                return;
            }
            if(curTotal > target) {
                return;
            }
            if(curTotal === target) {
                res.push([...curArr]);
                return;
            }
            curArr.push(nums[i]);
            helper(i, curArr, curTotal + nums[i]);
            curArr.pop();
            helper(i+1, curArr, curTotal);
        }

        helper(0, cur, curSum);
        return res;
    }
}
