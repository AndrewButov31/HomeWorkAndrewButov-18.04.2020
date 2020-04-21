document.write("Задание 1<br />");
document.write("<br />Найти сумму ряда последовательно идущих чисел от lim1 до lim2. Например, если  lim1=5, lim2=8, то это сумма 5+6+7+8<br />");
document.write("Задание решить с помощью:<br />");
console.group('Задание 1');
let lim1 = +prompt('1.1. Введите начальное значение lim1');
let lim2 = +prompt('Введите конечное значение lim2');
console.log("Вы ввели начальное значение lim1 =",lim1,'и конечное значение lim2 =',lim2);
document.write("<br />Вы ввели начальное значение lim1 = ",lim1,' и конечное значение lim2 = ',lim2,"<br />");
document.write("<br />1.1 цикла for<br />");
console.group('1.1 цикла for');
    let sum = 0;
    for (let i = lim1; i <= lim2; i++)
    {
        sum += i;
    }
    console.log("Сумма ряда последовательно идущих чисел от lim1 =",lim1," до lim2 =",lim2,". Равно ",sum);
    document.write("<br />Сумма ряда последовательно идущих чисел от lim1 = ",lim1," до lim2 = ",lim2,". Равно ",sum,"<br />");
console.groupEnd ('1.1 цикла for');

document.write("<br />1.2 цикла while<br />");
console.group('1.2 цикла while');
sum = 0;
let i1 = lim1;
    while ( i1 <= lim2){
        sum += i1;
        i1++;
    }
console.log("Сумма ряда последовательно идущих чисел от lim1 =",lim1," до lim2 =",lim2,". Равно ",sum);
document.write("<br />Сумма ряда последовательно идущих чисел от lim1 = ",lim1," до lim2 = ",lim2,". Равно ",sum,"<br />");
console.groupEnd ('1.2 цикла while');

document.write("<br />1.3 создание функции<br />");
console.group('1.3 создание функции');
    function rowSum(min, max){
        let sum = 0;
        for (let i = lim1; i <= lim2; i++)
        {
            sum += i;
        }
        return sum;
    }
const sumFun = rowSum(lim1, lim2);
console.log("Сумма ряда последовательно идущих чисел от lim1 =",lim1," до lim2 =",lim2,". Равно ",sumFun);
document.write("<br />Сумма ряда последовательно идущих чисел от lim1 = ",lim1," до lim2 = ",lim2,". Равно ",sumFun,"<br />");
console.groupEnd ('1.3 создание функции');
console.groupEnd ('Задание 1');

document.write("<br />Задание 2<br />");
document.write("<br />Реализовать стрелочную функцию произведения двух чисел<br />");
console.group('Задание 2');
let x1 = +prompt('2. Введите начальное число x1');
let x2 = +prompt('Введите конечное число x2');
console.log("Вы ввели начальное число x1 =",x1,'и конечное число x2 =',x2);
document.write("<br />Вы ввели начальное число x1 = ",x2,' и конечное число x2 = ',x2,"<br />");
    const composition = (a, b) =>{
        return a * b;
    };
const productTwoNumbers = composition(x1, x2);
console.log("Произведение двух чисел x1 =",x1," и x2 =",x2,". Равно ",productTwoNumbers);
document.write("Произведение двух чисел x1 = ",x1," и x2 = ",x2,". Равно ",productTwoNumbers,"<br />");
console.groupEnd ('Задание 2');

document.write("<br />Задание 3<br />");
document.write("(Массив одномерный)<br />");
console.group('Задание 3');
console.group('3.1 Задание');
    document.write("<br />3.1 Создать числовой массив и проинициализировать его с помощью случайных чисел<br />");
    let length = +prompt('3.1. Введите длину массива length ');
    console.log("Введите длину массива length =",length);
    document.write("<br />Введите длину массива length = ",length,"<br />");
    let array = [];
    for (let i = 0; i < length; i++)
    {
        array.push(Math.round( Math.random() * 10 ));
    }
    console.log("Содержимое массива",array);
    document.write("Содержимое массива ",array,"<br />");
console.groupEnd ('3.1 Задание');

console.group('3.2 Задание');
    document.write("<br />3.2 Вывести размер массива<br />");
        console.log("Длина массива =",array.length);
        document.write("<br />Длина массива = ",array.length,"<br />");
console.groupEnd ('3.2 Задание');

console.group('3.3 Задание');
    document.write("<br />3.3 Элементы с четными индексами массива<br /><br />");
    for (let i = 0; i < length; i=i+2)
    {
        console.log("Индекс -",i," элемент -",array[i]);
        document.write("Индекс - ",i," элемент - ",array[i],"<br />");
    }
console.groupEnd ('3.3 Задание');

console.group('3.4 Задание');
    document.write("<br />3.4 Только четные элементы массива<br /><br />");
    for (let i = 0; i < length; i++)
    {
        if(array[i]%2 == 0 && array[i] != 0) {
            console.log("Элемент -",array[i]," индекс -",i);
            document.write("Элемент - ",array[i]," индекс - ",i,"<br />");
        }
    }
console.groupEnd ('3.4 Задание');

console.group('3.5 Задание');
    document.write("<br />3.5 Вывод индексов нулевых элементов массива<br /><br />");
   let numZeroElem = 0;
    for (let i = 0; i < length; i++)
    {
        if(array[i] == 0) {
            console.log("Индекс -",i);
            document.write("Индекс - ",i,"<br />");
            numZeroElem++;
        }
    }
console.groupEnd ('3.5 Задание');

console.group('3.6 Задание');
    document.write("<br />3.6 Вывод количество нулевых элементов в массиве<br /><br />");
    if (numZeroElem == 0){
        console.log("Нулевых элементов в массиве нет!");
        document.write("Нулевых элементов в массиве нет!<br />");
    }
    else {
        console.log("Количество нулевых элементов в массиве =",numZeroElem);
        document.write("Количество нулевых элементов в массиве = ",numZeroElem,"<br />");
    }
console.groupEnd ('3.6 Задание');
console.groupEnd ('Задание 3');

console.group('Задание 4');
    document.write("<br />4. Создать объект Машина и прописать для него свойства.<br />");
    const car = {
        name: 'Ford Fusion',
        yearOfIssue: 2016,
        run: 71000,
        color:"gray metallic",
        engine:2.2,
        transmission:"automaton",
        occasion:"front",
    }
    console.log("Объект машина и его свойства ",car);
console.groupEnd ('Задание 4');

console.group('Задание 5');
    document.write("<br />5.1 Создать функции-конструкторы:<br />");
    document.write("<br />- Книга (автор, название, год издания, издательство)<br />");
    document.write("- Электронная версия книги (автор, название, год издания, издательство, формат, электронный номер)<br />");
    function Book(author, title, yearOfPublication, publisher){
        this.author = author;
        this.title = title;
        this.yearOfPublication = yearOfPublication;
        this.publisher = publisher;
    }
    function ElectronicBook(author, title, yearOfPublication, publisher, format, electronicNumber){
        this.author = author;
        this.title = title;
        this.yearOfPublication = yearOfPublication;
        this.publisher = publisher;
        this.format = format;
        this.electronicNumber = electronicNumber;
    }
    document.write("<br />5.2 Переделать создание функций без дублежа информации, реализовав прототипное наследование<br />");
    ElectronicBook.prototype = new Book();
    const book1 = new Book('автор', 'название', 'год издания', 'издательство');
    const electronicBook1 = new ElectronicBook('автор', 'название', 'год издания',
        'издательство','электронный формат', 'электронный номер');
    document.write("<br />5.3 Вывести объекты в консоль<br />");
    console.log(book1);
    console.log(electronicBook1);
 console.groupEnd ('Задание 5');