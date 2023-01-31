// Задание №1
// console.log('Задание №1');

// const firstNumber = +prompt('Задание №1\nВведите первое число')
// const secondNumber = +prompt('Задание №1\nВведите второе число')

// function returnNumber(a, b) {
//     if (a < b) return console.log('-1');
//     if (a > b) return console.log('1');
//     return console.log('0');
// }

// returnNumber(firstNumber, secondNumber);

// Задание №2
// console.log('\nЗадание №2');

// const numberOfFactorial = +prompt('Задание №2\nВведите число для которого необходимо посчитать факториал')

// function factorialCalculation(a) {
//     let b = 1;
//     for(i = 1; i <= a; i++) {
//         b *= i
//     }
//     return console.log(` (${a}!) = ${b}`);
// }

// factorialCalculation(numberOfFactorial);

// Задание №3
// console.log('\nЗадание №3');

// function threeDigitNumber(a, b, c) {
//     return console.log(`Получилось число - ${arguments[0] * 100 + arguments[1] * 10 + arguments[2]}`);
// }

// const threeDigitNumberOne = +prompt('Задание №3\nВведите первую цифру трехзначного числа');
// const threeDigitNumberTwo = +prompt('Задание №3\nВведите вторую цифру трехзначного числа');
// const threeDigitNumberThree = +prompt('Задание №3\nВведите третью цифру трехзначного числа');

// threeDigitNumber(threeDigitNumberOne, threeDigitNumberTwo, threeDigitNumberThree);

// Задание №4(Есть вопрос по передаче аргумента)
// console.log('\nЗадание №4');

// function squareoOfRectangle(a, b) {
    // if (arguments.length == 2) return console.log(`Площадь Прямоугольника равна ${arguments[0] * arguments[1]}`);
    // if (arguments.length == 1) return console.log(`Площадь квадрата равна ${arguments[0] ** 2}`);
// }

// const rectangleLength = +prompt('Задание №4\nВведите длину прямоугольника');
// const rectangleWidth = +prompt('Задание №4\nВведите ширину прямоугольника');

// squareoOfRectangle(3)

// Задание №5
// console.log('\nЗадание №5');

// const perfectNumber = +prompt('Задание №5\nОпределение совершенности числа\nВведите число для проверки')

// function perfectNumberDefinition(a) {
//     let b = 0;

//     for (let i = 1; i < a; i++) {
//         if (a % i == 0) b += i;
//     }

//     if (a == b)  {
//         return console.log(`Число ${a} является совершенным`);
//     } else {
//         return console.log(`Число ${a} не является совершенным`);
//     }
// }

// perfectNumberDefinition(perfectNumber)

// Задание №6
// console.log('\nЗадание №6');

// function perfectNumberDefinition1(a) {
//     let b = 0;

//     for (let i = 1; i < a; i++) {
//         if (a % i == 0) b += i;
//     }

//     if (a == b)  {
//         return true;
//     } else {
//         return false;
//     }
// }

// const firstNumberRange = +prompt('Задание №6\nВведите первое число диапазона');
// const secondNumberRange = +prompt('Задание №6\nВведите второе число диапазона');

// function perfectNumberDefinitionRange(a, b) {
//     let j = 0;
//     for(let i = a; i <= b; i++){
//         if(perfectNumberDefinition1(i)) {
//             j++;
//             console.log(`В диапазоне от ${a} до ${b} совершенное число №${j} - ${i}`);
//         }
//     }
// }

// perfectNumberDefinitionRange(firstNumberRange, secondNumberRange)