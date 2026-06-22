class Solution {
    /**
     * @param {number[]} nums
     * @param {number} val
     * @return {number}
     */
    removeElement(nums, val) {
        let newArr = nums.filter(ele => ele !== val)
        nums.splice(0, newArr.length, ...newArr)

        // let n = nums.length
        // let n2 = newArr.length

        // nums.push(...Array(n-n2).fill(val))

        // let count = 0
        // for(let i = 0; i < nums.length; i++){
        //     if(nums[i] === val){
        //         nums.splice(i, 1)
        //         nums.push(val)
        //         count = count + 1
        //     }
        // }

        return newArr.length;
    }
}
