/*
 * Function overloads
 * Generics
 */

//* Function overloads
/*
TODO: Створіть функцію createGreetMessage(value), яка повертає повідомлення привітання.
TODO: Очікується, що в функцію будуть передавати 1 аргумент,
TODO: це буде рядок з іʼмям або масив з іменами.
TODO: Якщо передали рядок, то і функція має повернути рядок з привітанням.
TODO: Якщо передали масив імен, то функція має повернути масив привітань.
*/
// function createGreetMessage(firstName: string): string;
// function createGreetMessage(names: string[]): string[];
// function createGreetMessage(value: unknown): unknown {
//   if (typeof value === 'string') {
//     return `Welcome ${value}!`;
//   }

//   if (Array.isArray(value)) {
//     return value.map(firstName => `Welcome ${firstName}!`);
//   }
// }

// const message = createGreetMessage(['Dean', 'Stanley', 'Della']);

/*
TODO: Створіть функцію createGreetMessage(firstName, lastName), яка повертає привітання.
TODO: Очікується, що в функцію будуть передавати 1 аргумент, 2 аргументи або 0.
TODO: Якщо передали 2 аргументи, функція повертає повідомлення 'Welcome {{firstName}} {{lastName}}!'.
TODO: Якщо передали 1 аргумент, функція повертає повідомлення 'Welcome {{firstName}}!'.
TODO: Якщо агрументів не передали, функція повертає повідомлення 'Welcome anonymus!'.
*/
// function createGreetMessage(firstName: string, lastName: string): string;
// function createGreetMessage(firstName: string): string;
// function createGreetMessage(): string;
// function createGreetMessage(firstName?: unknown, lastName?: unknown): unknown {
//   if (lastName !== undefined) {
//     return `Welcome ${firstName} ${lastName}`;
//   } else if (firstName !== undefined) {
//     return `Welcome ${firstName}`;
//   } else {
//     return `Welcome anonymus!`;
//   }
// }

// console.log(createGreetMessage('Oleksii', 'Repin'));
// console.log(createGreetMessage('Oleksii'));
// console.log(createGreetMessage());

/*
TODO: Створи функцію formatDate, яка може приймати:
TODO:   - Об'єкт Date — повертає рядок у форматі "YYYY-MM-DD"
TODO:   - Три числа — рік, місяць (1-12), день — і теж повертає форматований рядок
*/
// function formatDate(date: Date): string;
// function formatDate(year: number, month: number, day: number): string;
// function formatDate(dateOrYear: unknown, month?: unknown, day?: unknown): unknown {
//   if (dateOrYear instanceof Date) {
//     const instanceYear = dateOrYear.getFullYear();
//     const instanceMonth = String(dateOrYear.getMonth() + 1).padStart(2, '0');
//     const instanceDay = String(dateOrYear.getDate()).padStart(2, '0');

//     return `${instanceYear}-${instanceMonth}-${instanceDay}`;
//   }

//   return `${dateOrYear}-${String(month).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
// }

// console.log(formatDate(new Date(2025, 0, 7)));
// console.log(formatDate(2025, 1, 7));

//* Generics
/*
TODO: Реалізуйте функцію-дженерик last(items), яка повертає останній елемент масиву.
*/
// function last<T>(items: T[]): T {
//   return items[items.length - 1];
// }

// console.log(last<number>([3, 2])); // 2
// console.log(last(['hello', 'world'])); // world

/*
TODO: Реалізуйте функцію-дженерик swap(propA, propB), яка повертає кортеж з елементами у зворотному порядку.
*/
// function swap<PropAType, PropBType>(propA: PropAType, propB: PropBType): [PropBType, PropAType] {
//   return [propB, propA];
// }

// console.log(swap<string, number>('apple', 10)); // [10, 'apple']
// console.log(swap('isAdmin', true)); // [true, 'isAdmin']

/*
TODO: Partial<T>.
TODO: Типізуй функцію updateUser(user, dataForUpdate), яка оновлює дані користувача.
*/
// type User = {
//   id: number;
//   firstName: string;
//   email: string;
//   isAdmin: boolean;
// };

// type UserForUpdate = Partial<User>;

// const updateUser = (user: User, dataForUpdate: UserForUpdate): User => {
//   return {
//     ...user,
//     ...dataForUpdate,
//   };
// };

// console.log(
//   updateUser(
//     {
//       id: 1,
//       firstName: 'Lizzie',
//       email: 'sijev@ve.ro',
//       isAdmin: false,
//     },
//     { email: 'miir@jopum.ht', isAdmin: true}
//   )
// );

// console.log(
//   updateUser(
//     {
//       id: 2,
//       firstName: 'Wayne',
//       email: 'wayne@ve.ro',
//       isAdmin: false,
//     },
//     { firstName: 'Oleksii' }
//   )
// );

/*
TODO: Pick<T, K>, Omit<T, K>
TODO: Є тип Employee, який описує обʼєкт співробітника.
TODO: Створи тип PublicEmployee, який включає лише id, fullName та email.
TODO: Типізуйте функцію getPublicEmployee(employee), яка буде приймати обʼєкт типу Employee,
TODO: а повертати обʼєкт типу PublicEmployee;
*/
// type Employee = {
//   id: number;
//   fullName: string;
//   email: string;
//   salary: number;
// };

// type PublicEmployee = Pick<Employee, 'id' | 'fullName' | 'email'>;

// type PublicEmployee = Omit<Employee, 'salary'>;

// const getPublicEmployee = (employee: Employee): PublicEmployee => {
//   const { salary, ...publicEmployee } = employee;

//   return publicEmployee;
// };

// console.log(
//   getPublicEmployee({
//     id: 1,
//     fullName: 'Kate Green',
//     email: 'kate@mail.com',
//     salary: 100000,
//   })
// );
