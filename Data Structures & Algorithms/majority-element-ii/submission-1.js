class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    majorityElement(nums) {
        // First pass

        let cand1, cand2;
        let count1 = 0, count2 = 0;
        for(const n of nums) {
            if(n === cand1) {
                count1++
            } else if(n === cand2) {
                count2++
            } else if (count1 === 0) {
                cand1 = n;
                count1 = 1;
            } else if(count2 == 0) {
                cand2 = n;
                count2 = 1;
            } else {
                count1--;
                count2--;
            }
        }

        //second pass to check if > n/3
        const threshold = Math.floor(nums.length/3);
        const res = [];
        count1 = 0, count2 = 0;
        for(const n of nums) {
            if(n === cand1) {
                count1++
            } else if(n === cand2) {
                count2++
            }
        }
        if(count1 > threshold) res.push(cand1);
        if(count2 > threshold) res.push(cand2);
        return res;
    }
}
