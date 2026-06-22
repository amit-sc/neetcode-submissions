class Solution {
    /**
     * @param {number[]} nums
     * @param {number} val
     * @return {number}
     */
    removeElement(nums, val) {
        let newArr = nums.filter(ele => ele !== val)

        let n = newArr.length
        let len = nums.length - newArr.length

        for(let i = 0; i < len; i++)
        {
            newArr.push(val)
        }

        nums.length = 0
        for(let ele of newArr){
            nums.push(ele)
        }

        return n;
    }
}
