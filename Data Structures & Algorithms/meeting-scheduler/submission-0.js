class Solution {
    /**
     * @param {number[][]} slots1
     * @param {number[][]} slots2
     * @param {number} duration
     * @return {number[]}
     */
    minAvailableDuration(slots1, slots2, duration) {
        slots1.sort((a, b) => a[0] - b[0]);
        slots2.sort((a, b) => a[0] - b[0]);
        let i = 0,
            j = 0;
        while (i < slots1.length && j < slots2.length) {
            const start = Math.max(slots1[i][0], slots2[j][0]);
            const end = Math.min(slots1[i][1], slots2[j][1]);

            if (end - start >= duration) {
                return [start, start + duration];
            }

            // Advance the interval that ends earlier
            if (slots1[i][1] < slots2[j][1]) {
                i++;
            } else {
                j++;
            }
        }
        return [];
    }
}
