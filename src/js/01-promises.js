/*
 * Створення та обробка промісу
 * - Клас Promise
 * - resolve
 * - reject
 * - then, catch, finally
 */

// const promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     const isSuccess = Math.random() > 0.5;

//     if (isSuccess) {
//       resolve('Done!');
//     } else {
//       reject('Error!');
//     }
//   }, 1000);
// });

// console.log(promise);

/*
 * Ланцюжки промісів
 * - декілька послідовних then
 * - then повертає проміс
 */

// promise
//   .then(result => {
//     console.log('Hello from method then()');
//     console.log(result);

//     const somePromise = new Promise((resolve, reject) => {
//       resolve('Hello world!');
//     });

//     return somePromise;
//   })
//   .then(result => {
//     console.log(result);
//   })
//   .catch(err => {
//     console.log('Hello from method catch()');
//     console.log(err);
//   })
//   .finally(() => {
//     console.log('Hello from finally()');
//   });

//TODO: Що буде у консолі
// const promise = new Promise((resolve, reject) => {
//   resolve('1');
// });

// promise
//   .then(data => {
//     console.log(data); // '1'
//   })
//   .then(data => {
//     console.log(data); // undefined

//     return '2';
//   })
//   .then(data => {
//     console.log(data); // '2'
//   });

//TODO: Що буде у консолі
// const promise = new Promise((resolve, reject) => {
//   reject('error');
// });

// promise
//   .then(data => {
//     console.log(data);
//   })
//   .then(data => {
//     console.log(data);

//     return '2';
//   })
//   .then(data => {
//     console.log(data);
//   })
//   .catch(err => {
//     console.log(err); // 'error'
//   });
