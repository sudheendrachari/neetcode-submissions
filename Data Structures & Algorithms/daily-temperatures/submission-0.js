class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures) {
        const stack = []; //[temp, index]
        const result = new Array(temperatures.length).fill(0);


        for(let i = 0; i < temperatures.length; i++) {
            const temp = temperatures[i];
            while(stack.length && temp > stack[stack.length - 1][0]) {
                const elem = stack.pop();
                const days = i - elem[1];
                result[elem[1]] = days;
            }
            stack.push([temp, i]);
        }
        return result;
    }
}
