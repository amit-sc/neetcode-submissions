class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    singleNumber(nums) {

        let res = 0
        for(let ele of nums)        {
            res = res ^ ele
        }

        return res
    }
}
