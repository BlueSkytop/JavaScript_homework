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
    book_1.author = [
        name = 'Михайло Грушевськй',
        age = 40,
    ];
console.log(book_1);
book_2.author = [
    name = 'Rebecca Yarros ',
    age = 32,
];
console.log(book_2);
book_3.author = [
    name = 'Christopher Paolini ',
    age = 46,
];
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




