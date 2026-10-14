class Solution {
    /**
     * @param {number[]} weights
     * @param {number} days
     * @return {number}
     */
    shipWithinDays(weights, days) {
        let left = Math.max(...weights);
        let right = weights.reduce((a,b) => a+b, 0);
        function canShip(capacity) {
            let d = 0, currentWeight = 0;
            for(const w of weights) {
                currentWeight += w;
                if(currentWeight > capacity) {
                    d++;
                    currentWeight = w;
                }
            }
            return (d+1) <= days;
        }
        
        let res = right;
        while (left <=right) {
            const mid = left + Math.floor((right - left)/2);
            if(canShip(mid)) {
                res = Math.min(mid, res);
                right = mid - 1;
            } else {
                left = mid + 1;
            }
        }
        return res;

    }
}
