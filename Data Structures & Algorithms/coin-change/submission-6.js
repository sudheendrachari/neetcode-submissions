class Solution {
    /**
     * @param {number[]} coins
     * @param {number} amount
     * @return {number}
     */
    // BFS
    coinChange(coins, amount) {
        if (amount === 0) return 0;
        const q = []; // [num_of_coins, balance]
        const visited = new Set([amount]);
        for (const coin of coins) {
            const nextBal = amount - coin;
            if (nextBal >= 0 && !visited.has(nextBal)) {
                visited.add(nextBal)
                q.push([1, amount - coin]);
            }
        }

        let head = 0;

        while (head < q.length) {
            const levelSize = q.length - head;
            for (let i = 0; i < levelSize; i++) {
                const [count, bal] = q[head++];
                if (bal === 0) {
                    return count;
                }
                for (const coin of coins) {
                    const nextBal = bal - coin;
                    if (nextBal >= 0 && !visited.has(nextBal)) {
                        visited.add(nextBal);
                        q.push([count + 1, nextBal]);
                    }
                }
            }
        }
        return -1;
    }
}
