class Solution {
    /**
     * @param {number[]} nums
     * @param {number} val
     * @return {number}
     */
    removeElement(nums, val) {
        let newArr = nums.filter(ele => ele !== val)
        nums.length = 0
        nums.push(...newArr)
        return newArr.length;
    }
}
