const array = [1,2,2,3,4,55,45]
let evenArray = []


function evenNums(arr, evens) {
    for (let i = 0; i < array.length; i++) {
        if (arr[i] % 2 === 0) {
            evens.push(arr[i])
        }
    }
}

evenNums(array, evenArray)
console.log(evenArray);