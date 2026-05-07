/*
 * Return Type
 * Void
 * Never
 * Function Type
 * Optional parameters
 */

//* Return Type

/*
TODO: Типізуй функцію getBooksTitles(books),
TODO: яка буде приймати до параметру books масив книг,
TODO: а повертати буде масив із назвами книг.
*/
// type Book = {
//   title: string;
//   description: string;
//   rating: number;
// };

// const books = [
//   {
//     title: 'JS',
//     description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, illo.',
//     rating: 9,
//   },
//   {
//     title: 'HTML',
//     description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, illo.',
//     rating: 8.5,
//   },
//   {
//     title: 'CSS',
//     description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, illo.',
//     rating: 9,
//   },
// ];

// const getBooksTitles = (books: Book[]): string[] => {
//   return books.map(book => book.title);
// };

// console.log(getBooksTitles(books));

//* Void
// function greet(firstName: string, lastName: string): void {
//   console.log(`Welcome ${firstName} ${lastName}`);
// }

// greet('Jorge', 'Moran');

//* Never
// function generateError(message: string): never {
//   throw new Error(message);
// }

// try {
//   generateError('error');
// } catch (err) {
//   console.log(err);
// }

//* Function Type
// type GreetCallback = (a: string, b: string) => void;

// function greet(cb: GreetCallback) {
//   const firstName: string = prompt('Your first name') || 'Anonymus';
//   const lastName: string = prompt('Your last name') || 'Anonymus';

//   cb(firstName, lastName);
// }

// greet((firstName, lastName) => {
//   console.log(`Hello ${firstName} ${lastName}`);
// });

//* Optional parameters
/*
TODO: Зробіть параметри функції greetUser опціональними, щоб виправити помилки типізації.
TODO: Очікується, що функцію можуть викликати з двома, одним аргументом або без аргументів.
TODO: Функція виводить до консолі:
TODO:   - Якщо 2 аргументи, 'Welcome {{firstName}} {{lastName}}'
TODO:   - Якщо 1 аргумент, 'Welcome {{firstName}}'
TODO:   - Якщо без аргументів, 'Welcome anonymus'
*/
// const greetUser = (firstName?: string, lastName?: string): void => {
//   if (lastName !== undefined) {
//     console.log(`Welcome ${firstName} ${lastName}`);
//   } else if (firstName !== undefined) {
//     console.log(`Welcome ${firstName}`);
//   } else {
//     console.log('Welcome anonymus');
//   }
// };

// greetUser('Oleksii', 'Repin');
// greetUser('Oleksii');
// greetUser();
