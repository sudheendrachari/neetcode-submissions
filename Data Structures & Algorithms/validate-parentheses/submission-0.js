class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        const ops = [];
        const paranMap = new Map([[']', '['],['}', '{'],[')','(']]);
        const openParans = new Set(['[', '{', '(']);
        for(let i = 0; i < s.length; i++) {
            const char = s[i];
            if(openParans.has(char)) {
                ops.push(char);
            } else {
                const x = ops.pop();
                if(x !== paranMap.get(char)) {
                    return false;
                }
            }
        }
        return ops.length === 0;
    }
}
