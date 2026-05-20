class Solution {
    // [2,20,4,10,3,4,5]
    // set -> (2,3,4,5,10,20)
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        const s = new Set(nums);
        let m = 0;
        for(let num of s) {
            if(!s.has(num-1)) {
                let len = 1;
                while(s.has(num+1)) {
                    len++;
                    num++;
                }
                if(len > m) {
                    m = len;
                }
            }
        }
        return m;
    }
}
