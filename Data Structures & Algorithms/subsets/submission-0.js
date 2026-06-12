class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    subsets(nums) {
        const subset = [], res = [];
        this.helper(nums, 0, subset, res);
        return res;
    }

    helper(nums, i, subset, res) {
        if(i === nums.length) {
            res.push([...subset]);
            return;
        }
        subset.push(nums[i]);
        this.helper(nums, i+1, subset, res);
        subset.pop();
        this.helper(nums, i+1, subset, res);
    }
}
