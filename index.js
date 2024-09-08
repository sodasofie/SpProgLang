class Person {
    constructor(firstName, lastName, age, isEmployed) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.isEmployed = isEmployed;
    }

    greet() {
        return `Hello, my name is ${this.firstName} ${this.lastName}.`;
    }

    getAge() {
        return `I am ${this.age} years old.`;
    }

    getEmploymentStatus() {
        return this.isEmployed ? `${this.firstName} is employed.` : `${this.firstName} is not employed.`;
    }

    haveBirthday() {
        this.age++;
        return `Happy Birthday, ${this.firstName}! You are now ${this.age}.`;
    }
}

const people = [
    new Person('John', 'Doe', 25, true),
    new Person('Jane', 'Smith', 30, false),
    new Person('Bill', 'Gates', 65, true),
    new Person('Elon', 'Musk', 49, true),
    new Person('Ada', 'Lovelace', 28, false),
];

function displayPeople(people) {
    for (let person of people) {
        console.log(person.greet());
        console.log(person.getAge());
        console.log(person.getEmploymentStatus());
        console.log('---');
    }
}

displayPeople(people);

console.log('--- Giving John a birthday ---');
console.log(people[0].haveBirthday());

class Vehicle {
    constructor(brand, model, year, color) {
        this.brand = brand;
        this.model = model;
        this.year = year;
        this.color = color;
    }

    startEngine() {
        return `The ${this.color} ${this.brand} ${this.model} (${this.year})'s engine started!`;
    }

    drive() {
        return `The ${this.color} ${this.brand} ${this.model} is driving.`;
    }

    paint(newColor) {
        this.color = newColor;
        return `The car has been painted ${newColor}.`;
    }
}

const car = new Vehicle('Tesla', 'Model S', 2022, 'red');

console.log(car.startEngine());
console.log(car.drive());
console.log(car.paint('blue'));

class BankAccount {
    constructor(owner, balance) {
        this.owner = owner;
        this.balance = balance;
    }

    deposit(amount) {
        this.balance += amount;
        return `Deposited $${amount}. New balance: $${this.balance}.`;
    }

    withdraw(amount) {
        if (amount > this.balance) {
            return `Insufficient funds. Current balance: $${this.balance}.`;
        } else {
            this.balance -= amount;
            return `Withdrew $${amount}. New balance: $${this.balance}.`;
        }
    }

    checkBalance() {
        return `${this.owner}, your balance is $${this.balance}.`;
    }
}

const account = new BankAccount('Alice', 1000);

console.log(account.checkBalance());
console.log(account.deposit(500));
console.log(account.withdraw(200));
console.log(account.withdraw(1500));

function fibonacci(n) {
    if (n <= 1) return n;
    return fibonacci(n - 1) + fibonacci(n - 2);
}

for (let i = 0; i < 10; i++) {
    console.log(`Fibonacci(${i}):`, fibonacci(i));
}

function generateRandomNumbers(count) {
    let numbers = [];
    for (let i = 0; i < count; i++) {
        let num = Math.floor(Math.random() * 100);
        numbers.push(num);
    }
    return numbers;
}

let randomNumbers = generateRandomNumbers(10);
console.log('Random numbers:', randomNumbers);

randomNumbers.sort((a, b) => a - b);
console.log('Sorted numbers:', randomNumbers);

function reverseString(str) {
    return str.split('').reverse().join('');
}

console.log(reverseString('Hello World'));

function isPrime(num) {
    if (num <= 1) return false;
    for (let i = 2; i < num; i++) {
        if (num % i === 0) return false;
    }
    return true;
}

console.log('Prime numbers from 1 to 20:');
for (let i = 1; i <= 20; i++) {
    if (isPrime(i)) {
        console.log(i);
    }
}

function capitalizeWords(sentence) {
    return sentence.split(' ').map(word => word[0].toUpperCase() + word.slice(1)).join(' ');
}

console.log(capitalizeWords('this is a random sentence'));

class Animal {
    constructor(name, species) {
        this.name = name;
        this.species = species;
    }

    makeSound() {
        return `${this.name} the ${this.species} makes a sound!`;
    }

    sleep(hours) {
        return `${this.name} sleeps for ${hours} hours.`;
    }
}

const animals = [
    new Animal('Max', 'dog'),
    new Animal('Whiskers', 'cat'),
    new Animal('Nemo', 'fish'),
];

for (let animal of animals) {
    console.log(animal.makeSound());
    console.log(animal.sleep(8));
}

function findLongestWord(sentence) {
    let words = sentence.split(' ');
    let longestWord = words[0];

    for (let word of words) {
        if (word.length > longestWord.length) {
            longestWord = word;
        }
    }

    return longestWord;
}

console.log(findLongestWord('The quick brown fox jumps over the lazy dog'));

function calculateFactorial(num) {
    if (num === 0 || num === 1) return 1;
    return num * calculateFactorial(num - 1);
}

console.log('Factorials:');
for (let i = 0; i <= 5; i++) {
    console.log(`${i}! =`, calculateFactorial(i));
}

function average(arr) {
    let sum = arr.reduce((acc, cur) => acc + cur, 0);
    return sum / arr.length;
}

console.log('Average of [1, 2, 3, 4, 5]:', average([1, 2, 3, 4, 5]));

class Book {
    constructor(title, author, pages, genre) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.genre = genre;
    }

    read() {
        return `You are reading "${this.title}" by ${this.author}.`;
    }

    getGenre() {
        return `${this.title} is a ${this.genre} book.`;
    }
}

const book = new Book('1984', 'George Orwell', 328, 'dystopian');
console.log(book.read());
console.log(book.getGenre());

function countVowels(str) {
    let count = 0;
    const vowels = 'aeiouAEIOU';

    for (let char of str) {
        if (vowels.includes(char)) {
            count++;
        }
    }

    return count;
}

console.log('Number of vowels in "Hello World":', countVowels('Hello World'));

function isPalindrome(str) {
    const cleanedStr = str.replace(/[^a-zA-Z]/g, '').toLowerCase();
    return cleanedStr === cleanedStr.split('').reverse().join('');
}

console.log('Is "A man a plan a canal Panama" a palindrome?', isPalindrome('A man a plan a canal Panama'));
