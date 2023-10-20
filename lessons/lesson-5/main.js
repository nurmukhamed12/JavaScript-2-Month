const array = [
    {
        name: 'Beka',
        age: 18,
        city: 'Osh'
    }, {
        name: 'Jambolot',
        age: 12,
        city: 'Bishkek'
    }, {
        name: 'Nurjigit',
        age: 20,
        city: 'Bishkek'
    }, {
        name: 'aziz',
        age: 11,
        city: 'Osh'
    }, {
        name: 'baiel',
        age: 7,
        city: 'Osh'
    }, {
        name: 'Tima',
        age: 23,
        city: 'Bishkek'
    }
]

// const old = []
// const child = []

// function Splice(arr, child, old) {
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i].age >= 18) {
//             old.push(arr[i])
//         }
//         else if (arr[i].age < 18) {
//             child.push(arr[i])
//         }
//     }
// }

// Splice(array, child,old)
// console.log(child)
// console.log(old);



// const arr = [];
// function GetUserAdress(array) {
//     for (let i = 0; i < array.length; i++) {
//         if (array[i].city === 'Osh') {
//             arr.push(array[i])
//         }
//     }
//     return arr;
// }

// GetUserAdress(array)
// console.log(arr);

function about(array) {
    for (let i = 0; i < array.length; i++) {
        console.log(`his name is ${array[i].name} and he is ${array[i].age}. He lives in ${array[i].city}`);
    }
}
about(array)

console.log(about);
