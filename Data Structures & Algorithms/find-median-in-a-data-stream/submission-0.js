class MedianFinder {
    smallHeap = new MaxPriorityQueue();
    largeHeap = new MinPriorityQueue();
    constructor() {

    }

    /**
     *
     * @param {number} num
     * @return {void}
     */
    addNum(num) {
        this.smallHeap.enqueue(num);
        if(this.smallHeap.size() > this.largeHeap.size() + 1) {
            this.largeHeap.enqueue(this.smallHeap.dequeue());
        } else if (!this.largeHeap.isEmpty() && (this.smallHeap.size() === this.largeHeap.size() + 1)) {
            if(this.smallHeap.front() > this.largeHeap.front()) {
                const left = this.smallHeap.dequeue(),
                right = this.largeHeap.dequeue();
                this.smallHeap.enqueue(right);
                this.largeHeap.enqueue(left);
            }
        }
    }

    /**
     * @return {number}
     */
    findMedian() {
        if(this.smallHeap.size() === this.largeHeap.size() + 1) {
            return this.smallHeap.front();
            
        } else if (this.largeHeap.size() === this.smallHeap.size() + 1) {
            return this.largeHeap.front();
        }
        return (this.smallHeap.front() + this.largeHeap.front())/2;
        
    }
}
