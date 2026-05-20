class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        const f1 = {};
        for (const c of s) {
            if(!f1[c]) {
                f1[c] = 0;
            }
            f1[c]++;
        }
        for(const x of t) {
            if(!f1[x]) {
                return false;
            }
            f1[x]--;
        }
        for(const y in f1) {
            if(f1[y]) {
                return false;
            }
        }
        return true;
    }
}
