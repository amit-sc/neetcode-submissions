class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        let res = []
        let product = nums.reduce((acc, ele) => {
            if(ele == 0){
                return acc
            }
            return acc*ele
        },1)

        if(nums.includes(0)){
            if(nums.indexOf(0) != nums.lastIndexOf(0)){
                res = nums.map(ele => ele*0)
                return res
            }
            res = nums.map(ele => {
                if(ele == 0){
                    return product
                }
                else{
                    return 0
                }
            })
        }
        else{
            res = nums.map(ele => product/ele)
        }


        return res
    }
}
