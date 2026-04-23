/*
 * Використовуємо сервіс https://mockapi.io/ для створення бекенду
 */

/*
 * Read (GET)
 */
// const fetchAllBooks = () => {
//   return fetch('https://69ea4c4c15c7e2d51269a300.mockapi.io/books').then(response => {
//     if (!response.ok) {
//       throw new Error(response.status);
//     }

//     return response.json();
//   });
// };

// fetchAllBooks()
//   .then(data => {
//     console.log(data);
//   })
//   .catch(err => {
//     console.log(err);
//   });

// const fetchBookById = bookId => {
//   return fetch(`https://69ea4c4c15c7e2d51269a300.mockapi.io/books/${bookId}`).then(response => {
//     if (!response.ok) {
//       throw new Error(response.status);
//     }

//     return response.json();
//   });
// };

// fetchBookById(5)
//   .then(data => {
//     console.log(data);
//   })
//   .catch(err => {
//     console.log(err);
//   });

/*
 * Create (POST)
 */
// const addBook = bookInfo => {
//   const fetchOptions = {
//     method: 'POST',
//     body: JSON.stringify(bookInfo),
//     headers: {
//       'Content-Type': 'application/json',
//     },
//   };

//   return fetch('https://69ea4c4c15c7e2d51269a300.mockapi.io/books', fetchOptions).then(response => {
//     if (!response.ok) {
//       throw new Error(response.status);
//     }

//     return response.json();
//   });
// };

// addBook({
//   title: 'Тестова книга з CSS',
//   author: 'Я',
//   genres: ['CSS'],
// })
//   .then(book => {
//     console.log(book);
//   })
//   .catch(error => {
//     console.log(error);
//   });

// addBook({
//   title: 'Тестова книга з HTML',
//   author: 'Я',
//   genres: ['HTML'],
// })
//   .then(book => {
//     console.log(book);
//   })
//   .catch(error => {
//     console.log(error);
//   });

/*
 * Update (PUT/PATCH)
 */
// const updateBookById = (bookInfoForUpdate, bookId) => {
//   const fetchOptions = {
//     method: 'PUT',
//     body: JSON.stringify(bookInfoForUpdate),
//     headers: {
//       'Content-Type': 'application/json',
//     },
//   };

//   return fetch(`https://69ea4c4c15c7e2d51269a300.mockapi.io/books/${bookId}`, fetchOptions).then(response => {
//     if (!response.ok) {
//       throw new Error(response.status);
//     }

//     response.json();
//   });
// };

// updateBookById({ title: 'Велика нова книга по NODEJS' }, 9)
//   .then(data => {
//     console.log(data);
//   })
//   .catch(err => {
//     console.log(err);
//   });

// updateBookById({ author: 'Я' }, 8)
//   .then(data => {
//     console.log(data);
//   })
//   .catch(err => {
//     console.log(err);
//   });

// updateBookById({ title: 'Нова книга по CSS', author: 'Манго' }, 7)
//   .then(data => {
//     console.log(data);
//   })
//   .catch(err => {
//     console.log(err);
//   });

/*
 * Delete (DELETE)
 */
// const deleteBookById = bookId => {
//   const fetchOptions = {
//     method: 'DELETE',
//   };

//   return fetch(`https://69ea4c4c15c7e2d51269a300.mockapi.io/books/${bookId}`, fetchOptions).then(response => {
//     if (!response.ok) {
//       throw new Error(response.status);
//     }

//     return response.json();
//   });
// };

// deleteBookById(4)
//   .then(data => {
//     console.log(data);
//   })
//   .catch(err => {
//     console.log(err);
//   });
