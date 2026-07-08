class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {string}
     */
    minWindow(s, t) {
        const tFreq = new Map();
        for(let i = 0; i<t.length; i++) {
            tFreq.set(t[i], (tFreq.get(t[i]) || 0) + 1);
        }
        let windowSize = s.length + 1;
        let l = 0;
        let minL = 0;
        const wFreq = new Map();
        let have = 0, need = tFreq.size;
        for(let r = 0; r<s.length; r++) {
            let curWinSize = r-l+1;
            let ch = s[r];
            if(tFreq.has(ch)) {
                wFreq.set(ch, (wFreq.get(ch) || 0) + 1);
                if(wFreq.get(ch) === tFreq.get(ch)) {
                    have++;
                }
            }

            if(have === need) {
                while(have === need) {
                    if((r-l+1) < windowSize) {
                        windowSize = r-l+1;
                        minL = l;
                    }
                    const lCh = s[l];
                    if(wFreq.has(lCh)) {
                        wFreq.set(lCh, wFreq.get(lCh) - 1);
                        if(wFreq.get(lCh) < tFreq.get(lCh))  have--;
                    }
                    l++;
                }
            }

        }
        if(windowSize === s.length+1) return "";
        return s.substring(minL, minL+windowSize);
    }
}
