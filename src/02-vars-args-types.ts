/*
 * Типи для змінних та аргументів
 *
 * Any
 * Unknown
 * Tuple
 * Union Type
 * Literal Type
 * Enum
 * Intersection Type
 */

//* Any
// let someValue: any = 'Hello world';

// someValue = 1000;

// someValue = true;

// someValue = [];

//* Unknown
// let someValue: unknown = 'Hello world!';

// if (typeof someValue === 'string') {
//   someValue.indexOf('H');
// }

// someValue = [];

// if (Array.isArray(someValue)) {
//   someValue.push(100);
// }

//* Tuple
//TODO: Типізуй масив userCoordinates за допомогою кортежів.
// const userCoordinates: [number, number] = [10, 20];

/*
TODO: Створіть тип Point, який описує кортеж, що складається з трьох координат: x, y, z.
TODO:
TODO: Реалізуйте функцію isTheSamePoint(firstPoint, secondPoint), яка перевіряє дві точки на їхнє однакове розташування.
TODO: Дві точки збігаються, якщо збігаються всі їхні координати:
*/
// type Point = [number, number, number];

// const isTheSamePoint = (firstPoint: Point, secondPoint: Point) => {
//   return JSON.stringify(firstPoint) === JSON.stringify(secondPoint);
// };

// console.log(isTheSamePoint([1, 3, 4], [1, 3, 4])); // true
// console.log(isTheSamePoint([1, 3, 4], [0, 8, 4])); // false

//
//* Union Type
// let numOrStr: number | string = 1000;

// numOrStr = '2000';

// numOrStr = 100;

// numOrStr = {};

/*
TODO: Типізуй функцію lastIndex(str, char), яка повертає індекс останнього входження символу в рядок або null,
TODO: якщо такого символу немає.
*/
// function lastIndex(str: string, char: string) {
//   const lastIndexOfStr = str.lastIndexOf(char);

//   return lastIndexOfStr !== -1 ? lastIndexOfStr : null;
// }

// const result1: number | null = lastIndex('test', 't');
// const result2: number | null = lastIndex('test', 'p');

// console.log(result1); // 3
// console.log(result2); // null

//* Literal Type
/*
TODO: Опишіть літеральний тип для змінної orderStatus, яка може містити тільки такі значення:
TODO: 'Created', 'Paid', 'Shipped', 'Delivered';
*/
// let orderStatus: 'Created' | 'Paid' | 'Shipped' | 'Delivered' = 'Created';

//* Enum
/*
TODO: Реалізуйте enum ModalStatus із двома значеннями: Opened та Closed
TODO:
TODO: Реалізуйте функцію buildModal(text, status). Вона повертає об'єкт, що описує модальне вікно.
TODO: Параметри функції:
TODO: - text (текст, який має бути всередині вікна після ініціалізації);
TODO: - status (статус, з яким потрібно створити об'єкт вікна).
TODO:
TODO: Функція повертає об'єкт із двома полями: text (тут зберігається переданий текст) та status (тут зберігається переданий статус)
*/
// enum ModalStatus {
//   Closed = 'closed',
//   Opened = 'opened',
// }

// console.log(ModalStatus);

// const buildModal = (text: string, status: ModalStatus) => {
//   return {
//     text,
//     status,
//   };
// };

// const modalInstance = buildModal('My amazing modal', ModalStatus.Closed);

// console.log(modalInstance);

//* Intersection Type
/*
TODO: Реалізуй тип Admin, який є перетином типів AdminPermission та User.
TODO: Типізуй функцію addAdmin(user), яка приймає значення з типом User і повертає значення з типом Admin.
TODO: Як значення властивості permission повинно бути значення Permission.Read.
*/
// enum Permission {
//   Read = 'read',
//   Write = 'write',
//   Delete = 'delete',
// }

// type AdminPermission = { permission: Permission };

// type User = { login: string };

// type Admin = User & AdminPermission;

// function addAdmin(user: User) {
//   const newAdmin = {
//     ...user,
//     permission: Permission.Read,
//   };

//   return newAdmin;
// }

// const admin: Admin = addAdmin({ login: 'login1' });

// console.log(admin);
