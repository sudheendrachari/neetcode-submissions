class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        const parts = [];
        for(const word of strs) {
            parts.push(word.length);
            parts.push('#');
            parts.push(word);
        }
        return parts.join('');
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        const res = [];
        let i = 0, n = str.length;
        while(i<n) {
            let j = i;
            while(j<n && str[j]!== '#') {
                j++;
            }
            const len = Number(str.slice(i,j));
            j++;
            res.push(str.slice(j, j+len));
            i = j+len;

        }
        return res;
    }
}
