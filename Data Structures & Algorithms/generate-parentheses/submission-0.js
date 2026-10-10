class Solution {
    /**
     * @param {number} n
     * @return {string[]}
     */
    generateParenthesis(n) {
        // leftCount > rightCount to add left paran
        // leftcount ==n, rightcount ==n exit
        let stack = [];
        let result = [];
        
        function backtrack(left, right) {
            if((left === n) && (right === n)) {
                result.push(stack.join(''));
                return;
            }
            if(left < n) {
                stack.push('(')
                backtrack(left+1, right);
                stack.pop();
            }

            if(right < left) {
                stack.push(')');
                backtrack(left, right+1);
                stack.pop();
            }
        }

        backtrack(0,0);        
        return result;
    }
}
