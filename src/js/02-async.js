/*
 * Синтаксис async/await
 * try...catch
 */

// const fn = async () => {
//   const promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve('Done!');
//     }, 2000);
//   });

//   const result = await promise;

//   console.log(result);
// };

// fn();

//TODO: Запит за постами і обробка відповіді через async/await
// const fetchPosts = async () => {
//   try {
//     const response = await fetch('https://jsonplaceholder.typicode.com/posts');

//     if (!response.ok) {
//       throw new Error(response.status);
//     }

//     const data = await response.json();

//     console.log(data);
//   } catch (err) {
//     console.log(err);
//   }
// };

// fetchPosts();

//TODO: Запит за постами і обробка відповіді через async/await та then()/catch()
// const fetchPosts = async () => {
//   const response = await fetch('https://jsonplaceholder.typicode.com/posts');

//   if (!response.ok) {
//     throw new Error(response.status);
//   }

//   return response.json();
// };

// fetchPosts()
//   .then(data => {
//     console.log(data);
//   })
//   .catch(err => {
//     console.log(err);
//   });

//TODO: Запит за постами і обробка відповіді через async/await на верхньому рівні модуля
// const fetchPosts = async () => {
//   const response = await fetch('https://jsonplaceholder.typicode.com/posts');

//   if (!response.ok) {
//     throw new Error(response.status);
//   }

//   return response.json();
// };

// const data = await fetchPosts();

// console.log(data);
