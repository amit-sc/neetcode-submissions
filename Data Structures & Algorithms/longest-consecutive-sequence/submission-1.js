class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {

        if(nums.length == 0) return 0

        let set = [...new Set(nums)]
        set.sort((a,b) => b-a)

        let count = 0
        let max = 0
        for(let i = 0; i < set.length; i++){
            if(set[i]-1 == set[i+1]){
                count = count + 1
            }
            else{
                max = count > max ? count : max;
                count = 0
            }
        }

        return max+1
        
    }
}
