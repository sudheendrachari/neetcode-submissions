class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        const res = [];
        nums.sort((a,b)=> a-b);
        for(let i = 0; i<nums.length; i++) {
            if((i>0) && nums[i] == nums[i-1]) continue;
            if(nums[i] > 0) break;
            const target = -nums[i];
            let left = i+1;
            let right = nums.length-1;
            while (left < right) {
                if(nums[left]+nums[right] == target) {
                    res.push([nums[left], nums[right], nums[i]]);
                    left++;
                    right--;
                    while((left<right) && nums[left] == nums[left-1]) left++;
                    while((left<right) && nums[right] == nums[right+1]) right--;
                } else if(nums[left]+nums[right] <  target) {
                    left++;
                } else {
                    right--;
                }
            }
        }
        return res;
    }
}
