class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const hash = {};
        let found = false;
        for(const n of nums) {
            if(hash[n]) {
                found =  true;
                break;
            }
            hash[n] = true;
        }
        return found;
    }
}
