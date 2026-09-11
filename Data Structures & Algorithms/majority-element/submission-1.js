class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     * 2, 2, 1, 1, 2
     * 
     * count = 1
     * res = 2
     */
    majorityElement(nums) {
        let count = 0, res = 0;
        for (const n of nums) {
            if(count === 0) res = n;

            count += (n === res) ? 1 : -1;
        }
        return res;
    }
}
