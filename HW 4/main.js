//- створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
function calc(a, b) {
    console.log(a * b)
}
calc(a = 20, b = 10)

//- створити функцію яка обчислює та повертає площу кола з радіусом r
function calc2(p, r) {
    console.log(p * (r * r))
}
calc2(p = 3.14, r = 10)

//- створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
function cylinder(p, r, h) {
    console.log((2 * p * r * h) + (2 * p * (r * r)))
}
cylinder(p = 3.14, r= 10, h = 50)

//- створити функцію яка приймає масив та виводить кожен його елемент
function foods() {
    console.log(Array.from(arguments));
}
foods('popcorn', 'pizza', 'cake', 'spaghetti', 'sauce')

//- створити функцію яка створює параграф з текстом. Текст задати через аргумент
function text () {
    console.log(arguments);
}
text(' Функції — це головні “будівельні блоки” програми.')