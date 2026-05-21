class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        return strs.map(str=>`${str.length}#${str}`).join('');
    }

    /**
     * @param {string} str 3#asd4#asdf
     * @returns {string[]}
     */
    decode(str) {
        const arr = [];
        for(let i = 0; i < str.length; ) {
            let j = i;
            while(str[j] !== '#'){
                j++
            }
            let len = Number(str.substring(i, j));
            j++;
            let s = str.substring(j, j + len);
            arr.push(s);
            i = j + len;
        }
        return arr;
    }
}
