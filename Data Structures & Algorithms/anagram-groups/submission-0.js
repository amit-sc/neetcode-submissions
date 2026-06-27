class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        let obj = {}

        for(let ele of strs){
            let item = ele.split("").sort().join("");

            if(!obj[item]){
                obj[item] = []
            }

            obj[item].push(ele)
        }

        return Object.values(obj)
    }
}
