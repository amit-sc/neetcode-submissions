class Solution {
    /**
     * @param {number[]} nums
     * @param {number} val
     * @return {number}
     */
    removeElement(nums, val) {
        let newArr = nums.filter(ele => ele !== val)

        let n = nums.length
        let n2 = newArr.length

        nums.splice(0, n, ...newArr)
        nums.push(...Array(n-n2).fill(val))

        return n2;
    }
}
