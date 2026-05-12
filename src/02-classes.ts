/*
TODO: Виконуй завдання в декілька етапів.
TODO:
TODO: 1 Завдання.
TODO: Створи клас User, який має:
TODO:   - поля: firstName: string, email: string
TODO:   - метод: getInfo(): string, який повертає рядок "Name: {firstName}, Email: {email}"
TODO:
TODO: 2 Завдання.
TODO: Зроби поле email приватним. Додай:
TODO:   - гетер email();
TODO:   - сетер email(newEmail: string);
TODO:
TODO: 3 Завдання.
TODO: Створи клас Admin, що наслідує User, і додає:
TODO:   - поле role: string;
TODO:   - перевизначений метод getInfo(), який додає "Role: {role}".
*/
class User {
  public firstName: string;
  private _email: string;

  constructor(firstName: string, email: string) {
    // let this = {};
    this.firstName = firstName;
    this._email = email;
    // return this;
  }

  public getInfo(): string {
    return `Name: ${this.firstName}, Email: ${this._email}`;
  }

  get email() {
    return this._email;
  }

  set email(newEmail: string) {
    this._email = newEmail;
  }
}

class Admin extends User {
  private _role: string = 'admin';

  public getInfo(): string {
    return `${super.getInfo()}, Role: ${this._role}`;
  }
}

const admin = new Admin('Nell', 'nell@gmail.com');

console.log(admin);

console.log(admin.getInfo());

// const user = new User('Emma', 'emma@gmail.com');

// console.log(user);

// console.log(user.getInfo());

// console.log(user.email);
// user.email = 'emma2@gmail.com';
// console.log(user.email);
