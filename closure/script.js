const fun = () => {
  let x = 0
  console.log({x})
}

fun()

function fun2() {
  console.log('Вызов функции через переменную!')
}

const y = fun2
console.log('y', y)

// y() вызов функции через переменную

function fun3(callback) {
  callback()
}

// функция - это объект
// мы можем передавать ссылку на объект
fun3(fun2) // передача ссылки на функцию fun2 в качестве аргумента функции fun3

function fun4() {
  return function () {
    console.log('Еще замыкание!')
  }
}

const v = fun4()

v()

function getSum(...args) {
  return [0, ...args].reduce((a, b) => a + b)
}

console.log(getSum(0, 1, 3, 2, 4, 5))

// ===========================

// function getSummator(a) {
//   return function (b) {
//     return a + b
//   }
// }

const getSummator = a => b => a + b // тоже самое

const add10 = getSummator(10)
const add100 = getSummator(100)

add10(32)
add100(32)

console.log('Замыкание: add10(32)', add10(32))
console.log('Замыкание: add100(100)', add100(32))

console.log('add10', {add10})

function getByItems(array) {
  let i = 0

  return function () {
    const item = array[i]
    i = (i + 1) % array.length 
    return item
  }
}

const names = ['Алексей', 'Сергей', 'Дмитрий']
const getName = getByItems(names)

console.log('getName', getName())
console.log('getName', getName())
console.log('getName', getName())



/*
Замыкание (англ. closure) в программировании — функция первого класса, 
в теле которой присутствуют ссылки на переменные, объявленные вне тела этой 
функции в окружающем коде и не являющиеся её параметрами. Говоря другим языком, 
замыкание — функция, которая ссылается на свободные переменные в своей области видимости.

Замыкание, так же как и экземпляр объекта, есть способ представления функциональности 
и данных, связанных и упакованных вместе.

Замыкание — это особый вид функции. Она определена в теле другой функции и создаётся 
каждый раз во время её выполнения. Синтаксически это выглядит как функция, находящаяся 
целиком в теле другой функции. При этом вложенная внутренняя функция содержит ссылки на 
локальные переменные внешней функции. Каждый раз при выполнении внешней функции происходит 
создание нового экземпляра внутренней функции, с новыми ссылками на переменные внешней функции.

В случае замыкания ссылки на переменные внешней функции действительны внутри вложенной функции 
до тех пор, пока работает вложенная функция, даже если внешняя функция закончила работу, и переменные 
вышли из области видимости.

Замыкание связывает код функции с её лексическим окружением (местом, в котором она определена в коде). 
Лексические переменные замыкания отличаются от глобальных переменных тем, что они не занимают глобальное 
пространство имён. От переменных в объектах они отличаются тем, что привязаны к функциям, а не объектам.
*/