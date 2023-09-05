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
//2 варіант (на розборі)
let arr1 =  ['hello world', 'lorem ipsum', 'javascript is cool' ];
let result = arr1.map((str) => str.toUpperCase());
console.log(result);

//- Перевести до нижнього регістру настипні стрінгові значення
//      'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'
let str7 = pass1.toLowerCase();
console.log(str7);
let str8 = pass2.toLowerCase();
console.log(str8);
let str9 = pass3.toLowerCase();
console.log(str9);
//2 варіант (на розборі)
let arr2 =  ['HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL' ];
let result2 = arr2.map((str) => str.toLowerCase());
console.log(result2);

//- Є "брудна" стрінга let str = ' dirty string   ' .
// Почистити її від зайвих пробілів.
let str10 = ' dirty string   ';
console.log(str10.trim);

//- Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//    let str = 'Ревуть воли як ясла повні';
//    let arr = stringToarray(str); ['Ревуть', 'воли', 'як', 'ясла', 'повні']
let str11 = 'Ревуть воли як ясла повні';
let strToArray = (str) => str.split(' ');
console.log(strToArray(str11));

//
//- є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map  перетворити всі об'єкти в масиві на стрінгові.
let nums = [10,8,-7,55,987,-1011,0,1050,0];
let result5 = nums.map((num) => num.toString());
console.log(result5);

//- створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
//let nums = [11,21,3];
//sortNums(nums,'ascending') // [3,11,21]
//sortNums(nums,'descending') // [21,11,3]
let nums2 = [11, 21, 3];
const sortNums = (nums,  direction) => {
    switch (direction) {
        case 'ascending':
            return nums.sort((a, b) => a-b)
        case 'descending':
            return nums.sort((a, b) => b-a)
    }
}
console.log(sortNums(nums2, 'ascending'));
console.log(sortNums(nums2, 'descending'));
//==========================
//- є масив
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
//-- відсортувати його за спаданням за monthDuration
const sortedArr = coursesAndDurationArray.sort((a, b) => b.monthDuration -a.monthDuration);
console.log(sortedArr);

//-- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
const filteredArr = coursesAndDurationArray.filter(({monthDuration}) => monthDuration > 5);
console.log(filteredArr);

//-- за допомоги map перетворити кожен елемент на наступний тип {id,title,monthDuration}
const mappedArr = coursesAndDurationArray.map((value, index) => {
    return {
        ...value,
        id:index + 1,
    }
})
console.log(mappedArr);

//=========================
//    описати колоду карт (від 6 до туза без джокерів)
//{
//    cardSuit: '', // 'spade', 'diamond','heart', 'clubs'
//        value: '', // '6'-'10', 'ace','jack','queen','king','joker'
//    color:'', // 'red','black'
//}
const cards = [
    {cardSuit: 'spade', value: '6', color:'black'},
    {cardSuit: 'spade', value: '7', color:'black'},
    {cardSuit: 'spade', value: '8', color:'black'},
    {cardSuit: 'spade', value: '9', color:'black'},
    {cardSuit: 'spade', value: '10', color:'black'},
    {cardSuit: 'spade', value: 'ace', color:'black'},
    {cardSuit: 'spade', value: 'jack', color:'black'},
    {cardSuit: 'spade', value: 'queen', color:'black'},
    {cardSuit: 'spade', value: 'king', color:'black'},
    {cardSuit: 'diamond', value: '6', color:'black'},
    {cardSuit: 'diamond', value: '7', color:'black'},
    {cardSuit: 'diamond', value: '8', color:'black'},
    {cardSuit: 'diamond', value: '9', color:'black'},
    {cardSuit: 'diamond', value: '10', color:'black'},
    {cardSuit: 'diamond', value: 'ace', color:'black'},
    {cardSuit: 'diamond', value: 'jack', color:'black'},
    {cardSuit: 'diamond', value: 'queen', color:'black'},
    {cardSuit: 'diamond', value: 'king', color:'black'},
    {cardSuit: 'heart', value: '6', color:'red'},
    {cardSuit: 'heart', value: '7', color:'red'},
    {cardSuit: 'heart', value: '8', color:'red'},
    {cardSuit: 'heart', value: '9', color:'red'},
    {cardSuit: 'heart', value: '10', color:'red'},
    {cardSuit: 'heart', value: 'ace', color:'red'},
    {cardSuit: 'heart', value: 'jack', color:'red'},
    {cardSuit: 'heart', value: 'queen', color:'red'},
    {cardSuit: 'heart', value: 'king', color:'red'},
    {cardSuit: 'clubs', value: '6', color:'red'},
    {cardSuit: 'clubs', value: '7', color:'red'},
    {cardSuit: 'clubs', value: '8', color:'red'},
    {cardSuit: 'clubs', value: '9', color:'red'},
    {cardSuit: 'clubs', value: '10', color:'red'},
    {cardSuit: 'clubs', value: 'ace', color:'red'},
    {cardSuit: 'clubs', value: 'jack', color:'red'},
    {cardSuit: 'clubs', value: 'queen', color:'red'},
    {cardSuit: 'clubs', value: 'king', color:'red'},

]
//- знайти піковий туз
const ace = cards.find((card) => card.value === 'ace' && card.cardSuit === 'spade');
console.log(ace);
//- всі шістки
const s6 = cards.filter((card) => card.value ==='6');
console.log(s6);
//- всі червоні карти
const redCards = cards.filter((card) => card.color ==='red');
console.log(redCards);
//- всі буби
const diamonds = cards.filter((card) => card.cardSuit === 'diamond');
console.log(diamonds);
//- всі трефи від 9 та більше
const clubs = cards.filter ((card) => card.Suit === 'clubs' && ['9', '10', 'ace', 'jack', 'queen', 'king'].includes(card.value));
console.log(clubs);

//Взяти описану колоду карт, та за допомоги reduce упакувати всі карти по "мастях" в об'єкт
//{
 //   spades:[],
 //       diamonds:[],
 //   hearts:[],
//    clubs:[]
//}
const cards4 = cards.reduce((acc, cur) => {
    acc [cur.cardSuit].push(cur);
    return acc;
}, {spade:[], clubs:[], heart:[], diamond:[]});
console.log(cards4);

//=========================
//    взяти з arrays.js (який лежить в папці 2023 plan) масив coursesArray
let coursesArray = [
    {
        title: 'JavaScript Complex',
        monthDuration: 5,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
    },
    {
        title: 'Java Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'git',
            'java core',
            'java advanced']
    },
    {
        title: 'Python Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'python core',
            'python advanced']
    },
    {
        title: 'QA Complex',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
    },
    {
        title: 'FullStack',
        monthDuration: 7,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'react',
            'angular',
            'aws',
            'docker',
            'git',
            'node.js',
            'python',
            'java']
    },
    {
        title: 'Frontend',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
    }
];
//--написати пошук всіх об'єктів, в який в modules є sass
console.log(coursesArray.filter((c) => c.modules.includes('sass')));

//--написати пошук всіх об'єктів, в який в modules є docker
console.log(coursesArray.filter((c) => c.modules.includes('docker')));