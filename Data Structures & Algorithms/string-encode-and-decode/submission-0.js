class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let res = '';
        for(const word of strs) {
            for(const ch of word) {
                res+= ch.codePointAt(0);
                res+=','
            }
            res+=':'
        }
        return res;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        const res = [];
        let l = '';
        let word = '';
        for(const ch of str) {
            if(ch === ',') {
                word+= String.fromCodePoint(l);
                l = '';
                continue;
            }
            if(ch === ':') {
                res.push(word);
                word = '';
                continue;
            }
            l+= ch;
        }
        return res;
    }
}
