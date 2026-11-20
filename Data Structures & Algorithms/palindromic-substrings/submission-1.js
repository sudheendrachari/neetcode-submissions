class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    countSubstrings(str) {
        let res = 0;
        for (let i = 0; i < str.length; i++) {
            // odd length
            let l = i,
                r = i;
            while (l >= 0 && r < str.length && str[l] === str[r]) {
                res++;
                l--;
                r++;
            }
            // even length

            l = i,
            r = i + 1;
            while (l >= 0 && r < str.length && str[l] === str[r]) {
                res++;
                l--;
                r++;
            }
        }
        return res;
    }
}
