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
        if(this.largeHeap.isEmpty() || num > this.largeHeap.front()) {
            this.largeHeap.enqueue(num);
        } else {
            this.smallHeap.enqueue(num);
        }
        
        if(this.smallHeap.size() > this.largeHeap.size() + 1) {
            this.largeHeap.enqueue(this.smallHeap.dequeue());
        } else if(this.largeHeap.size() > this.smallHeap.size() + 1) {
            this.smallHeap.enqueue(this.largeHeap.dequeue());
        }
    }

    /**
     * @return {number}
     */
    findMedian() {
        if(this.smallHeap.size() > this.largeHeap.size()) {
            return this.smallHeap.front();
        } else if(this.largeHeap.size() > this.smallHeap.size()) {
            return this.largeHeap.front();
        } else {
            return (this.smallHeap.front() + this.largeHeap.front()) / 2
        }
        
    }
}
