//ЗАДАЧА No1 | создайте объект user, который имеет свойства name,
//age и метод greet(), который выводит сообщение вида
//"Привет, меня зовут [name], мне [age] лет".

// const user = {
//   name: "Иван",
//   age: 29,
//   greet() {
//     console.log(`Привет, меня зовут ${this.name}, мне ${this.age} лет`);
//   },
// };

// user.greet();

//_____________________________________________________________________________________________________________________

//ЗАДАЧА No2 | создайте объект rectangle, который имеет свойства width и height,
// а также метод getArea(), который выводит в консоль
//площадь прямоугольника по формуле "ширина * высота".

// const rectangle = {
//   width: 60,
//   height: 20,
//   getArea: function () {
//     console.log("Площаль прямоульника равна:", this.width * this.height);
//   },
// };

// rectangle.getArea();

//_____________________________________________________________________________________________________________________

//ЗАДАЧА No3 | создайте объект game, который имеет свойства score и level,
//а также метод increaseScore(), который увеличивает score на единицу,
//и метод increaseLevel(), который увеличивает level на единицу.

// const game = {
//   score: 14,
//   level: 2,
//   increaseScore: function () {
//     console.log((this.score += 1));
//   },
//   increaseLevel: function () {
//     console.log((this.level += 1));
//   },
// };

// game.increaseScore();
// game.increaseLevel();

//_____________________________________________________________________________________________________________________

//ЗАДАЧА No4 | создайте объект user, который имеет свойства name,
//age и метод sayName(), который выводит в консоль "Меня зовут [name]".

// const user = {
//   name: "Иван",
//   age: 30,
//   sayName: function () {
//     console.log(`Меня зовут ${this.name}`);
//   },
// };

// user.sayName();

//_____________________________________________________________________________________________________________________

//ЗАДАЧА No5 | создайте объект counter, который имеет свойства value и методы increase(),
//decrease() для увеличения и уменьшения значения счётчика соответственно.

// const counter = {
//   value: 10,
//   increase() {
//     console.log(`${(this.value += 1)}`);
//   },
//   decrease() {
//     console.log(`${(this.value -= 1)}`);
//   },
// };

// counter.increase();
// counter.decrease();

//_____________________________________________________________________________________________________________________

//ЗАДАЧА No6 | cоздайте объект product, который имеет свойства name,
//price и метод getDiscountedPrice(), который принимает параметр dscount
//и возвращает цену товара с учётом скидки.

// const product = {
//   name: "Alpine milk",
//   price: 65.5,
//   getDiscountedPrice: function (discount) {
//     if (discount < 0 || discount > 100) {
//       console.log("Некорректное значение");
//       return;
//     }

//     const discountValue = (discount * this.price) / 100;
//     const disPrice = this.price - discountValue;

//     return parseInt(disPrice.toFixed(2));
//   },
// };

// const result = product.getDiscountedPrice(-5);
// console.log(`Цена "${product.name}" с учетом скидки равна ${result}$`);

//_____________________________________________________________________________________________________________________

//ЗАДАЧА No7 | создайте объект team, который имеет свойства name и members (массив),
//  а также метод listMembers(), который выводит в консоль список участников команды

// const team = {
//   name: "ONX Team",
//   members: ["Justin Gaethje", "Kamaru Usman", "Rose Namajunas"],
//   listMembers() {
//     return this.members;
//   },
// };

// const result = team.listMembers();

// result.forEach((member) => {
//   console.log(member);
// });

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//ЗАДАЧИ С МЕТОДОМ ФУНКЦИЙ call(), apply(), bind()

// ЗАДАЧА No1 | создайте объект person с методом sayHello,
//который выводит в консоль сообщение "Привет, меня зовут [name]".
//Используйте метод call, чтобы вызвать этот метод с различными именами.

// const person = {
//   sayHello: function () {
//     console.log(`Привет, меня зовут ${this.name}`);
//   },
// };

// person.sayHello.call({ name: "Али" });
// person.sayHello.call({ name: "Иван" });
// person.sayHello.call({ name: "Сергей" });
// person.sayHello.call({ name: "Рамазан" });

//_____________________________________________________________________________________________________________________

// ЗАДАЧА No2 | создайте функцию calculateTotal, которая принимает
// произвольное количество аргументов (цены товаров) и возвращает общую сумму.
// Используйте метод apply, чтобы передать массив цен товаров и получить общую сумму.

// const priceArr = [4, 5, 6, 8, 9];

// function calculateTotal(...args) {
//   const sum = args.reduce(function (count, num) {
//     return count + num;
//   }, 0);
//   return sum;
// }

// const result = calculateTotal.apply(null, priceArr);
// console.log(result);

//_____________________________________________________________________________________________________________________

//ЗАДАЧА No3 | создайте функцию multiply, которая принимает два аргумента
//и возвращает их произведение. Используйте метод bind, чтобы создать
//новую функцию double, которая будет умножать переданный ей аргумент на 2.

// function multiply(num1, num2) {
//   return num1 * num2;
// }

// const double = multiply.bind(null, 2);
// console.log(double(8));

//_____________________________________________________________________________________________________________________

//ЗАДАЧА No4 | cоздайте объект teacher с методом introduce,
//который выводит в консоль сообщение "Меня зовут [name], я преподаю [subject]".
//Создайте объект student с полями name и subject, а затем вызовите метод introduce объекта teacher,
//передавая в него контекст объекта student.

// const teacher = {
//   introduce() {
//     console.log(
//       `Меня зовут ${this.name}, я преподаю предмет "${this.subject}"`
//     );
//   },
// };

// const student = {
//   name: "Григорий",
//   subject: "Информатика",
// };

// teacher.introduce.call(student);

//_____________________________________________________________________________________________________________________

//ЗАДАЧА No5 |cоздайте функцию findMax, которая принимает массив чисел
//и возвращает максимальное значение из этого массива. Используйте метод apply,
//чтобы передать массив чисел и найти максимальное значение.

// const numbersArray = [1, 2, 3, 4, 5];
// function findMax(arr) {
//   let maxValue = arr[0];
//   arr.forEach(function (number) {
//     if (number > maxValue) {
//       maxValue = number;
//     }
//   });
//   return maxValue;
// }

// const result = findMax.apply(null, [numbersArray]);
// console.log(result);

//_____________________________________________________________________________________________________________________

//ЗАДАЧА No6 | создайте объект dog с методом bark, который выводит в консоль сообщение "Гав-гав,
//меня зовут [name]". Создайте новую функцию barkTwice,
//которая будет вызывать метод bark объекта dog дважды.
//Используйте метод bind, чтобы привязать контекст объекта dog к функции barkTwice.

// const dog = {
//   name: "Кутя",
//   bark() {
//     console.log(`Гав-гав, меня зовут ${this.name}`);
//   },
// };

// function barkTwice() {
//   this.bark();
//   this.bark();
// }

// const doubleBark = barkTwice.bind(dog);
// doubleBark();

//_____________________________________________________________________________________________________________________

//ЗАДАЧА No7 | создайте функцию greet, которая принимает имя и время суток
// и выводит приветствие в зависимости от времени суток. Используйте метод call,
//чтобы вызвать функцию greet с различными аргументами и контекстом.

// function greet(name, time) {
//   if (time === "Утро") {
//     console.log(`${name}, доброе утро!`);
//   }
//   if (time === "День") {
//     console.log(`${name}, добрый день!`);
//   }
//   if (time === "Вечер") {
//     console.log(`${name}, добрый вечер!`);
//   }
// }

// greet.call(null, "Петр", "Утро");
// greet.call(null, "Стас", "День");
// greet.call(null, "Богдан", "Вечер");

//_____________________________________________________________________________________________________________________

//ЗАДАЧА No8 | создайте функцию calculateAverage, которая принимает массив оценок
//и возвращает среднее значение. Используйте метод apply, чтобы передать массив оценок и найти среднее значение.

// const marks = [5, 5, 3, 5, 4, 4, 3, 4];
// function calculateAverage(arr) {
//   const numbersSum = arr.reduce(function (preValue, number) {
//     return (preValue += number);
//   }, 0);

//   return numbersSum / arr.length;
// }

// const result = calculateAverage.apply(null, [marks]);
// console.log(result);

//_____________________________________________________________________________________________________________________

//ЗАДАЧА No9 | создайте объект person с полем name. Создайте функцию sayName,
//которая выводит в консоль сообщение "Меня зовут [name]". Используйте метод bind,
//чтобы создать новую функцию sayPersonName, которая будет выводить имя объекта person.

// const person = {
//   name: "Адам",
// };

// function sayName() {
//   console.log(`Меня зовут ${this.name}`);
// }

// const sayPersonName = sayName.bind(person);
// sayPersonName();

//_____________________________________________________________________________________________________________________

//ЗАДАЧА No10 | создайте функцию printDetails, которая принимает три аргумента:
//имя, возраст и профессию, и выводит в консоль подробные данные о человеке.
//создайте объект details с полями name, age и profession, а затем вызовите функцию printDetails,
//передавая в нее контекст объекта details с помощью метода call.

// function printDetails() {
//   return `Имя: ${this.name}, Возраст: ${this.age}, Специальность: ${this.profession}`;
// }

// const details = {
//   name: "Сергей",
//   age: 39,
//   profession: "Плотник",
// };

// const result = printDetails.call(details);

// console.log(result);
