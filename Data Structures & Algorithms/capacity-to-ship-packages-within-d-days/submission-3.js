class Solution {
    /**
     * @param {number[]} weights
     * @param {number} days
     * @return {number}
     */
    shipWithinDays(weights, days) {
        function canShip(w) {
            let d = 1, curSum = 0;
            for(const weight of weights) {
                curSum += weight;
                if(curSum > w) {
                    curSum = weight;
                    d++;
                }
            }
            return (d > days) ? false : true;
        }

        let l = Math.max(...weights),
            r = weights.reduce((a, b) => a + b, 0);
        
        let res = 0;
        while(l < r) {
            let m = l + Math.floor((r-l)/2);
            if(canShip(m)) {
                r = m;
                res = m;
            } else {
                l = m + 1;
            }
        }
        return l;
    }
}
