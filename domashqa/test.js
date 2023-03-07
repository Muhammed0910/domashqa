//Test 1
1
//что выведет в консоли функция call?
const person1 = {
    name: 'Alex',
    age: 24,
    call: function() {
        console.log(`${this.name} = ${this.age}`);
    }
}
//Alex24

2
//получите доступ к методу call и запустите его
const person2 = {
    name: 'Alex',
    age: 24,
    call: function() {
        console.log(`${this.name} = ${this.age}`);
    }
}
console.log(person2.call)

3
//выведите в консоли все ключи из обьекта с помощью for
const person3 = {
    name: 'Alex',
    age: 24,
    city: 'Baku',
    call: function() {
        console.log(`${this.name} = ${this.age}`);
    }
}

for(person3 in x){
  console.log(x)
}

4
//выведите в консоли все значения из обьекта c помощью for
const person4 = {
    name: 'Alex',
    age: 24,
    city: 'Baku',
    call: function() {
        console.log(`${this.name} = ${this.age}`);
    }
}

5
//преобразуйте обьект ниже в массив
const person5 = {
    name: 'Alex',
    age: 24,
    city: 'Baku',
    call: function() {
        console.log(`${this.name} = ${this.age}`);
    }
}

6
//преобразуйте обьект ниже в строку
const person6 = {
    name: 'Alex',
    age: 24,
    city: 'Baku',
    call: function() {
        console.log(`${this.name} = ${this.age}`);
    }
}

7
//преобразуйте обьект ниже в конструктор функции
let obj = {
    name: 'Alex',
    age: 24,
    isMarried: false,
    hasCar: false,
    hasJob: true,
    job: 'Programmer',
    childs: ['Hanz', 'Marry'],
    awards: {
        itMaster: 'Legend rang',
        driver: 'Fast man'
    }
}

8
//перечисли встроенные конструкторы javascript

9
//создайте новый обьект используя конструктор ниже
function Person(name, age, job) {
    this.name = name;
    this.age = age;
    this.job = job;
}

//Test 2

//?

//Test 3
1
//что такое JSON?
//текстовый формат обмена данными, основанный на JavaScript.
2
//зачем использовать JSON?  
//json используется для упорядоченного хранения данных в процессе их обмена
3
//преобразуйте строку ниже в обьект JSON и выведите в консоли
let str = '{name: "Alex", age: 24}';
const obj1 = JSON.parse('{name: "Alex", age: 24}')
4
//преобразуйте обьект ниже в строку и выведите в консоли
let object = {name: "Alex", age: 24};
const obj2 = JSON.stringify({name: "Alex", age: 24})
5
//создайте в отдельности 2 переменные и присвойте одному обьект JSON другому обьект Javascript
//?
6
//какие типы данных может содержать JSON обьект?
//число, cтрока, null, логический, массив, объект
7
//какие типы данных не может содержать обьект?
//function, date, undefined

8
//в каком виде мы получаем JSON с сервера?

9
//в каком виде мы отправляем JSON на сервер?