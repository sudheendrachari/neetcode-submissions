class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if(s.length !== t.length) return false;
        const count = new Map();
        for (let i = 0; i < s.length; i++) {
            const x = s[i],
                y = t[i];
            count.set(x, count.has(x) ? count.get(x) + 1 : 1);
            count.set(y, count.has(y) ? count.get(y) - 1:  -1);
        }
        for(const [k, c] of count) {
            if (c > 0) {
                return false;
            }
        }
        return true;
    }
}
