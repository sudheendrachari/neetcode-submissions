class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    subsets(nums) {
        const result = [];
        const current = [];
        function dfs(i) {
            if(i === nums.length) {
                result.push([...current]);
                return;
            }
            // include nums[i]
            current.push(nums[i]);
            dfs(i+1);
            // do not include nums[i]
            current.pop();
            dfs(i+1);

        }
        dfs(0);
        return result;
    }


}
