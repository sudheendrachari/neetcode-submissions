class Solution {
    /**
     * @param {string} s
     * @param {string[]} wordDict
     * @return {boolean}
     */
    wordBreak(str, wordDict) {

        const dict = new Set(wordDict);
        const m = new Map();
        function isValid(s) {
            return dict.has(s);
        }

        function dp(i){
            if(i === str.length) return true;
            if(m.has(i)) return m.get(i);
            
            for(let j = i+1; j <= str.length; j++) {
                const valid = isValid(str.slice(i,j)) && dp(j);
                if(valid) {
                    m.set(i, true);
                    return true;
                }
            }
            m.set(i, false);
            return false;
        }

        return dp(0);
    }
}
