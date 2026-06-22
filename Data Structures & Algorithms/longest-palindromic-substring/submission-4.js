class Solution {
    /**
     * @param {string} s
     * @return {string}
     */
    // 1 Bruteforce
    // longestPalindrome(s) {
    //     if(s.length === 1) return s;
    //     function isPalindrome(str) {
    //         let i = 0, j = str.length-1;
    //         while(i<=j) {
    //             if(str[i] !== str[j]) return false;
    //             i++;
    //             j--;
    //         }
    //         return true;
    //     }
    //     let max = '';
    //     for(let i = 0; i<s.length; i++) {
    //         for(let j = i+1; j<=s.length; j++) {
    //             const isP = isPalindrome(s.slice(i,j));
    //             if(isP && max.length < (j-i)) {
    //                 max = s.slice(i,j);
    //             }
    //         }
    //     }
    //     return max;
    // }

    // 2 DP - expand from center approach
    longestPalindrome(str) {
        let res = '', len = str.length;
        for(let i = 0; i<len; i++) {
            // odd length
            let l = i, r = i;
            while(str[l] === str[r] && l >=0 && r<=str.length-1){
                res = res.length < (r-l+1) ? str.slice(l, r+1) : res;
                l--;
                r++;
            }

            // even length
            l = i, r = i+1;
            while(str[l] === str[r] && l >=0 && r<=str.length-1){
                res = res.length < (r-l+1) ? str.slice(l, r+1) : res;
                l--;
                r++;
            }

        }
        return res;
    }

























}
