class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    majorityElement(nums) {
        let obj = {}

        for(let ele of nums){
            obj[ele] = (obj[ele] || 0) + 1
        }

        let majority_ele = Math.ceil(nums.length / 2)

        for(let ele in obj){
            if(obj[ele] >= majority_ele){
                return ele
            }
        }
    }
}
