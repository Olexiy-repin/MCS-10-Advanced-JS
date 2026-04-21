/*
 * Основи запиту
 * - Fetch API
 * - URL запиту
 * - Владка Network
 * - Обробка відповіді response (404 з fetch)
 *
 * https://jsonplaceholder.typicode.com/
 */

fetch('https://jsonplaceholder.typicode.com/posts')
  .then(response => {
    console.log(response);

    if (!response.ok) {
      throw new Error(response.status);
    }

    return response.json();
  })
  .then(data => {
    console.log(data);
  })
  .catch(err => {
    console.dir(err);

    if (err.message === '404') {
      alert('Пости не знайдено!');
    }
  });

// try {
//   throw new Error('My error!');
// } catch (err) {
//   console.dir(err);
// }
