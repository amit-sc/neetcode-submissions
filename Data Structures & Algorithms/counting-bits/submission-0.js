class Solution {
    /**
     * @param {number} n
     * @return {number[]}
     */
    countBits(n) {
        let res = []
        for(let i = 0; i <= n; i++){
            let binN = i.toString(2).split("").reduce((acc,ele) => {
                if(ele == 1){
                    return acc+1
                }
                return acc
            },0)
            res.push(binN)
        }

        return res
    }
}
