//                 - Знайти та вивести довижину настипних стрінгових значень
//    'hello world', 'lorem ipsum', 'javascript is cool'
let str1 ='hello world';
let str2 ='lorem ipsum';
let str3 ='javascript is cool';
console.log(str1.length);
console.log(str2.length);
console.log(str3.length);

//- Перевести до великого регістру наступні стрінгові значення
//      'hello world', 'lorem ipsum', 'javascript is cool'
let pass1 =  'hello world';
let pass2 =  'lorem ipsum';
let pass3 =  'javascript is cool';
let str4 = pass1.toUpperCase();
console.log(str4);
let str5 = pass2.toUpperCase();
console.log(str5);
let str6 = pass3.toUpperCase();
console.log(str6);

//- Перевести до нижнього регістру настипні стрінгові значення
//      'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'
let str7 = pass1.toLowerCase();
console.log(str7);
let str8 = pass2.toLowerCase();
console.log(str8);
let str9 = pass3.toLowerCase();
console.log(str9);

//- Є "брудна" стрінга let str = ' dirty string   ' .
// Почистити її від зайвих пробілів.

//- Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//    let str = 'Ревуть воли як ясла повні';
//    let arr = stringToarray(str); ['Ревуть', 'воли', 'як', 'ясла', 'повні']
//
//- є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map  перетворити всі об'єкти в масиві на стрінгові.
//- створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
//let nums = [11,21,3];
//sortNums(nums,'ascending') // [3,11,21]
//sortNums(nums,'descending') // [21,11,3]