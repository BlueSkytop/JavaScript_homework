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


//Використовуючи данні з масиву, за допомоги document.write та циклу
//побудувати структуру по шаблону
let products = [
    {
        title: 'milk',
        price: 22,
        image: 'https://www.mcqueensdairies.co.uk/wp-content/uploads/2019/02/Mcqueens_1litre_whole_organic-300x300-3.jpg'
    },
    {
        title: 'juice',
        price: 27,
        image: 'https://images-na.ssl-images-amazon.com/images/I/61jL2GCuKLL._SX679_PIbundle-24,TopRight,0,0_AA679SH20_.jpg'
    },
    {
        title: 'tomato',
        price: 47,
        image: 'https://dictionary.cambridge.org/ru/images/thumb/tomato_noun_001_17860.jpg?version=5.0.74'
    },
    {
        title: 'tea',
        price: 15,
        image: 'https://yogiproducts.com/wp-content/uploads/2009/03/YT-US-CAR-RelaxedMind-C23-202201-V2-3DFront_withGlow-300DPI-1.png'
    },
];
for (let product of products) {
    document.write(`<div class="product-card"> <h3 class="product-title">${product.title} - Price ${product.price}</h3> <img src="${product.image}" alt="" class="product-image"> </div>`)
}

//є масив
//за допомоги циклу вивести:
 //   - користувачів зі статусом true
//- користувачів зі статусом false
//- користувачів які старші за 30 років
let users = [
    {name: 'vasya', age: 31, status: false},
    {name: 'petya', age: 30, status: true},
    {name: 'kolya', age: 29, status: true},
    {name: 'olya', age: 28, status: false},
    {name: 'max', age: 30, status: true},
    {name: 'anya', age: 31, status: false},
    {name: 'oleg', age: 28, status: false},
    {name: 'andrey', age: 29, status: true},
    {name: 'masha', age: 30, status: true},
    {name: 'olya', age: 31, status: false},
    {name: 'max', age: 31, status: true}
];
for(let user of users){
    if(user.status){
        document.write(`<div>${user.name} ${user.status} </div>`)
    }
}
for(let user of users){
    if(!user.status){
        document.write(`<div>${user.name} ${user.status} </div>`)
    }
}
for(let user of users){
    if(user.age > 30){
        document.write(`<div>${user.name} ${user.age} </div>`)
    }
}

//- Використовуючи данні з масиву, за допомоги document.write та циклу
//побудувати структуру по шаблону
let listOfItems = ['html', 'css', 'javascript', 'mysql', 'mongodb', 'react', 'angular', 'node.js'];
for (let j = 0; j < listOfItems.length; j++) {
    const listOfItem = listOfItems[j];
    document.write(`<ul> <li>${listOfItem}</li>
</ul>`)
}