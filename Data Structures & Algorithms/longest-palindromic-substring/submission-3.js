class Solution {
    /**
     * @param {string} s
     * @return {string}
     */
    // 1 Bruteforce
    longestPalindrome(s) {
        if(s.length === 1) return s;
        function isPalindrome(str) {
            let i = 0, j = str.length-1;
            while(i<=j) {
                if(str[i] !== str[j]) return false;
                i++;
                j--;
            }
            return true;
        }
        let max = '';
        for(let i = 0; i<s.length; i++) {
            for(let j = i+1; j<=s.length; j++) {
                const isP = isPalindrome(s.slice(i,j));
                if(isP && max.length < (j-i)) {
                    max = s.slice(i,j);
                }
            }
        }
        return max;
    }
}
