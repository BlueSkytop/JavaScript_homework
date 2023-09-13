//- Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
//створити пустий масив, наповнити його 10 об'єктами new User(....)
function User (id, name, surname , email, phone) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
}
let users =  [
    new User( 1, 'vasya','pupkin', 'sgrege@gmail.com', 38056925505),
    new User( 2, 'vasya','popkin', 'sgrege@gmail.com', 38056925105),
    new User( 3, 'vasya','pupki', 'sgrege@gmail.com', 38056925505),
    new User( 4, 'vasya','pupin', 'sgrege@gmail.com', 38056915405),
    new User( 5, 'vasya','pupkan', 'sgrege@gmail.com', 38056925405),
    new User( 6, 'vasya','pipkin', 'sgrege@gmail.com', 38036925405),
    new User( 7, 'vasya','puskin', 'sgrege@gmail.com', 38056725405),
    new User( 8, 'vasya','puplin', 'sgrege@gmail.com', 38055925405),
    new User( 9, 'vasya','pupknn', 'sgrege@gmail.com', 38056924405),
    new User( 10, 'vasya','pupsin', 'sgrege@gmail.com', 38056925415),

]
console.log(users);
//- Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)
let filteruser = users.filter ((user) => !(user.id % 2));
console.log(filteruser);

//- Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)

let sorteu = users.sort ((a, b) => a.id - b.id);
console.log(sorteu);

//- створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
function Client (id, name, surname , email, phone, order) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
    this.order = order;
}
let clients  = [
    new Client( 1, 'vasya','pupkin', 'sgrege@gmail.com', 38056925505, ['bread', 'milk', 'sugar', 'ice']),
    new Client( 2, 'vasya','popkin', 'sgrege@gmail.com', 38056925105, [ 'ice', 'pizza']),
    new Client( 3, 'vasya','pupki', 'sgrege@gmail.com', 38056925505, ['bread', 'milk', 'sugar', 'ice', 'pizza', 'lime']),
    new Client( 4, 'vasya','pupin', 'sgrege@gmail.com', 38056915405, ['bread', 'milk', 'sugar', 'ice', 'pizza']),
    new Client( 5, 'vasya','pupkan', 'sgrege@gmail.com', 38056925405, ['milk', 'sugar', 'ice', 'pizza']),
    new Client( 6, 'vasya','pipkin', 'sgrege@gmail.com', 38036925405, ['bread', 'milk', 'sugar',]),
    new Client( 7, 'vasya','puskin', 'sgrege@gmail.com', 38056725405, ['bread', 'milk',  'ice', 'pizza']),
    new Client( 8, 'vasya','puplin', 'sgrege@gmail.com', 38055925405, ['bread', 'milk', 'sugar', 'ice', 'pizza']),
    new Client( 9, 'vasya','pupknn', 'sgrege@gmail.com', 38056924405, ['bread', 'milk', 'sugar', 'pizza']),
    new Client( 10, 'vasya','pupsin', 'sgrege@gmail.com', 38056925415, [ 'ice', 'pizza']),

];
console.log(clients);
//створити пустий масив, наповнити його 10 об'єктами Client
//- Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)
let sortedArr = clients.sort((a, b) => a.order.length - b.order.length);
console.log(sortedArr);

//- Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
//-- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
//-- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
//-- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
//-- changeYear (newValue) - змінює рік випуску на значення newValue
//-- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
function Car1 (model, producer, year, maxSpeed, volume) {
    this.model = model;
    this.producer = producer;
    this.year = year;
    this.maxSpeed = maxSpeed;
    this.volume = volume;
    this.driver = null;

    this.drive = function () {
        console.log('їдемо зі швидкістю ${maxSpeed} на годину');

        this.info = function () {
            console.log('****INFO****');
            for(let key in this) {
                if(typeof this [key] === 'function') {
                    continue;
                }
                console.log(`${key.toUpperCase()}:`,this[key]);
            }
            console.log('****INFO****');
        }
        this.increaseMaxSpeed = function (addedSpeed) {
            this.maxSpeed = this.maxSpeed + addedSpeed;
        }
        this.changeYear = function(newYear) {
            this.year = newYear;
        }
        this.addDriver = function (addedDriver) {
          this.driver = addedDriver;
        }
    }
}
//let car1 = new Car ('X5', 'BMW', 2010, 110, 5.3 );
//car1.drive();
//car1.info();
//car1.increaseMaxSpeed(30);
//car1.info();
//car1.changeYear(2220);
//car1.info();
//function Driver (name, year, exp)  {
 //   this.name = name;
 //   this.year = year;
//    this.exp = exp;
//}
// let driver = new Driver('Maks', 2005, 2);
//car1.addDriver(driver);
//car1.info();

//- (Те саме, тільки через клас)
//Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
//-- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
//-- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
//-- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
//-- changeYear (newValue) - змінює рік випуску на значення newValue
//-- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
class Car2  {
    constructor(model, producer, year, maxSpeed, volume) {

    this.model = model;
    this.producer = producer;
    this.year = year;
    this.maxSpeed = maxSpeed;
    this.volume = volume;
    this.driver = null;
    }
    drive() {
        console.log('їдемо зі швидкістю ${maxSpeed} на годину');
    }
        info() {
            console.log('****INFO****');
            for(let key in this) {
                if(typeof this [key] === 'function') {
                    continue;
                }
                console.log(`${key.toUpperCase()}:`,this[key]);
            }
            console.log('****INFO****');
        }
        increaseMaxSpeed(addedSpeed) {
            this.maxSpeed = this.maxSpeed + addedSpeed;
        }
        changeYear(newYear) {
            this.year = newYear;
        }
        addDriver(addedDriver) {
            this.driver = addedDriver;
        }

}
let car2 = new Car2 ('A6', 'Audi', 2023, 1, 5.3 );
car2.drive();
car2.info();
car2.increaseMaxSpeed(30);
car2.info();
car2.changeYear(2220);
car2.info();
class Driver {
    constructor (name, year, exp)  {
        this.name = name;
        this.year = year;
        this.exp = exp;
    }

}
let driver = new Driver('Maks', 2005, 2);
car2.addDriver(driver);
car2.info();


                //класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
//Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
//    За допомоги циклу знайти яка попелюшка повинна бути з принцом.
//    Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку
class Human{
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}

class Popelushka extends Human{
    constructor(name, age, footSize) {
        super(name, age);
        this.footSize = footSize;
    }
}

class Prince extends Human{
    constructor(name, age, bootSize) {
        super(name, age);
        this.bootSize = bootSize;
    }
    findPrincess(arr) {
        for(const Popelushka of arr){
           if  (Popelushka.footSize === this.bootSize) {
               return Popelushka;
           }
        }
    }
}
let popelArr = [
    new Popelushka ('Olya', 25 , 38 ),
    new Popelushka ('Lesya', 26 , 39 ),
    new Popelushka ('Katya', 24 , 37 ),
    new Popelushka ('Ira', 28 , 35 ),
    new Popelushka ('Lyuba',32  , 38 ),
    new Popelushka ('Eva',30  , 38 ),
    new Popelushka ('Oksana', 22 , 37.5 ),
    new Popelushka ('Orusya', 23 , 38.5 ),
    new Popelushka ('Adelya', 29 , 39 ),
    new Popelushka ('Tanya', 31 , 40 ),
];
let prince = new Prince('Sergey', 30, 46);
console.log(prince.findPrincess(popelArr));