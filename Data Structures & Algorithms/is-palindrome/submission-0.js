class Solution {

    isAlphanumeric(char) {
        return (
            (char >= 'a' && char <= 'z') ||
            (char >= 'A' && char <= 'Z') ||
            (char >= '0' && char <= '9')
        );
    }

    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(str) {
        let l = 0, r = str.length -1;
        while(l<r) {
            while(l<r && !this.isAlphanumeric(str[l])) l++;
            while(l<r && !this.isAlphanumeric(str[r])) r--;
            if(str[l].toLowerCase() !== str[r].toLowerCase()) {
                return false;
            }
            l++;
            r--;
        }
        return true;
    }
}
