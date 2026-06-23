class Solution {
    /**
     * @param {string[]} strs
     * @return {string}
     */
    longestCommonPrefix(strs) {
        let min_str = strs.reduce((acc, ele) => {
            if(acc.length < ele.length){
                return acc
            }
            return ele
        })

        let res = ""
        let result = ""
        for(let i = 0; i < min_str.length; i++){
            res += min_str[i]
            if(strs.every(ele => ele.includes(res))){
               result = res 
            }
            else{
                break
            }
        }

        return result

    }
}
