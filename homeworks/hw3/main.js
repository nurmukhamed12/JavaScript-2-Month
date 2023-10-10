

function findLongestWord(str) {
    let words = str.match(/[а-яА-Яa-zA-ZёЁ]{1,}/gi);
    let theLongestWord = words[0];
  
    for(let i = 1 ; i < words.length ; i++) {
      if(theLongestWord.length < words[i].length)
      {
        theLongestWord = words[i];
      }
    }
    return theLongestWord;
  }
  console.log(findLongestWord('супра самая быстрая машина девяностых'));  


// Напишите функцию detect_data_type(value), которая принимает аргумент и возвращает тип.

// Примечание. Существует шесть возможных значений, которые возвращает typeof: объект, логическое значение, функция, число, строка и неопределенное значение.
function detect_data_type(value) {
    var type = typeof value;
    
    if (type === 'object') {
        if (Array.isArray(value)) {
            return 'array';
        }
        if (value === null) {
            return 'null';
        }
        return 'object';
    }
    
    return type;
}


console.log(detect_data_type({
    FirstName: 'nurmukhamed',
    LastName: 'Abdraimov',
    Secondname: null,
    Patronomic: 'Talantbekovich',
    FullName: 'Abdraimov Nurmukhamed Talantbekovich',
    MidName: undefined,
    gender: 'male',
    age:42,}));
console.log(detect_data_type(['baseball','hobbyhorsing','baskeball','chess']));
console.log(detect_data_type(null));
console.log(detect_data_type(false)); 
console.log(detect_data_type(function detect_data_type(value) {
    var type = typeof value;
    
    if (type === 'object') {
        if (Array.isArray(value)) {
            return 'array';
        }
        if (value === null) {
            return 'null';
        }
        return 'object';
    }
    
    return type;
}));
console.log(detect_data_type(42));
console.log(detect_data_type("Hello, World!"));

