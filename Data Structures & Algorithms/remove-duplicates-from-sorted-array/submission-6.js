class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    removeDuplicates(nums) {
        let obj = {}

        for(let ele of nums){
            obj[ele] = (obj[ele] || 0) + 1
        }

        nums.length = 0
        nums.push(...Object.keys(obj).sort((a,b) => a-b))
        return nums.length

    }
}
