class Logger {
    THRESHOLD = 10;
    constructor() {
        this.messageMap = new Map();
    }

    /**
     * @param {number} timestamp
     * @param {string} message
     * @return {boolean}
     */
    shouldPrintMessage(timestamp, message) {
        if(this.messageMap.has(message)) {
            const prevTimestamp = this.messageMap.get(message);
            const shouldPrint = 
            timestamp >= (prevTimestamp  + this.THRESHOLD);
            if(shouldPrint) {
                this.messageMap.set(message, timestamp);
            }
            return shouldPrint;
        }
        this.messageMap.set(message, timestamp);
        return true;
    }
}

/**
 * Your Logger object will be instantiated and called as such:
 * var obj = new Logger()
 * var param_1 = obj.shouldPrintMessage(timestamp,message)
 */
