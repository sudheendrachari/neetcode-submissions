class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {string}
     */
    minWindow(s, t) {
        const tFreq = new Map();
        const wFreq = new Map();
        for (const ch of t) {
            tFreq.set(ch, (tFreq.get(ch) || 0) + 1);
        }
        const need = tFreq.size;
        let have = 0;
        let left = 0,
            windowStart = 0,
            windowSize = Infinity;
        for (let right = 0; right < s.length; right++) {
            if (tFreq.has(s[right])) {
                wFreq.set(s[right], (wFreq.get(s[right]) || 0) + 1);
                if(wFreq.get(s[right]) === tFreq.get(s[right])) {
                    have++;
                }
            }

            while(have === need) {
                const curWinSize = right - left + 1;
                if(curWinSize < windowSize) {
                    windowStart = left;
                    windowSize = curWinSize;
                }
                if(tFreq.has(s[left])){
                    wFreq.set(s[left], wFreq.get(s[left]) - 1);
                    if(wFreq.get(s[left]) < tFreq.get(s[left])) {
                        have--;
                    }
                }
                left++;
            }

        }
        if(windowSize === Infinity) return '';
        return s.substring(windowStart, windowStart + windowSize);
    }
}
