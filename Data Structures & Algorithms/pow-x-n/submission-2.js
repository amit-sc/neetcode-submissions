class Solution {
    /**
     * @param {number} x
     * @param {number} n
     * @return {number}
     */
    myPow(x, n) {

        let res = 1
        for(let i = 0; i < Math.abs(n); i++){
            res = res * x
        }
        
        if(n < 0) return 1/res
        else return res
        

    }
}
