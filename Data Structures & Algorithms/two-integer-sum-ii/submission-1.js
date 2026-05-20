class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {
        const m = new Map();
        for(let i = 0; i < numbers.length; i++) {
            const num = numbers[i];
            if(m.has(target-num)) {
                return [m.get(target-num), i+1];
            }
            m.set(num, i+1);
        }
    }
}
