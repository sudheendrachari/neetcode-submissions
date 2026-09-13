class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(str) {
        const parenMap = new Map([
            [')', '('],
            ['}', '{'],
            [']', '[']
        ]);
        const seen = [];
        for(let i = 0; i <str.length; i++) {
            const char = str[i];
            if(parenMap.has(char)) {
                const expected = seen.pop();
                if(expected !== parenMap.get(char)) {
                    return false;
                }
            } else {
                seen.push(char);
            }
        }
        return seen.length === 0;
    }
}
