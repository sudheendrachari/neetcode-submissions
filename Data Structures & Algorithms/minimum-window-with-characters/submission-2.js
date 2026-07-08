class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {string}
     */
    minWindow(s, t) {
        const tFreq = new Map();
        for(let i = 0; i < t.length; i++) {
            tFreq.set(t[i], (tFreq.get(t[i]) || 0)+1);
        }
        let have = 0, need = tFreq.size;
        let start = 0, windowSize = Infinity;
        let l = 0;
        const wFreq = new Map();
        for(let r = 0; r<s.length; r++) {
            const rCh = s[r];
            if(tFreq.has(rCh)) {
                wFreq.set(rCh, (wFreq.get(rCh) || 0)+1);
                if(wFreq.get(rCh) === tFreq.get(rCh)) {
                    have++;
                }
            }
            while(have === need) {
                const curSize = r-l+1;
                if(curSize < windowSize) {
                    windowSize = curSize;
                    start = l;
                }
                let lCh = s[l];
                if(wFreq.has(lCh)) {
                    wFreq.set(lCh, (wFreq.get(lCh))-1);
                    if(wFreq.get(lCh) < tFreq.get(lCh)) {
                        have--;
                    }
                }
                l++;
            }
        }
        if(windowSize === Infinity) return '';
        return s.substring(start, start+windowSize);
    }
}
