class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number}
     */
    splitArray(nums, k) {
        let left = Math.max(...nums); // 10
        let right = nums.reduce((a,b) => a+b, 0); // 22

        function canSplit(sum) { // 16
            let currentSum = 0, splits = 0; // 0,0
            for(const n of nums) { // 2
                currentSum += n; // 2
                if(currentSum > sum) { 
                    splits++;
                    currentSum = n;
                }
            }
            return (splits+1) <= k;
        }

        let res = right; // 22
        while(left <= right) { // 10 <= 22
            const mid = left + Math.floor((right - left)/2); // 16
            if(canSplit(mid)) { // (16)
                res = Math.min(mid, res);
                right = mid - 1;
            } else {
                left = mid + 1;
            }
        }
        return res;
    }
}
