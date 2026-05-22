class Solution {

    isAlphaNumeric(char) {
        return /^[a-z0-9]$/i.test(char);
    }

    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        const str = s;
        const len = str.length;
        let i = 0, j = len - 1;
        while (i<=j) {
            while(i < j && !this.isAlphaNumeric(str[i])) i++;
            while(i < j && !this.isAlphaNumeric(str[j])) j--;
            if(str[i].toLowerCase() !== str[j].toLowerCase()) return false;
            i++;
            j--;
        }
        return true;
    }
}
