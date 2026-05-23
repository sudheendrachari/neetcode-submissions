class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {string}
     */
    minWindow(s, t) {
        const tMap = new Map();
        [...t].forEach(char => {
            tMap.set(char, (tMap.get(char) || 0)+1);
        });
        let l = 0;
        let remainingMatches = tMap.size;
        let windowSize = Infinity, windowStart = 0;
        const windowMap = new Map();
        for(let r = 0; r<s.length; r++) {
            let ch = s[r];
            windowMap.set(ch, (windowMap.get(ch) || 0)+1);
            // check if ch freq is matching or not?
            if(windowMap.get(ch) == tMap.get(ch)) remainingMatches--;
            while(remainingMatches == 0) {
                if((r-l+1) < windowSize) {
                    windowSize = r-l+1;
                    windowStart = l;
                }
                windowMap.set(s[l], windowMap.get(s[l])-1);
                if(windowMap.get(s[l]) < tMap.get(s[l])) remainingMatches++;
                l++;
            }
        }
        if(windowSize === Infinity) {
            return '';
        }
        return s.slice(windowStart, windowStart+windowSize);
    }
}
