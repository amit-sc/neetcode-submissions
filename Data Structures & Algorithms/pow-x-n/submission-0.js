class Solution {
    /**
     * @param {number} x
     * @param {number} n
     * @return {number}
     */
    myPow(x, n) {
        if(n == 0) return 1

        else if(n > 0){
            let res = 1
            for(let i = 0; i < n; i++){
                res = res * x
            }
            return res
        }

        else if(n < 0){
            let res = 1
            for(let i = 0; i < -n; i++){
                res = res * x
            }
            return 1/res
        }
    }
}
