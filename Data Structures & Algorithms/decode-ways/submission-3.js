class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    numDecodings(str) {
        const m = new Map();
        function isValidOne(c) {
            return c !== '0';
        }
        function isValidTwo(a, b) {
            if(a === '1') return true;
            if(a === '2') return (Number(b) < 7);
            return false;
        }
        function dp(i){
            if(m.has(i)) return m.get(i);
            if(!isValidOne(str[i])) return 0;
            if(i === str.length) return 1;
            let res = dp(i+1);
            if( i+1 <= (str.length-1) && isValidTwo(str[i], str[i+1])) {
                res += dp(i+2)
            }
            m.set(i, res);
            return res;
        }

        return dp(0);
    }
}
