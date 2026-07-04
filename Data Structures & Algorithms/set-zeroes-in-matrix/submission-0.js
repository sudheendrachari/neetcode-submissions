class Solution {
    /**
     * @param {number[][]} matrix
     * @return {void}
     */
    // setZeroes(matrix) {
    //     const rows = matrix.length,
    //         cols = matrix[0].length,
    //         zeroRows = new Set(),
    //         zeroCols = new Set();

    //     for (let r = 0; r < rows; r++) {
    //         for (let c = 0; c < cols; c++) {
    //             if (matrix[r][c] === 0) {
    //                 zeroRows.add(r);
    //                 zeroCols.add(c);
    //             }
    //         }
    //     }
    //     for (let r = 0; r < rows; r++) {
    //         for (let c = 0; c < cols; c++) {
    //             if (zeroRows.has(r) || zeroCols.has(c)) {
    //                 matrix[r][c] = 0
    //             }
    //         }
    //     }
    //     return matrix;
    // }

    // With O(1) space, instead of earlier O(m+n) space
    setZeroes(matrix) {
        const rows = matrix.length,
            cols = matrix[0].length;
        let isFirstRowZero = false, isFirstColZero = false;
        for (let r = 0; r < rows; r++) {
            for (let c = 0; c < cols; c++) {
                if(matrix[r][c] === 0) {
                    matrix[r][0] = 0;
                    matrix[0][c] = 0
                    if(r === 0) isFirstRowZero = true;
                    if(c === 0) isFirstColZero = true;
                }
            }
        }
        for (let r = 1; r < rows; r++) {
            for (let c = 1; c < cols; c++) {
                if(matrix[r][0] === 0 || matrix[0][c] === 0) {
                    matrix[r][c] = 0
                }
            }
        }
        for (let c = 0; c < cols; c++) {
            if(isFirstRowZero) matrix[0][c] = 0;
        }
        for (let r = 0; r < rows; r++) {
            if(isFirstColZero) matrix[r][0] = 0;
        }

    }
}
