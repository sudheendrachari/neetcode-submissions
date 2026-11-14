class Solution {
    /**
     * @param {string[]} operations [5, 10, 15]
     * @return {number}
     */
    calPoints(operations) {
        const nums = [];
        for(const op of operations) {
            switch (op) {
                case '+' : {
                    nums.push(
                        nums[nums.length - 1] + nums[nums.length - 2]
                    )
                    break;
                }
                case 'C' : {
                    nums.pop();
                    break;
                }
                case 'D' : {
                    nums.push(
                        2 * nums[nums.length - 1]
                    );
                    break;
                }
                default : {
                    nums.push(Number(op));
                }
            }
        }
        return nums.reduce((a, b) => a+b, 0);
    }
}
