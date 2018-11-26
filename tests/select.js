// Встроенный в Node.JS модуль для проверок
var assert = require('assert');

// Подключаем свою функцию
var lib = require('../index.js');

var friends = [
    {
        name: 'Сэм',
        gender: 'Мужской',
        email: 'luisazamora@example.com',
        favoriteFruit: 'Картофель'
    },
    {
        name: 'Эмили',
        gender: 'Женский',
        email: 'example@example.com',
        favoriteFruit: 'Яблоко'
    },
    {
        name: 'Мэт',
        gender: 'Мужской',
        email: 'danamcgee@example.com',
        favoriteFruit: 'Яблоко'
    },
    {
        name: 'Брэд',
        gender: 'Мужской',
        email: 'newtonwilliams@example.com',
        favoriteFruit: 'Банан'
    },
    {
        name: 'Шерри',
        gender: 'Женский',
        email: 'danamcgee@example.com',
        favoriteFruit: 'Картофель'
    },
    {
        name: 'Керри',
        gender: 'Женский',
        email: 'danamcgee@example.com',
        favoriteFruit: 'Апельсин',
        blah: 'minor'
    },
    {
        name: 'Стелла',
        gender: 'Женский',
        email: 'waltersguzman@example.com',
        favoriteFruit: 'Картофель'
    }
];

var selector = lib.select('gender', 'email', 'blah');
var selector2 = lib.select('email', 'favoriteFruit');
var result = selector(friends);
result = selector2(result);

assert.deepEqual(result, [
    { email: 'luisazamora@example.com' },
    { email: 'example@example.com' },
    { email: 'danamcgee@example.com' },
    { email: 'newtonwilliams@example.com' },
    { email: 'danamcgee@example.com' },
    { email: 'danamcgee@example.com' },
    { email: 'waltersguzman@example.com' }
]);

console.log(result);