class HitCounter {
    records;
    constructor() {
        this.records = new Array(300).fill(null);
    }

    /**
     * @param {number} timestamp
     * @return {void}
     */
    hit(timestamp) {
        const index = timestamp % 300;
        const record = this.records[index];
        if(record?.timestamp === timestamp) {
            record.count++;
        } else {
            this.records[index] = {
                timestamp,
                count: 1
            }
        }
    }

    /**
     * @param {number} timestamp
     * @return {number}
     */
    getHits(timestamp) {
        let total = 0;
        for(const record of this.records) {
            if(!record) continue;
            if(timestamp - record.timestamp < 300) {
                total += record.count;
            }
        }
        return total;
    }
}

/**
 * Your HitCounter object will be instantiated and called as such:
 * var obj = new HitCounter()
 * obj.hit(timestamp)
 * var param_2 = obj.getHits(timestamp)
 */
