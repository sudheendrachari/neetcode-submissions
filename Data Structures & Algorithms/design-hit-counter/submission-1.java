class Record {
    int timestamp;
    int count;
    public Record(int timestamp, int count) {
        this.timestamp = timestamp;
        this.count = count;
    }
}
class HitCounter {
    private ArrayList<Record> records;
    public HitCounter() {
        this.records = new ArrayList<>(Collections.nCopies(300, null));
    }
    
    public void hit(int timestamp) {
        int index = timestamp % 300;
        Record current = this.records.get(index);
        if(current != null && current.timestamp == timestamp) {
            current.count++;
        } else {
            this.records.set(index, new Record(timestamp, 1));
        }
    }
    
    public int getHits(int timestamp) {
        int total = 0;
        for(Record record: this.records ) {
            if(record == null) continue;
            if(timestamp - record.timestamp < 300) {
                total += record.count;
            }
        }
        return total;
    }
}

/**
 * Your HitCounter object will be instantiated and called as such:
 * HitCounter obj = new HitCounter();
 * obj.hit(timestamp);
 * int param_2 = obj.getHits(timestamp);
 */
