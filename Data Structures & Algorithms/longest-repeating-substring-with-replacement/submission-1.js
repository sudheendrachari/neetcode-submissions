class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        let l = 0;
        const sFreq = new Map();
        let res = 0;
        for(let r = 0; r < s.length; r++) {
            sFreq.set(s[r], (sFreq.get(s[r]) || 0) + 1);
            
            if( (r-l+1) - Math.max(...sFreq.values()) > k) {
                sFreq.set(s[l], sFreq.get(s[l]) - 1);
                l++;
            }

            res = Math.max(res, (r-l+1));
        }
        return res;
    }
}
