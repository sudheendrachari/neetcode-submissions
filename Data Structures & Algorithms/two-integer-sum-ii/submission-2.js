class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {
        // const m = new Map();
        // for(let i = 0; i < numbers.length; i++) {
        //     const num = numbers[i];
        //     if(m.has(target-num)) {
        //         return [m.get(target-num), i+1];
        //     }
        //     m.set(num, i+1);
        // }
        let l = 0, r = numbers.length-1;
        while(l<r) {
            const s = numbers[l] + numbers[r];
            if(s > target) {
                r--;
            } else if(s < target) {
                l ++
            } else {
                return [l+1, r+1];
            }
        }
        return [];
    }
}
