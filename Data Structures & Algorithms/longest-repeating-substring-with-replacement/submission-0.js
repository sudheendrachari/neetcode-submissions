class Solution {
    /**
     * @param {string} s
     * @param {number} k = 2
     * @return {number} 
     * "xyyx"
     *  
     * r = 0
     * freq {x:1}
     * 
     * r = 1
     * freq {x:1, y:1} -> 1
     * 
     * r = 2
     * freq {x:1, y:2} -> 2
     * 
     * r = 3
     * freq {x:2, y:2} -> 2
     * 
     */
    characterReplacement(s, k) {
        let l = 0, maxFreq = 0, maXwindowSize = 0;
        let freq = new Map();
        for(let r = 0; r<s.length; r++) {
            freq.set(s[r], (freq.get(s[r]) || 0) + 1);
            maxFreq = Math.max(maxFreq, freq.get(s[r]));
            if( (r-l+1) > k + maxFreq) {
                freq.set(s[l], freq.get(s[l]) - 1);
                l++;
            }
            maXwindowSize = Math.max((r-l+1), maXwindowSize);
        }
        return maXwindowSize;
    }
}
