class RandomizedSet {
    constructor() {
        this.arr = [];
        this.map = new Map();
    }

    /**
     * @param {number} val
     * @return {boolean}
     */
    insert(val) {
        if(this.map.has(val)) return false;
        this.arr.push(val);
        this.map.set(val, this.arr.length - 1);
        return true;
    }

    /**
     * @param {number} val
     * @return {boolean}
     */
    remove(val) {
        if(!this.map.has(val)) return false;
        const index = this.map.get(val);
        const lastVal = this.arr[this.arr.length - 1];
        this.arr[index] = lastVal;
        this.map.set(lastVal, index);

        this.arr.pop();
        this.map.delete(val);
        return true;
    }

    /**
     * @return {number}
     */
    getRandom() {
        const randomIndex = Math.floor(
            Math.random() * this.arr.length
        );
        return this.arr[randomIndex];
    }
}

/**
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = new RandomizedSet()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */
