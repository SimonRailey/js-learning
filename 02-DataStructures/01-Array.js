// array in js can be used to store hetrogeneous data

let myArr=[1,2,3,4,5,6,7,8,true,['a','b','c'],"Niladri"]

// accessing position using index; index in array of js start with 0

// console.log(myArr[5]) // 6 th element of array which is 6, clearly index_of_js+1

// console.log(myArr["6"]) // when "" is used js directly use index_of_js+1

// but console.log(myArr["06"]) will lead to undefined as "06" is string property

// console.log(myArr["06"])

// ***************************** Property of arrays*************************************************

/*
1. Length => arr.length()
2. Addition of element => arr.push(item1,item2,.....)
3. Removal of element =>  arr.pop() , removes last element of array
4. Get element by index => arr.at(index), returns value at index positon
5. Join two array => array1.concat(array2)
6. copy one element from a location to another location, it makes deep copy to another memeory location, and returns without
   modifying length, arr.copywithin(target,index_of_num_to be copied)
7. key,value pair => arr.entries
8. filling a range=> arr.fill(vale,start_Range_end_range)
9. filter => filter an array based on some condition; it first creates deep copy then do it
    arr.filter(callBackFn)
*/

// const arr=[1,2,3,4]
// iterators=arr.entries() // returns object to the iterators
// for (const [index, element] of arr.entries()) {
//   console.log(index, element);
// }
// arr.fill(56,0,2)
// console.log(arr)


const words = ["spray", "elite", "exuberant", "destruction", "madam","radar"];

function isPalindrome(word){
    let rev=word.split("").reverse().join("")
    return rev==word
}
const filtered=words.filter(isPalindrome)
console.log(filtered)

