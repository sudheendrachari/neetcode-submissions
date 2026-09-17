class KthLargest {
    /**
     * @param {number} k
     * @param {number[]} nums
     */
    constructor(k, nums) {
        this.k = k;
        this.heap = new MinPriorityQueue();
        for(const num of nums) {
            this.heap.push(num);
        }
        while(this.heap.size() > k) {
            this.heap.pop();
        }
    }

    /**
     * @param {number} val
     * @return {number}
     */
    add(val) {
        this.heap.push(val);
        if(this.heap.size() > this.k) {
            this.heap.pop();
        }
        return this.heap.front();
    }
}
