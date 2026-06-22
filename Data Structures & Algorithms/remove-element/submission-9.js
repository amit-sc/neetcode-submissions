class Solution {
    /**
     * @param {number[]} nums
     * @param {number} val
     * @return {number}
     */
    removeElement(nums, val) {
        let newArr = nums.filter(ele => ele !== val)
        nums.splice(0, newArr.length, ...newArr)
        return newArr.length;
    }
}
