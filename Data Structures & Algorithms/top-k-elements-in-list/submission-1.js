class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        let obj = {}
        for(let ele of nums){
            obj[ele] = (obj[ele] || 0) + 1
        }

        let sortedValueArr = Object.entries(obj).sort((a,b) => b[1]-a[1])

        return sortedValueArr.slice(0,k).map(ele => Number(ele[0]))
        
    }
}
