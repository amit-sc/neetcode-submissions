class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    singleNumber(nums) {
        nums.sort((a,b) => a-b)

        for(let i = 0; i < nums.length; i++){
            if(nums[i] == nums[i+1] || nums[i-1] == nums[i]){
                continue
            }
            else{
                return nums[i]
            }
        }
    }
}
