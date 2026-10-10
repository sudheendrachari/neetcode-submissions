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
            let isFirstRowZero = false;

        for(let i = 0 ; i < rows ; i++) {
            for(let j = 0; j < cols ; j++) {
                if(matrix[i][j] === 0) {
                    matrix[0][j] = 0;
                    if(i === 0) {
                        isFirstRowZero = true;
                    } else {
                        matrix[i][0] = 0;
                    }
                }
            }
        }

        for(let i = 1 ; i < rows ; i++) {
            for(let j = 1; j < cols ; j++) {
                if(matrix[0][j] === 0 || matrix[i][0] === 0) {
                    matrix[i][j] = 0;
                }
            }
        }

        if(matrix[0][0] === 0) {
            for(let i = 1; i < rows; i++) {
                matrix[i][0] = 0;
            }
        }
        if(isFirstRowZero) {
            for(let i = 0; i < cols; i++) {
                matrix[0][i] = 0;
            }            
        }

    }
}
