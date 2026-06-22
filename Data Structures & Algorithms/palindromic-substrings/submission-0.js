class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    countSubstrings(str) {
        let count = 0;
        for(let i = 0; i<str.length; i++) {
            let l = i, r = i;
            // odd length
            while(str[l] === str[r] && l >=0 && r <= str.length-1) {
                count++;
                l--;
                r++;
            }

            l = i, r = i+1;
            // even length
            while(str[l] === str[r] && l >=0 && r <= str.length-1) {
                count++;
                l--;
                r++;
            }            
        }
        return count;
    }
}
