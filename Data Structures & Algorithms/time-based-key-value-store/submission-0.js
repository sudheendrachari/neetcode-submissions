class Entry {
    constructor(val, ts) {
        this.val = val;
        this.ts = ts;
    }
}
class TimeMap {
    constructor() {
        this.keyStore = new Map();
    }

    /**
     * @param {string} key
     * @param {string} value
     * @param {number} timestamp
     * @return {void}
     */
    set(key, value, timestamp) {
        if(!this.keyStore.has(key)) this.keyStore.set(key, []);
        const entry = new Entry(value, timestamp);
        const values = this.keyStore.get(key);
        values.push(entry);
    }

    /**
     * @param {string} key
     * @param {number} timestamp
     * @return {string}
     */
    get(key, timestamp) {
        const values = this.keyStore.get(key);
        if(!values) return "";
        let left = 0, right = values.length - 1;
        let best = "";
        while (left <= right) {
            const mid = left + Math.floor((right - left)/2);
            const entry = values[mid];
            if(timestamp < entry.ts) {
                right = mid - 1;
            } else if (entry.ts < timestamp) {
                best = entry.val;
                left = mid + 1;
            } else {
                return entry.val;
            }
        }
        return best;
    }
}
