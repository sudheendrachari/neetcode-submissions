class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     * 0 1 2 3 4
     * z a b c
     *   b a c
     */
    checkInclusion(s1, s2) {
        function getFreqMap(str) {
            const f = new Array(26).fill(0);
            const aCode = 'a'.charCodeAt(0);
            for(let i = 0; i < str.length; i++) {
                const index = str[i].charCodeAt(0) - aCode;
                f[index]++;
            }
            return f.join('-');
        }
        const l1 = s1.length, l2 = s2.length;
        if( l2 < l1) {
            return false;
        }
        const s = s1, l = s2;
        const sFreq = getFreqMap(s);
        let found = false;
        const sLen = s.length;
        for(let i = 0; i <l.length; i++) {
            if((i + sLen -1) <= l.length -1) {
                const str = l.substring(i, i+sLen);
                if(sFreq === getFreqMap(str)) {
                    found = true;
                    break;
                }
            }
        }
        return found;
    }
}
