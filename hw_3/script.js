// 1. Написать скриптик, который сосчитает и выведет результат от возведения 2 в степень 10, начиная со степени 1

for(let i = 1; i <= 10; i++ ) {
    console.log(Math.pow(2, i));
}

// 1*. Преобразовать 1 задачу в функцию, принимающую на вход степень, в которую будет возводиться число 2

const exponentiation = function(exp) {
    for(let i = 1; i <= exp; i++ ) {
        console.log(Math.pow(2, i));
    }
}

exponentiation(11);

//2. Написать скрипт, который выведет 5 строк в консоль таким образом, чтобы в первой строчке выводилось :), во второй :):) и так далее
// Пример в консоли:
// :)
// :):)
// :):):)
// :):):):)
// :):):):):)

let smile = ':)';
let output = '';

for(let i = 0; i < 5; i++) {
    output = output + smile;
    console.log(output);
}


// 2*. Преобразовать 2 задачу в функцию, принимающую на вход строку, которая и будет выводиться в консоль (как в условии смайлик), а также количество строк для вывода 
// e.g. function printSmile(stroka, numberOfRows)

const printSmile = function(stroka, numberOfRows) {
    let output = '';

    for(let i = 0; i < numberOfRows; i++) {
        output = output + stroka;
        console.log(output);
    }
}

printSmile('\\(ᵔᵕᵔ)/', 10)

// 3**.  Написать функцию, которая принимает на вход слово. Задача функции посчитать и вывести в консоль, сколько в слове гласных, и сколько согласных букв.
// e.g. function getWordStructure(word)
// В консоли: 
// Слово (word) состоит из  (число) гласных и (число) согласных букв

// Проверки: 'case', 'Case', 'Check-list'

const getWordStructure = function (word) {
    const vowels = ['a', 'e', 'i', 'o', 'u']
    let vowel = 0;
    let consonant = 0;
    
    for (let i = 0; i < word.length; i++) {
        if (word[i].toLowerCase().charCodeAt() >= 97 && word[i].toLowerCase().charCodeAt() <= 122) {
            if (vowels.includes(word[i].toLowerCase())) {
                vowel++;
            } else {
                consonant++;
            }
        }
    }

    console.log('Phrase "' + word + '" has ' + vowel + ' vowel' + `${vowel > 1 ? 's' : ''}` + ' and ' + consonant + ' consonant' + `${consonant > 1 ? 's' : ''}`);
}

getWordStructure('case');
getWordStructure('Case');
getWordStructure('Check-list-*)');

// 4**. Написать функцию, которая проверяет, является ли слово палиндромом
// e.g. function isPalindrom(word)

//Проверки: 'abba', 'Abba'

 const isPalindrom =  function(word) {
     word.toLowerCase() === word.toLowerCase().split('').reverse().join('') ? console.log(word + ' is palindrom') : console.log(word + ' is not palindrom');
 }

 isPalindrom('abba');
 isPalindrom('Abba');
