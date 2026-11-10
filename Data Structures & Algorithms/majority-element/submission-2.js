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
        let res = null;
        let count = 0;
        for(const n of nums) {
            if(count === 0) {
                count = 1;
                res = n;
            } else {
                if(n === res) {
                    count++
                } else {
                    count--;
                }
            }
        }
        return res;
    }
}
