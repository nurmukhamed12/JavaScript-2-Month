// основной

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

// доп

function detect_data_type(value) {
    var type = typeof value;
    
    if (type == 'object') {
        if (value == null) {
            return 'null';
        }
        return 'object';
    }
    
    return type;
}


console.log(detect_data_type({}));
console.log(detect_data_type(null));
console.log(detect_data_type(true));
console.log(detect_data_type(function(){}));
console.log(detect_data_type(42));
console.log(detect_data_type("Hello, World!"));
