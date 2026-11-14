class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures) {
        const result = new Uint32Array(temperatures.length);
        const stack = [];

        for(let i = 0; i < temperatures.length; i++) {
            const t = temperatures[i];
            while(stack.length > 0  && t > stack[stack.length - 1][1]) {
                const [index, temp] = stack.pop();
                result[index] = i - index;
            }
            stack.push([i, t]);
        }

        return result;
    }
}
