class Node {
    int key;
    int val;
    Node prev;
    Node next;
    public Node(int key, int val) {
        this.key = key;
        this.val = val;
        this.prev = null;
        this.next = null;
    }
}

class LRUCache {
    private int cap;
    private Node start;
    private Node end;
    private HashMap<Integer, Node> cache;


    public LRUCache(int capacity) {
        this.cap = capacity;
        this.start = new Node(0,0);
        this.end = new Node(0,0);
        this.start.next = this.end;
        this.end.prev = this.start;
        this.cache = new HashMap<>();
    }

    private void remove(Node node) {
        Node prev = node.prev;
        Node next = node.next;
        prev.next = next;
        next.prev = prev;
    }

    private void insert(Node node) {
        Node prev = this.end.prev;
        prev.next = node;
        node.prev = prev;
        this.end.prev = node;
        node.next = this.end;
    }

    
    public int get(int key) {
        if(this.cache.containsKey(key)) {
            Node current = this.cache.get(key);
            this.remove(current);
            this.insert(current);
            return current.val;
        }
        return -1;
    }
    
    public void put(int key, int value) {
        if(this.cache.containsKey(key)) {
            this.remove(this.cache.get(key));
        }
        Node newNode = new Node(key, value);
        this.cache.put(key, newNode);
        this.insert(newNode);
        if(this.cache.size() > this.cap) {
            Node lru = this.start.next;
            this.remove(lru);
            this.cache.remove(lru.key);
        }
    }
}
