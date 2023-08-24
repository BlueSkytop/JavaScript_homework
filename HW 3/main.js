let books = [
    {name: 'A Thousand Splendid Suns', author: 'Khaled Hosseini', pages: 255},
    {name: '9 листопада', author: 'Коллін Гувер', pages: 235},
    {name: 'Кафе на краю світу', author: 'Джон П. Стрелекі', pages: 200},
    {name: 'Велич і ницість. ', author: 'Ерік Ларсон', pages: 592},
    {name: 'Вибір', author: 'Едіт Еґер', pages: 400},
    {name: 'Нові Темні Віки. Колонія.', author: 'Макс Кідрук', pages: 904},
    {name: 'Веріті', author: 'Коллін Гувер ', pages: 336},
    {name: 'Наодинці з собою', author: 'Марк Аврелій', pages: 180},
    {name: 'Ми, живі', author: 'Айн Ренд', pages: 504},
    {name: 'Гімн', author: 'Айн Ренд ', pages: 112},
];

 //   - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині
console.log(books.length);
for (let i = 0; i < books.length; i++) {
    const book = books[i];
    document.write(`<div>${book.name} ${book.author} </div>`);
}

//- За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині
for (let i = 0; i < books.length; i++) {
    const book = books[i];
    document.write(`<div>${book.name} ${i}</div>`);
}

//- За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.
//- За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.
let greetings = [
    {text:'guten tag'},
    {text:'guten tag'},
    {text:'guten tag'},
    {text:'guten tag'},
    {text:'guten tag'},
    {text:'guten tag'},
    {text:'guten tag'},
    {text:'guten tag'},
    {text:'guten tag'},
    {text:'guten tag'},
    {text:'guten tag'},
    {text:'guten tag'},
    {text:'guten tag'},
    {text:'guten tag'},
    {text:'guten tag'},
    {text:'guten tag'},
    {text:'guten tag'},
    {text:'guten tag'},
    {text:'guten tag'},
    {text:'guten tag'},
];
console.log(greetings.length);
let i=0;
while (i<greetings.length){
    let greeting = greetings[i];
    document.write(`<h1>${greeting.text} ${i}</h1>`);
    i++;
}


