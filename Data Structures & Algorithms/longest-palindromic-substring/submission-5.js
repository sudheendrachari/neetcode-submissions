class Solution {
    /**
     * @param {string} s
     * @return {string}
     */
    // 1 Bruteforce O(n ^ 3) -> O(n) for isPalindrome and O(n*n) for the for loops
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
        let res = '', resLen = 0;
        for(let i = 0; i < str.length; i++) {
            // odd length
            let l = i, r = i;
            while(l >=0 && r < str.length && (str[l] === str[r])) {
                if(res.length < (r-l+1)) {
                    res = str.slice(l, r+1);
                }
                l--;
                r++
            }
            // even length

            l = i, r = i+1;
            while(l >=0 && r < str.length && (str[l] === str[r])) {
                if(res.length < (r-l+1)) {
                    res = str.slice(l, r+1);
                }
                l--;
                r++;
            }
        }
        return res;
    }


}
