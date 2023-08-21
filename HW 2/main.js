let users = [
    'Ostap', 'Maks', 'Lyuba', 'Muron', 'Ira', 'Nazar', 'Petro', 'Anya', 'Romana', 'Vika'
];
console.log(users);


    let book_1 = {
        name: 'Історія України',
        pageCount: 250,
        genre: 'history'
    }
    let book_2 = {
        name: 'Iron Flame',
        pageCount: 640,
        genre: 'adventures'
    }
    let book_3 = {
        name: 'Fractal Noise: A Fractalverse Novel',
        pageCount: 265,
        genre: 'fantasy'
    }
console.log(book_1, book_2, book_3);
    book_1.author = [{
        name: 'Михайло Грушевськй',
        age:40,
    } ];
console.log(book_1);
book_2.author = [{
    name:'Rebecca Yarros ',
    age:32,
}];
console.log(book_2);
book_3.author = [{
    name:'Christopher Paolini ',
    age:46,
}];
console.log(book_3);

let users_2 = [
    {name: 'Veronika', username:'nika', password:12345},
    {name: 'Vasya', username:'124', password:123467},
    {name: 'Ira', username:'ira25', password:123489},
    {name: 'Olena', username:'O58', password:1234564},
    {name: 'Eva', username:'h589', password:12895},
    {name: 'Yana', username:'Yana21', password:128525},
    {name: 'Oleg', username:'Oleg64', password:1285965},
    {name: 'Petro', username:'hdgs', password:151445},
    {name: 'Mariya', username:'Mar1', password:185215},
    {name: 'Svitlana', username:'svit22', password:12352852},
];
console.log(users_2);

let x = prompt('Вгадай число до 30');
if(x === '25'){
    console.log('вірно');
} else {
    console.log('невірно');
}

let a = prompt('Вгадай з першого разу одну з трьох цифр: 0,1,-3');
if (a === '-3'){
    console.log('вірно');
}
if (a === '0'){
    console.log('невірно');
}
if (a === '1'){
    console.log('пощастить іншим разом')
}

let time = prompt('Напиши число і дізнася яка це четверть години');
if (time >= 0 && time <= 14){
    console.log('1');
}
if (time >= 15 && time <= 29){
    console.log('2');
}
if (time >= 30 && time <= 44){
    console.log('3');
}
if (time >=45 && time <= 59){
    console.log('4');
}

let day = prompt('Напиши число до 31 і дізнася, яка це декада місяця')
if (day >= 0 && day <= 10){
    console.log('1');
}
if (day >= 11 && day <= 20){
    console.log('2');
}
if (day >= 21 && day <= 31){
    console.log('3');
}

let plan = prompt('План на тиждень');
switch (plan) {
    case '1':
        console.log('вигуляти пса, почитати книгу');
        break;

    case '2':
        console.log('прослухати ще раз лекцію');
        break;

    case '3':
        console.log('зробити домашку');
        break;

    case '4':
        console.log('підлити квіти');
        break;

    case '5':
        console.log('подивитись фільм англіською');
        break;

    case '6':
        console.log('закупитись харчами, поприбирати вдома');
        break;

    case '7':
        console.log('поїхати на природу');
        break;

    default:
        console.log('помилка, потрібно ввести цифру');
}


let number = +prompt('напиши перше число');
let number2 = +prompt('напиши друге число');
if(number > number2){
    console.log(number);
}
if(number2 > number){
    console.log(number2)
}
if(number === number2){
    console.log('ok')
}

let start = prompt('write start');
if(start !== 'start' || start === 'START') {
    console.log('default');
}else {
    console.log('молодець');
}



let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

if(coursesAndDurationArray => 5) {
    console.log('super');
}else {
    console.log('short course');
}

