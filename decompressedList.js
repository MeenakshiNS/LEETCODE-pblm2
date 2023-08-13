// EXAMPLE:

// INPUT:nums=[1,2,3,4]
// OUTPUT:[2,4,4,4]

// Explanation:
// first pair [1,2] and second pair [3,4]

// in first pair freq=1,val=2    =>[2]
// in second pair freq=3,val=4   =>[4,4,4]
// so the concatenated array=>[2,4,4,4]



function generateArray(freq,val){
    return new Array(freq).fill(val)
}


let nums=[1,2,3,4]
let outputArr=[]

for(let i=0;i<nums.length;i+=2){
    let j=i+1
    let subArray=generateArray(nums[i],nums[j])  //[2]            [4,4,4]
    outputArr=outputArr.concat(subArray)   //[2,4,4,4]

     
}
console.log(outputArr);