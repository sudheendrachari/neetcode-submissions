class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     * [-4, -1, -1, 0, 1, 20]
     */
    threeSum(nums) {
        const numbers = nums.sort((a,b) => a-b);
        const result = [];
        const len = numbers.length;
        for(let i = 0; i < len; i++) {
            if((i>0) && (numbers[i] === numbers[i-1])) continue;
            let left = i+1, right = len - 1;
            while((left < right)) {
                const total = numbers[i] + numbers[left] + numbers[right];
                if(total < 0) {
                    left++
                } else if(total > 0){
                    right--;
                } else {
                    result.push([numbers[i], numbers[left], numbers[right]]);
                    left++;
                    right--;
                    while( (left < right) &&
                    (numbers[left] === numbers[left-1])) {
                        left++;
                    }
                }
            }
        }
        return result;
    }
}
