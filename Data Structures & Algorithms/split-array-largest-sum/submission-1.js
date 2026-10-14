class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number}
     */
    splitArray(nums, k) {
        let left = Math.max(...nums); // 10
        let right = nums.reduce((a,b) => a+b, 0); // 22

        function canSplit(sum) { // 12
            let currentSum = 0, splits = 0; // 5,1
            for(const n of nums) { // 5
                currentSum += n; // 22
                if(currentSum > sum) { 
                    splits++;
                    currentSum = n;
                }
            }
            return (splits+1) <= k;
        }

        let res = right; // 22
        while(left <= right) { // 15 <= 22
            const mid = left + Math.floor((right - left)/2); // 10 + 15-10/2 = 12
            if(canSplit(mid)) { // (18)
                res = mid; // min(22, 16) = 16
                right = mid - 1; // 15
            } else {
                left = mid + 1;
            }
        }
        return res;
    }
}
