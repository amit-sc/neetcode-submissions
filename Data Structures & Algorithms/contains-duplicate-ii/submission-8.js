class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {boolean}
     */
    containsNearbyDuplicate(nums, k) {
        
        // let bool = false
        let map = new Map()

        for(let i = 0; i < nums.length; i++){
            if(map.has(nums[i]) && Math.abs(i - map.get(nums[i])) <= k){
                return true
            }
            else{
                map.set(nums[i], i)
            }
        }

        return false
    }
}
