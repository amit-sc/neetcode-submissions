class Solution {
    /**
     * @param {number[][]} matrix
     * @return {number[][]}
     */
    transpose(matrix) {
        let rows = matrix.length;
        let cols = matrix[0].length;
        let res = []

        for(let j = 0; j < cols; j++){
            let newRow = []
            for(let i = 0; i < rows; i++){
                newRow.push(matrix[i][j])
            }
            res.push(newRow)
        }

        return res
        
    }
}
