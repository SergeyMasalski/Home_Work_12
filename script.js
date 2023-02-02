// Задание №1
console.log('Задание №1');

const firstNumber = +prompt('Задание №1\nВведите первое число')
const secondNumber = +prompt('Задание №1\nВведите второе число')

function returnNumber(a, b) {
    if (a < b) return console.log('-1');
    if (a > b) return console.log('1');
    return console.log('0');
}

returnNumber(firstNumber, secondNumber);

// Задание №2
console.log('\nЗадание №2');

const numberOfFactorial = +prompt('Задание №2\nВведите число для которого необходимо посчитать факториал')

function factorialCalculation(a) {
    let b = 1;
    for(i = 1; i <= a; i++) {
        b *= i
    }
    return console.log(` (${a}!) = ${b}`);
}

factorialCalculation(numberOfFactorial);

// Задание №3
console.log('\nЗадание №3');

function threeDigitNumber(a, b, c) {
    return console.log(`Получилось число - ${arguments[0] * 100 + arguments[1] * 10 + arguments[2]}`);
}

const threeDigitNumberOne = +prompt('Задание №3\nВведите первую цифру трехзначного числа');
const threeDigitNumberTwo = +prompt('Задание №3\nВведите вторую цифру трехзначного числа');
const threeDigitNumberThree = +prompt('Задание №3\nВведите третью цифру трехзначного числа');

threeDigitNumber(threeDigitNumberOne, threeDigitNumberTwo, threeDigitNumberThree);

// Задание №4
console.log('\nЗадание №4');

function squareoOfRectangle(a, b) {
    if (arguments.length == 2 && arguments[0] != 0 && arguments[1] != 0) return console.log(`Площадь прямоугольника равна ${arguments[0] * arguments[1]}`);
    if (arguments.length == 2 && arguments[1] == 0) return console.log(`Площадь квадрата равна ${arguments[0] ** 2}`);
    if (arguments.length == 2 && arguments[0] == 0) return console.log(`Площадь квадрата равна ${arguments[1] ** 2}`);
    if (arguments.length == 1) return console.log(`Площадь квадрата равна ${arguments[0] ** 2}`);
}

const rectangleLength = +prompt('Задание №4\nВведите длину прямоугольника');
const rectangleWidth = +prompt('Задание №4\nВведите ширину прямоугольника');

squareoOfRectangle(rectangleLength, rectangleWidth);

// Задание №5
console.log('\nЗадание №5');

const perfectNumber = +prompt('Задание №5\nОпределение совершенности числа\nВведите число для проверки')

function perfectNumberDefinition(a) {
    let b = 0;

    for (let i = 1; i < a; i++) {
        if (a % i == 0) b += i;
    }

    if (a == b && a != 0)  {
        return console.log(`Число ${a} является совершенным`);
    } else {
        return console.log(`Число ${a} не является совершенным`);
    }
}

perfectNumberDefinition(perfectNumber)

// Задание №6
console.log('\nЗадание №6');

function perfectNumberDefinition1(a) {
    let b = 0;

    for (let i = 1; i < a; i++) {
        if (a % i == 0) b += i;
    }

    if (a == b && a != 0)  {
        return true;
    } else {
        return false;
    }
}

const firstNumberRange = +prompt('Задание №6\nВведите первое число диапазона(нахождение совершенных чисел в диапазоне)');
const secondNumberRange = +prompt('Задание №6\nВведите второе число диапазона(нахождение совершенных чисел в диапазоне)');

function perfectNumberDefinitionRange(a, b) {
    let j = 0;
    for(let i = a; i <= b; i++){
        if(perfectNumberDefinition1(i)) {
            j++;
            console.log(`В диапазоне от ${a} до ${b} совершенное число №${j} - ${i}`);
        }
    }
}

perfectNumberDefinitionRange(firstNumberRange, secondNumberRange);

// Задание №7
console.log('\nЗадание №7');
let hour = +prompt('Задание №7\nВывод часов/минут/секунд\nВведите количество часов');
let minut = +prompt('Задание №7\nВывод часов/минут/секунд\nВведите количество минут');
let second = +prompt('Задание №7\nВывод часов/минут/секунд\nВведите количество секунд');


function hourMinuteSecond(hour, minut, second) {
    if (hour > 24 || hour < 0) return console.log('Введен неверный формат времени');
    if (minut > 60 || minut < 0) return console.log('Введен неверный формат времени');
    if (second > 60 || second < 0) return console.log('Введен неверный формат времени');

    for (let i = 0; i < arguments.length; i++) {
        arguments[i] = String(arguments[i])
        if (arguments[i].length == 1) arguments[i] = '0' + arguments[i];
    }

    if (hour === undefined && minut === undefined && second === undefined) return console.log(`Введенное Вами время - 00:00:00`);
    if (hour !== undefined && minut === undefined && second === undefined) return console.log(`Введенное Вами время - ${hour}:00:00`);
    if (hour !== undefined && minut !== undefined && second === undefined) return console.log(`Введенное Вами время - ${hour}:${minut}:00`);
    if (hour !== undefined && minut === undefined && second !== undefined) return console.log(`Введенное Вами время - ${hour}:00:${second}`);
    if (hour === undefined && minut !== undefined && second !== undefined) return console.log(`Введенное Вами время - 00:${minut}:${second}`);
    if (hour === undefined && minut === undefined && second !== undefined) return console.log(`Введенное Вами время - 00:00:${second}`);
    return console.log(`Введенное Вами время - ${hour}:${minut}:${second}`);
}

hourMinuteSecond(hour, minut, second);

// Задание №8
console.log('\nЗадание №8');

let quantHour = +prompt('Задание №8\nПеревод в секунды\nВведите количество часов');
let quantMinut = +prompt('Задание №8\nПеревод в секунды\nВведите количество минут');
let quantSecond = +prompt('Задание №8\nПеревод в секунды\nВведите количество секунд');

function quantitySecond (hour, minut, second) {
    return (hour * 3600 + minut * 60 + second);
}

console.log(`Введенное Вами время - ${quantHour}:${quantMinut}:${quantSecond}\nКоличество секунд - ${quantitySecond(quantHour, quantMinut, quantSecond)}`);

// Задание №9
console.log('\nЗадание №9');

let translateSecond = +prompt('Задание №9\nВывод секунд в формат чч/мм/сс\nВведите количество секунд');

function translateHourMinuteSecond(second) {
    const hour = Math.floor(second / 3600);
    const minut = Math.floor((second - (hour * 3600))/60);
    const sec = second - (hour * 3600) - (minut * 60);
    return `${hour}:${minut}:${sec}`
}

console.log(`Введенное количество секунд - ${translateSecond}\nВ формате чч/мм/сс - ${translateHourMinuteSecond(translateSecond)}`);

// Задание №10
console.log('\nЗадание №10');
let timeCondition;
let differenceHour1;
let differenceMinut1;
let differenceSecond1;
let differenceHour2;
let differenceMinut2;
let differenceSecond2;

do {
    differenceHour1 = +prompt('Задание №10\nНахождение разницы между временем в формате чч/мм/сс\nВремя №1\nВведите количество часов(Максимум - 24)');
    differenceMinut1 = +prompt('Задание №10\nНахождение разницы между временем в формате чч/мм/сс\nВремя №1\nВведите количество минут(Максимум - 59)');
    differenceSecond1 = +prompt('Задание №10\nНахождение разницы между временем в формате чч/мм/сс\nВремя №1\nВведите количество секунд(Максимум - 59)');

    differenceHour2 = +prompt('Задание №10\nНахождение разницы между временем в формате чч/мм/сс\nВремя №2\nВведите количество часов(Максимум - 24)');
    differenceMinut2 = +prompt('Задание №10\nНахождение разницы между временем в формате чч/мм/сс\nВремя №2\nВведите количество минут(Максимум - 59)');
    differenceSecond2 = +prompt('Задание №10\nНахождение разницы между временем в формате чч/мм/сс\nВремя №2\nВведите количество секунд(Максимум - 59)');

    timeCondition = false;

    if ((differenceHour1 > 24 || differenceHour1 < 0) || (differenceMinut1 >= 60 || differenceMinut1 < 0) || (differenceSecond1 >= 60 || differenceSecond1 < 0)) {
        timeCondition = true;
        alert('Задание №10\nВведен неверный формат времени (ввод первого времени). Введите время правильно')
    }
    if (differenceHour2 > 24 || differenceHour2 < 0 || differenceMinut2 >= 60 || differenceMinut2 < 0 || differenceSecond2 >= 60 || differenceSecond2 < 0) {
        timeCondition = true;
        alert('Задание №10\nВведен неверный формат времени (Ввод второго времени). Введите время правильно')
    }
} while (timeCondition);

console.log(`Первое время ${differenceHour1}:${differenceMinut1}:${differenceSecond1}`);
console.log(`Второе время ${differenceHour2}:${differenceMinut2}:${differenceSecond2}`);

function differenceTime(hour1, minut1, second1, hour2, minut2, second2) {
   let differenceSecond =  quantitySecond (hour1, minut1, second1) - quantitySecond (hour2, minut2, second2);

   if (differenceSecond >= 0) {
    return translateHourMinuteSecond(differenceSecond);
   } else {
    return translateHourMinuteSecond(-differenceSecond);
   }
   
}

console.log(`Разница во времени - ${differenceTime(differenceHour1, differenceMinut1, differenceSecond1, differenceHour2, differenceMinut2, differenceSecond2)}`);