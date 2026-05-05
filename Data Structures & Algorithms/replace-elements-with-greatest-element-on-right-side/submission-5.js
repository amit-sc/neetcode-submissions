class Solution {
    /**
     * @param {number[]} arr
     * @return {number[]}
     */
    
    replaceElements(arr) {
        let arr2 = []
        while(arr.length != 1)
        {
            arr.shift()
            arr2.push(Math.max(...arr))
        }
        arr2.push(-1)
        return arr2
    }
}
