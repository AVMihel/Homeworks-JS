// Задача 1
class PrintEditionItem {
  constructor(name, releaseDate, pagesCount) {
    this.name = name;
    this.releaseDate = releaseDate;
    this.pagesCount = pagesCount;
    this._state = 100;
    this.type = null;
  }

  fix() {
    this.state = this._state * 1.5;
    return this.state;
  }

  set state(newState) {
    if (newState < 0) {
      this._state = 0;
    } else if (newState > 100) {
      this._state = 100;
    } else {
      this._state = newState;
    }
  }

  get state() {
    return this._state;
  }
}

class Magazine extends PrintEditionItem {
  constructor(name, releaseDate, pagesCount) {
    super(name, releaseDate, pagesCount);
    this.type = "magazine";
  }
}

class Book extends PrintEditionItem {
  constructor(author, name, releaseDate, pagesCount) {
    super(name, releaseDate, pagesCount);
    this.author = author;
    this.type = "book";
  }
}

class NovelBook extends Book {
  constructor(author, name, releaseDate, pagesCount) {
    super(author, name, releaseDate, pagesCount);
    this.type = "novel";
  }
}

class FantasticBook extends Book {
  constructor(author, name, releaseDate, pagesCount) {
    super(author, name, releaseDate, pagesCount);
    this.type = "fantastic";
  }
}

class DetectiveBook extends Book {
  constructor(author, name, releaseDate, pagesCount) {
    super(author, name, releaseDate, pagesCount);
    this.type = "detective";
  }
}

// Примеры
const hyperion = new FantasticBook(
  "Дэн Симмонс",
  "Гиперион",
  1989,
  482
);

const foundation = new FantasticBook(
  "Айзек Азимов",
  "Основание",
  1951,
  255
);

// Задача 2
class Library {
  constructor(name) {
    this.name = name;
    this.books = [];
  }

  addBook(book) {
    if (book.state > 30) {
      this.books.push(book);
    }
  }

  findBookBy(type, value) {
    return this.books.find(book => book[type] === value) || null;
  }

  giveBookByName(bookName) {
    const bookIndex = this.books.findIndex(book => book.name === bookName);
    if (bookIndex === -1) {
      return null;
    }
    const [book] = this.books.splice(bookIndex, 1);
    return book;
  }
}

// Тестовый сценарий

// 1. Создаем библиотеку
const library = new Library('Центральная городская библиотека');

// 2. Создаем и добавляем несколько печатных изданий разных типов
const magazine = new Magazine('National Geographic', 2023, 120);
const book = new Book('Джордж Оруэлл', '1984', 1949, 328);
const novel = new NovelBook('Лев Толстой', 'Анна Каренина', 1877, 864);
const fantastic = new FantasticBook('Джон Толкин', 'Властелин колец', 1954, 1178);
const detective = new DetectiveBook('Агата Кристи', 'Убийство в Восточном экспрессе', 1934, 256);
const oldBook = new Book('Максим Горький', 'Мать', 1906, 416);

library.addBook(magazine);
library.addBook(book);
library.addBook(novel);
library.addBook(fantastic);
library.addBook(detective);
library.addBook(oldBook);

console.log('Книги в библиотеке после добавления:');
library.books.forEach(book => console.log(`- ${book.name} (${book.releaseDate})`));

// 3. Ищем книгу 1919 года или создаем новую
let foundBook = library.findBookBy('releaseDate', 1919);
if (!foundBook) {
    console.log('\nКнига 1919 года не найдена, создаем новую...');
    const newBook = new Book('Александр Блок', 'Двенадцать', 1919, 50);
    library.addBook(newBook);
    foundBook = newBook;
    console.log(`Добавлена новая книга: ${foundBook.name} (${foundBook.releaseDate})`);
} else {
    console.log(`\nНайдена книга: ${foundBook.name} (${foundBook.releaseDate})`);
}

// 4. Выдаем любую книгу
const bookToGive = library.giveBookByName('1984');
console.log(`\nВыдана книга: ${bookToGive.name}`);

// 5. Повреждаем выданную книгу
console.log(`\nСостояние книги до повреждения: ${bookToGive.state}`);
bookToGive.state = 20;
console.log(`Состояние книги после повреждения: ${bookToGive.state}`);

// 6. Восстанавливаем книгу
console.log('\nВосстанавливаем книгу...');
bookToGive.fix();
console.log(`Состояние книги после восстановления: ${bookToGive.state}`);

// 7. Пытаемся добавить восстановленную книгу обратно в библиотеку
console.log('\nПытаемся вернуть книгу в библиотеку...');
library.addBook(bookToGive);
if (library.findBookBy('name', '1984')) {
    console.log('Книга успешно возвращена в библиотеку!');
} else {
    console.log('Не удалось вернуть книгу в библиотеку (состояние слишком низкое)');
}

// 8. Выводим текущий список книг в библиотеке
console.log('\nТекущий список книг в библиотеке:');
library.books.forEach(function(book) {
    console.log("- " + book.name + " (" + book.state + "%)");
});