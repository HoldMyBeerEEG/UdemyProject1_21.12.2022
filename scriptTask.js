//Лекция 21
// console.log(NaN || 2 || undefined);
// console.log(NaN && 2 && undefined);
// console.log(1 && 2 && 3);
// console.log((!1 && 2) || !3);
// console.log(25 || (null && !3));
// console.log(NaN || null || !3 || undefined || 5);
// console.log(NaN || (null && !3 && undefined) || 5);
// console.log((5 === 5 && 3 > 1) || 5);

// const hamburger = 3;
// const fries = 3;
// const cola = 0;
// const nuggets = 2;

// if ((hamburger === 3 && cola) || (fries === 3 && nuggets)) {
//   console.log("Done!");
// }

// let hamburger;
// const fries = NaN;
// const cola = 0;
// const nuggets = 2;

// if (hamburger || cola || fries === 3 || nuggets) {
//   console.log("Done!");
// }

// let hamburger;
// const fries = NaN;
// const cola = 0;
// const nuggets = 2;

// if ((hamburger && cola) || (fries === 3 && nuggets)) {
//   console.log("Done!");
// }

//Лекция 23

// При помощи цикла выведите числа от 5 до 10 в консоль. 5 и 10 включительно.
//  Цикл можно использовать любой

// for (let i = 5; i <= 10; i++) {
//   console.log(i);
// }

// При помощи цикла for вывести числа от 20 до 10 в консоль. В обратном порядке
// (20, 19, 18...). Когда цикл дойдет до числа 13 - остановить весь цикл

// for (let i = 20; i >= 10; i--) {
//   if (i === 13) {
//     break;
//   }
//   console.log(i);
// }

// При помощи цикла for выведите чётные числа от 2 до 10 включительно
// for (let i = 2; i <= 10; i += 2) {
//   console.log(i);
// }

// Перепишите цикл  for на вариант с while. Результат должен остаться
// точно таким же. Не создайте бесконечный цикл! Иначе браузер может зависнуть.
//  Цикл, который нужно переписать:
// for (let i = 2; i <= 16; i++) {
//   if (i % 2 === 0) {
//     continue;
//   } else {
//     console.log(i);
//   }
// }

// let i = 2;

// while (i <= 16) {
//   if (i % 2 === 0) {
//     i++;
//     continue;
//   } else {
//     console.log(i);
//   }
// }

// Заполните массив цифрами от 5 до 10 включительно. Помните, что элементы массива можно
// сформировать так же, как и обращаться к ним: arr[0]
// function fifthTask() {
//   const arrayOfNumbers = [];
//   for (let i = 5; i <= 10; i++) {
//     if (i >= 5 && i <= 10) {
//       arrayOfNumbers.push(i);
//     }
//   }
//   console.log(arrayOfNumbers);
//   return arrayOfNumbers;
// }

// fifthTask();

// Заполните новый массив (result) числами из старого (arr). Количество элементов в массиве можно
// получить как arr.length, а к элементам обращаемся все так же: arr[0], arr[1] и тд.
// Должен получиться точно такой же массив.
// arr = [1, 2, 3, 4, 5];
// result = [];
// for (let i = 0; i < arr.length; i++) {
//   result.push(arr[i]);

//   //   return result;
// }
// console.log(result);

// function secondTask() {
//   // Значения массива менять нельзя, тут он проверяется автоматически именно на эти значения
//   const data = [5, 10, "Shopping", 20, "Homework"];
//   for (let i = 0; i < data.length; i++) {
//     if (typeof data[i] === "number") {
//       data[i] *= 2;
//     } else if (typeof data[i] === "string") {
//       data[i] += " - done";
//     }
//     console.log(data);
//   }
//   // Пишем решение вот тут

//   // Не трогаем
//   return data;
// }
// secondTask();

// Измените данный массив так, чтобы все числа были увеличены в 2 раза, а если попадается
// строка строка - то к ней было добавлено " - done".
// Для определения типа данных используйте typeof();
// Должно получиться: [ 10, 20, 'Shopping - done', 40, 'Homework - done' ]

// Разверните массив data наоборот при помощи цикла и запишите данные в массив result.
// Должно получиться: [ 'Homework', 20, 'Shopping', 10, 5 ]
// function thirdTask() {
//   // Значения массива менять нельзя, тут он проверяется автоматически именно на эти значения
//   const data = [5, 10, "Shopping", 20, "Homework"];
//   const result = [];
//   for (let i = 1; i <= data.length; i++) {
//     result.push(data[data.length - i]);
//   }
//   // Пишем решение вот тут
//   console.log(result);
//   // Не трогаем
//   return result;
// }
// thirdTask();

// const lines = 5;
// let result = "";
// for (let i = 1; i <= lines; i++) {
//   for (let j = 0; j < lines - i; j++) {
//     result += "*";
//   }
//   for (let j = 0; j < 2 * i + 1; j++) {
//     result += "*";
//   }
//   result += "\n";
// }
// console.log(result);
// Проверяется именно переменная result, формируйте строку в ней
// const lines = 5;
// let result = "";

// for (let i = 0; i <= lines; i++) {
//   for (let j = 0; j < lines - i; j++) {
//     result += " ";
//   }
//   for (let j = 0; j < 2 * i + 1; j++) {
//     result += "*";
//   }
//   result += "\n";
// }

// console.log(result);

// Лекция 27
// Задание на работу с функциями

// 1) Создайте функцию, которая будет на вход принимать 1 аргумент с именем человека и возвращать строку.
// Пример: вызов функции sayHello('Антон') возвращает строку "Привет, Антон!".
// В решении вызывать функцию не нужно, программа сделает это за вас.
// P.S. возвращать - это использовать ключевое слово return.
// P.S.S. Это классическая функция-модификатор, которых мы дальше по курсу будем
// создавать еще много в разных видах.

// function sayHello(str) {
//   return `Привет, ${str}`;
// }
// sayHello("Женя");

// function sayHello(name) {
//   return `Привет, ${name}!`;
// }
// sayHello("Alex");

// 2) Создайте функцию, которая принимает в себя 1 аргумент в виде целого числа и возвращает
// массив из трех чисел: одно на 1 меньше, сам аргумент, и число на 1 больше.
// Пример: вызов функции returnNeighboringNumbers(5) возвращает массив в виде [4, 5, 6].
// function returnNeighboringNumbers(number) {
//   arr = [];

//   arr.push([number - 1]);
//   arr.push([number]);
//   arr.push([number + 1]);
//   console.log(arr);
//   return arr;
// }
// returnNeighboringNumbers(10);

// 3) Создайте функцию, которая будет принимать в себя 2 аргумента, оба числа.
// Первое число - это база, второе число - это сколько раз нужно будет повторить
// это число в прогрессии. (Смотри пример ниже). Функция должна возвращать строку
// (или число в особых случаях, о которых ниже), где эти числа идут по порядку,
// разделенные тремя дефисами "---". После последнего числа их не должно быть.
// Если второй аргумент не является числом, равен или меньше нуля - то возвращать
// просто первый аргумент. (Проверяем через оператор typeof)
function getMathResult(number, times) {
  if (typeof times !== "number" || times < 0) {
    return number;
  }
  let str = "";
  for (let i = 0; i <= times; i++) {
    if (i === times) {
      str += `${number * i}`;
    } else {
      str += `${number * i}---`;
    }
  }
  return str;
}
// getMathResult(5, 3);
// getMathResult(3, 10);
// getMathResult(10, 5);
// getMathResult(10, "5");
// getMathResult(10, 0);
// getMathResult(20, -5);
// Примеры:
// Вызов функции getMathResult(5, 3) даст ответ 5---10---15
// Вызов функции getMathResult(3, 10) даст ответ 3---6---9---12---15---18---21---24---27---30
// Вызов функции getMathResult(10, 5) даст ответ 10---20---30---40---50
// Вызов функции getMathResult(10, '5') даст ответ 10
// Вызов функции getMathResult(10, 0) даст ответ 10
// Вызов функции getMathResult(20, -5) даст ответ 20
// Эта задача уже ближе к реальности, когда вам нужно учитывать и тип данных у аргументов,
//  проверять их и продумывать логику работы внутри. Обратите внимание на прогрессию,
//  она рассчитывается по простой формуле умножения. Если первый аргумент 5, а второй 3,
//   то число повторяется 3 раза, каждый раз увеличиваясь на само себя. Это базовая математика,
//   которая и нужна для работы в 95% случае на фронтенде.
// Да, задача сложнее, но она просто объединяет все то, что мы уже учили.

// Лекция 29
// (*) Продвинутые задания на использование функций
// 1) Создайте функцию, которая будет вычислять объем и площадь полной поверхности куба
//  (тоже базовая математика, иногда используется в создании анимаций).
//  Эта функция принимает в себя целое число со значением длины ребра куба.
//  Ответ выведите в формате строки, который изображен в примерах.

// Если в функцию попал неправильный аргумент или вычислить значения невозможно -
// вернуть строку "При вычислении произошла ошибка"

// НЕ ИСПОЛЬЗУЙТЕ ОПЕРАТОР СТЕПЕНИ ** - в онлайн среде браузера он не работает и
// тесты будут ломаться. Это из-за того, что этот оператор из более нового стандарта, чем тут доступен.

function calculateVolumeAndArea(edge) {
  if (typeof edge !== "number" || edge < 0 || !Number.isInteger(edge)) {
    console.log("При вычислении произошла ошибка");
    return "При вычислении произошла ошибка";
  }
  let Volume = Math.pow(edge, 3);
  let Area = 6 * Math.pow(edge, 2);
  console.log(`Объем куба: ${Volume}, площадь всей поверхности: ${Area}`);
}
// calculateVolumeAndArea(5);
// calculateVolumeAndArea(15);
// calculateVolumeAndArea(15.5);
// calculateVolumeAndArea("15");
// calculateVolumeAndArea(-15);
// calculateVolumeAndArea(5)  => 'Объем куба: 125, площадь всей поверхности: 150'
// calculateVolumeAndArea(15)  => 'Объем куба: 3375, площадь всей поверхности: 1350'
// calculateVolumeAndArea(15.5)  => 'При вычислении произошла ошибка'
// calculateVolumeAndArea('15')  => 'При вычислении произошла ошибка'
// calculateVolumeAndArea(-15)  => 'При вычислении произошла ошибка'

// 2) Постепенно переходим к более реалистичным задачам :) Вы обнаружите, что там используется все тоже самое.
// Напишите функцию, которая будет определять номер купе по переданному ей номеру места. Наглядно:

// Функция принимает только целое число от 1 до 36.
// Если переданный аргумент не число, отрицательное или дробное - возвращается сообщение:
// "Ошибка. Проверьте правильность введенного номера места"

// Если число 0 или больше 36, то сообщение: "Таких мест в вагоне не существует"
function getCoupeNumber(seatNum) {
  if (seatNum == 0 || seatNum >= 36) {
    console.log("Таких мест в вагоне не существует");
  } else if (
    typeof seatNum != "number" ||
    seatNum < 0 ||
    !Number.isInteger(seatNum)
  ) {
    console.log("Ошибка. Проверьте правильность введенного номера места");
  }
  console.log(Math.ceil(seatNum / 4));
  return Math.ceil(seatNum / 4);
}

// getCoupeNumber(33);
// getCoupeNumber(7);
// getCoupeNumber(300);
// getCoupeNumber(0);
// getCoupeNumber(7.7);
// getCoupeNumber(-10);
// getCoupeNumber("Hello");
// getCoupeNumber(33)  => 9
// getCoupeNumber(7)  => 2
// getCoupeNumber(300)  => "Таких мест в вагоне не существует"
// getCoupeNumber(0)  => "Таких мест в вагоне не существует"
// getCoupeNumber(7.7)  => "Ошибка. Проверьте правильность введенного номера места"
// getCoupeNumber(-10)  => "Ошибка. Проверьте правильность введенного номера места"
// getCoupeNumber('Hello')  => "Ошибка. Проверьте правильность введенного номера места"

// Лекция 29

// 1) Создайте функцию, которая принимает в себя целое число минут и возвращает время в нужном формате
//  строки. (Смотри пример). Обратите внимание на окончание слова "час" - оно меняется в зависимости от
//  цифры. Если вместо аргумента приходит не число, дробное или отрицательное число - функция возвращает
//   строку "Ошибка, проверьте данные"

// Внимание! Давайте пока ограничимся максимум 600ю минутами (10 часов). Так как проверки на большие числа
// будут раздувать код (33 часа, 31 час, 11 часов и тд). Этого будет достаточно и код будет проверять именно
//  этот промежуток (1 - 10 часов). Но вы можете реализовать и полный скрипт, он тоже должен проходить тесты.

function getTimeFromMinutes(min) {
  if (typeof (min != "number") || min < 0 || !Number.isInteger(seatNum)) {
    console.log(`Ошибка, проверьте данные`);
    return `Ошибка, проверьте данные`;
  }
  let minutes;
  let hours;
  console.log(`Это ${hours} часа и ${minutes} минут`);
  return `Это ${hours} часа и ${minutes} минут`;
}
// getTimeFromMinutes(150);
// getTimeFromMinutes(50);
// getTimeFromMinutes(0);
// getTimeFromMinutes(-150);
// getTimeFromMinutes(150) => "Это 2 часа и 30 минут"
// getTimeFromMinutes(50) => "Это 0 часов и 50 минут"
// getTimeFromMinutes(0) => "Это 0 часов и 0 минут"
// getTimeFromMinutes(-150) => "Ошибка, проверьте данные"

//Лекция 35 Задачи на работу с объектами

// 1) Напишите функцию showExperience, которая будет принимать в себя объект со
// всеми данными и возвращать строку с опытом.
// Пример:
// showExperience(personalPlanPeter) => '1 month'
// P.S. желательно использовать деструктуризацию, но не обязательно
const personalPlanPeter = {
  name: "Peter",
  age: "29",
  skills: {
    languages: ["ru", "eng"],
    programmingLangs: {
      js: "20%",
      php: "10%",
    },
    exp: "1 month",
  },
  showAgeAndLangs: function (plan) {
    const age = plan.age;
    const { languages } = plan.skills;
    let str = `Мне ${age} и я владею языками:`;
    languages.forEach(function (lang) {
      str += `${lang.toUpperCase()} `;
    });
    console.log(str);
    return str;
  },
};
// personalPlanPeter.showAgeAndLangs(personalPlanPeter);

function showExperience(plan) {
  const { exp } = plan.skills;
  console.log(exp);
  return exp;
}
// showExperience(personalPlanPeter);

// 2) Напишите функцию showProgrammingLangs, которая будет принимать в себя объект
// со всеми данными и возвращать строку в нужном виде.
// Пример:
// showProgrammingLangs(personalPlanPeter)  =>
// "Язык js изучен на 20% Язык php изучен на 10%"
// Причем функция должна работать вне зависимости от количества языков. Если ни один не
// указан, то возвращается пустая строка.
// P.S. Для переноса строки используется \n в конце строки.
function showProgrammingLangs(plan) {
  // let str = "";
  // const proglang = plan.skills.programmingLangs;
  // for (key in proglang) {
  //   str += `Язык ${key} изучен на ${proglang[key]} \n`;
  // }
  // console.log(str);
  // return str;
  let str = "";
  const { programmingLangs } = plan.skills;

  for (let key in programmingLangs) {
    str += `Язык ${key} изучен на ${programmingLangs[key]}\n`;
  }
  console.log(str);
  return str;
}
// showProgrammingLangs(personalPlanPeter);

// 3) Создайте метод showAgeAndLangs внутри объекта personalPlanPeter. При его вызове метод будет
// принимать в себя объект и возвращать строку в нужном виде.
// Пример:
// personalPlanPeter.showAgeAndLangs(personalPlanPeter)
// => 'Мне 29 и я владею языками: RU ENG'
// Заметьте, что возраст и языки подставляются автоматически из объекта, а языки всегда в
// верхнем регистре (большими буквами). Если данные в объекте поменяются, то и сообщение тоже изменится.

// 1) Напишите функцию showFamily, которая будет принимать в себя массив строк
// и возвращать сообщение в нужном формате.
// showFamily(family)  => 'Семья состоит из: Peter Ann Alex Linda'
// Имена подставляются автоматически из массива. Если массив пустой,
// то выводится сообщение 'Семья пуста'

const family = ["Peter", "Ann", "Alex", "Linda"];
function showFamily(arr) {
  let str = "";
  if (arr.length == 0) {
    str = "Семья пуста";
  } else {
    str = "Семья состоит из: ";
  }
  arr.forEach(function (elem) {
    str += ` ${elem}`;
  });
  console.log(str);
  return str;
}
// showFamily(family);

// 2) напишите функцию standardizeStrings, которая будет принимать в себя массив строк и
// будет выводить в консоль эти строки в нижнем регистре.
// Пример:
// standardizeStrings(favoriteCities)  выведет в консоль
// lisbon
// rome
// milan
// dublin
// Это частая задача в реальности, так как от пользователя нам могут прийти ответы в самых
// разных форматах. В том числе и с разными буквами :) Поэтому нам нужно привести строки в
// один формат для правильной работы.
function standardizeStrings(arr) {
  arr.forEach(function (elem) {
    console.log(elem.toLowerCase());
  });
}
// standardizeStrings(["A", "B", "C", "D", "E"]);

// 3) Задача с собеседований. Напишите функцию reverse, которая принимает в себя строку и
// возвращает эту строку в обратном порядке.
// Пример:
// const someString = 'This is some strange string';
// reverse(someString) => 'gnirts egnarts emos si sihT'
function reverse(str) {
  if (typeof str !== "string") {
    console.log("Ошибка");
    return "Ошибка!";
  } else {
    // let arr = str.split("");
    // let resArr = arr.reverse();
    // let strRes = resArr.join("");
    // // return str.split("").reverse().join("");
    // return strRes;
    let newStr = "";
    for (let i = str.length - 1; i >= 0; i--) {
      console.log(str[i]);
      newStr += str[i];
    }
    return newStr;
  }
}
// reverse("This is some strange string");
// reverse(1);
// Функцию можно применить к любой строке. Если в функцию приходит не строка - вернуть сообщение "Ошибка!"
// Это очень интересная задача, которую можно решить несколькими способами. Её дают для того, чтобы
// оценить навыки и знания программиста, посмотреть как он думает. Как небольшая подсказка,
// есть метод, который может вам помочь. И часть дополнительных вариантов решения мы тоже
// изучим в течении курса.
// Может показать сложной с первого взгляда, но это совсем не так 🙂

// 4) Представьте такую реальную ситуацию. У вас есть банкомат, который выдает деньги из двух
// разных банков в разных валютах. Один банк основной с базовыми валютами, второй дополнительный
// с прочими валютами:
// const baseCurrencies = ['USD', 'EUR'];
// const additionalCurrencies = ['UAH', 'RUB', 'CNY'];
// Вам нужно создать главную функцию банкомата availableCurr, которая принимает два аргумента:
// первый - это массив со всеми доступными валютами из двух банков сразу (сейчас представим,
//   что они не могут повторяться), второй - необязательный аргумент, который указывает ту
//   валюту, которая сейчас закончилась в банкомате. Если массив в первом аргументе пустой -
//   то функция возвращает строку 'Нет доступных валют'. Функция возвращает строку в нужном виде.
// Пример:
// availableCurr(['UAH', 'RUB', 'CNY'], 'CNY')
// Вернет строку:
// Доступные валюты:
// UAH
// RUB
// Заметьте:
// - CNY (юань) исчез из списка валют, значит такая валюта закончилась
// - После валюты: стоит перенос строки \n, и после каждой валюты тоже. Это важно для тестов
// - Данные для первого аргумента должны приходить сразу из двух банков, причем сначала baseCurrencies,
//  потом additionalCurrencies по порядку
const baseCurrencies = ["USD", "EUR"];
const additionalCurrencies = ["UAH", "RUB", "CNY"];
function availableCurr(avail, unAvail) {
  let str = "";
  if (avail.length == 0) {
    console.log("Нет доступных валют");
    return "Нет доступных валют";
  } else {
  }
}
// availableCurr(["UAH", "RUB", "CNY"], "CNY");

// Задача 37.1(*) Продвинутая задача на работу с объектами и массивами
// У вас есть небольшой кусочек данных о торговом центре, которые записаны в объекте shoppingMallData.
//  Они содержат массив с данными о магазинах, где указана длина и ширина помещения; высоту помещения;
//  стоимость отопления за 1 кубический метр и бюджет на оплату отопления за месяц.

// Основная задача - это написать функцию isBudgetEnough, которая буде возвращать строку.
//  Если бюджета хватает для отопления всего объема торгового центра - выводится 'Бюджета достаточно',
//  если нет - 'Бюджета недостаточно'. И все 🙂
// Но эта задача содержит несколько подзадач внутри:
// - вычисление общей площади всех магазинов, которая вычисляется как длина магазина, умноженная на его ширину;
// - вычисление общего объема торгового центра, так как цена отопления указана в кубических метрах;
// - определение того, хватает ли бюджета на оплату такого объема;
// - все числа идут без единиц измерения для упрощения, просто цифры и все;
// - функция должна продолжать работать, даже если изменяется количество магазинов, высота,
//  бюджет или подставляется вообще другой объект.
const shoppingMallData = {
  shops: [
    {
      width: 10,
      length: 5,
    },
    {
      width: 15,
      length: 7,
    },
    {
      width: 20,
      length: 5,
    },
    {
      width: 8,
      length: 10,
    },
  ],
  height: 5,
  moneyPer1m3: 30,
  budget: 50000,
};

function isBudgetEnough(data) {
  let allSquare = 0;
  let volume = 0;
  data.shops.forEach(function (shop) {
    allSquare += shop.width * shop.length;
    // console.log(allSquare);
  });
  volume = data.height * allSquare;
  // console.log(volume);
  if (volume * data.moneyPer1m3 < data.budget) {
    return "Бюджета достаточно";
  } else {
    return "Бюджета не достатно";
  }
}
// isBudgetEnough(shoppingMallData);

// Задача 37.2(*)Продвинутая задача на работу с объектами и массивами
// У вас есть список учеников, которые хотят поиграть в игру:

// const students = ['Peter', 'Andrew', 'Ann', 'Mark', 'Josh', 'Sandra', 'Cris', 'Bernard', 'Takesi', 'Sam'];
// Но команд может быть только 3 по 3 человека. Напишите функцию sortStudentsByGroups, которая принимает
// в себя массив строк.

// Внутри она сначала сортирует имена по алфавиту. Затем распределяет учеников по 3 человека в 3
// группы по алфавитному порядку. Эти группы должны быть массивами. Как итог, функция возвращает
//  новый массив с тремя командами и строкой как 4й элемент.

// Пример:
// sortStudentsByGroups(students)  =>
// [
//   [ 'Andrew', 'Ann', 'Bernard' ],
//   [ 'Cris', 'Josh', 'Mark' ],
//   [ 'Peter', 'Sam', 'Sandra' ],
//   'Оставшиеся студенты: Takesi'
// ]
// Если убрать одно студента из списка, то результат будет:
// [
//   [ 'Andrew', 'Ann', 'Bernard' ],
//   [ 'Cris', 'Josh', 'Mark' ],
//   [ 'Peter', 'Sam', 'Sandra' ],
//   'Оставшиеся студенты: -'
// ]
// А если добавить одного, то:

// [
//   [ 'Andrew', 'Ann', 'Bernard' ],
//   [ 'Cris', 'Josh', 'Mark' ],
//   [ 'Peter', 'Sam', 'Sandra' ],
//   'Оставшиеся студенты: Takesi, Somebody'
// ]
// То есть, меняется содержимое строки. Все оставшиеся ученики попадают туда.

// Задача интересная, немного заковыристая, но все необходимое для неё мы уже проходили.
// Просто распишите логику действий строка за строкой.
const students = [
  "Peter",
  "Andrew",
  "Ann",
  "Mark",
  "Josh",
  "Sandra",
  "Cris",
  "Bernard",
  "Takesi",
  "Sam",
];

function sortStudentsByGroups(arr) {
  arr.sort();
  const groupA = [];
  const groupB = [];
  const groupC = [];
  const rest = [];
  for (let i = 0; i < arr.length; i++) {
    if (i < 3) {
      a.push(arr[i]);
    } else if (i < 6) {
      b.push(arr[i]);
    } else if (i < 9) {
      c.push(arr[i]);
    } else {
      rest.push(arr[i]);
    }
  }
  return [
    a,
    b,
    c,
    `Оставшиеся студенты:${rest.length === 0 ? " -" : rest.join(",")}`,
  ];
}
// sortStudentsByGroups(students);

function foo(a, b) {
  const [first] = a;

  const { eng } = b;

  return `${first} ${eng}`;
}

// const result = foo(["Hello", "Привет"], { ru: "Мир", eng: "World" });

// Задачи с собесов

// •	Какое будет выведено значение: let x = 5; alert( x++ ); ?
// x=5
// •	Чему равно такое выражение: [ ] + false - null + true ?
// NaN
// •	Что выведет этот код: let y = 1; let x = y = 2; alert(x); ?
// 2
// •	Чему равна сумма [ ] + 1 + 2?
// 12
// •	Что выведет этот код: alert( "1"[0] )?
// 1
// •	Чему равно 2 && 1 && null && 0 && undefined ?
// null
// •	Есть ли разница между выражениями? !!( a && b ) и (a && b)?
// не равны бул не равно a b
// •	Что выведет этот код: alert( null || 2 && 3 || 4 ); ?
// 3
// •	a = [1, 2, 3]; b = [1, 2, 3]; Правда ли что a == b ?
// нет, два массива с одинаковыми данными
// •	Что выведет этот код: alert( +"Infinity" ); ?
// number
// •	Верно ли сравнение: "Ёжик" > "яблоко"?
// нет
// console.log("Ёжик" > "яблоко");
// •	Чему равно 0 || "" || 2 || undefined || true || falsе ?
// 2

// Задания на поиск ошибок в коде 41.1
// У вас есть объект с данными о ресторане. Начинающий разработчик создал несколько функций,
// которые работают неправильно и он не может понять почему. Нужно исправить функции так,
// чтобы они давали всегда правильный результат.

// Сейчас функция работает, но постоянно выдает неправильный результат. Ведь из представленного
//  меню сумма двух любых цен всегда будет больше 20. Необходимо найти причину и исправить.

const restorantData = {
  menu: [
    {
      name: "Salad Caesar",
      price: "14$",
    },
    {
      name: "Pizza Diavola",
      price: "9$",
    },
    {
      name: "Beefsteak",
      price: "17$",
    },
    {
      name: "Napoleon",
      price: "7$",
    },
  ],
  waitors: [
    { name: "Alice", age: 22 },
    { name: "John", age: 24 },
  ],
  averageLunchPrice: "20$",
  openNow: true,
};
// 1) Функция isOpen не хочет правильно работать. Что мы уже не пробовали подставлять в неё
// - результат все время неправильный. Необходимо найти причины и исправить.
function isOpen(prop) {
  let answer = "";
  prop ? (answer = "Открыто") : (answer = "Закрыто");

  return answer;
}

// console.log(isOpen(restorantData.openNow));

// 2) Функция isAverageLunchPriceTrue должна брать цены двух любых блюд из меню, складывать
// их и сравнивать с средним чеком (averageLunchPrice).
function isAverageLunchPriceTrue(fDish, sDish, average) {
  if (
    +fDish.price.slice(0, -1) + +sDish.price.slice(0, -1) <
    +average.slice(0, -1)
  ) {
    return "Цена ниже средней";
  } else {
    return "Цена выше средней";
  }
}

// console.log(
//   isAverageLunchPriceTrue(
//     restorantData.menu[0],
//     restorantData.menu[1],
//     restorantData.averageLunchPrice
//   )
// );
// 3) Функция transferWaitors создана для того, чтобы копировать шаблон данных и передавать их
//  в другой ресторан. Конечно, в другом ресторане будут другие блюда, другие официанты и тп.
//  Сейчас эта функция только в начале разработки и должна менять данные про официантов.
// Но в нынешнем виде мы обнаружили, что после её запуска не только копия данных содержит новых
// официантов, но и основные данные! В restorantData сотрудник Alice исчезает и заменяется Mike!
//  Необходимо найти причину и немедленно исправить, чтобы данные были разделены.
// P.S. Может показаться сложным, но задача решается очень просто, если вы помните один принцип :)
function transferWaitors(data) {
  const copy = Object.assign({}, data);

  copy.waitors = { name: "Mike", age: 32 };
  console.log(copy);
  return copy;
}

// transferWaitors(restorantData);
