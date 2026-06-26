class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if(s.length !== t.length) return false;
        const count = new Map();
        for(let i = 0; i<s.length; i++) {
            if(!count.has(s[i])) count.set(s[i], 0);
            if(!count.has(t[i])) count.set(t[i], 0);
            count.set(s[i], count.get(s[i]) + 1 );
            count.set(t[i], count.get(t[i]) - 1 );
        }
        for(const [key, val] of count) {
            if(val !== 0) return false;
        }
        return true;
    }
}
