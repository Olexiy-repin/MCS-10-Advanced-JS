/*
 * Формат JSON
 *
 * - Метод JSON.stringify(value)
 * - Метод JSON.parse(value)
 * - Перетворення функцій
 */

//~ метод JSON.parse()
// const userJSON = '{"firstName": "Oleksii","lastName": "Repin", "age": 30}';

// console.log(userJSON);

// console.log(JSON.parse(userJSON));

//~ метод JSON.stringify()
// const user = {
//   firstName: 'Oleksii',
//   lastName: 'Repin',
//   age: 30,

//   getFullName() {
//     return `${this.firstName} ${this.lastName}`;
//   },
// };
// const userJSON = JSON.stringify(user);

// console.log(user);
// console.log(userJSON);

// const users = [
//   {
//     firstName: 'Tillie',
//     lastName: 'Sparks',
//     age: 30,
//   },
//   {
//     firstName: 'Maggie',
//     lastName: 'Riley',
//     age: 32,
//   },
//   {
//     firstName: 'Bobby',
//     lastName: 'Hampton',
//     age: 20,
//   },
// ];
// const usersJSON = JSON.stringify(users);

// console.log(users);
// console.log(usersJSON);

/*
 * Конструкція try...catch для обробки помилок
 */
// console.log('Start');

// try {
//   const userJSON = '{"firstName": "Oleksii", "age": 30,}';

//   const user = JSON.parse(userJSON);
// } catch (err) {
//   console.log(err);
// }

// console.log('End');
