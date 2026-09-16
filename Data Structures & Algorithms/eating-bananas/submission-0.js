class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */
    minEatingSpeed(piles, h) {
        function isValid(k) {
            let time = 0;
            for(let i = 0; i <piles.length; i++) {
                time += Math.ceil( piles[i] / k );
                if(time > h) {
                    return false;
                }
            }
            return true;
        }
        
        const max = Math.max(...piles);
        let L = 1, R = max;
        let result;
        while(L <= R) {
            let mid = Math.floor((L+R)/2);
            if(isValid(mid)) {
                result = mid;
                R = mid - 1;
            } else {
                L = mid + 1;
            }

        }
        return result;
    }
}
