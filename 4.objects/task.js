// Функция-конструктор Student
function Student(name, gender, age) {
  this.name = name;
  this.gender = gender;
  this.age = age;
  this.marks = [];
}

// Метод setSubject (предмет)
Student.prototype.setSubject = function(subjectName) {
  this.subject = subjectName;
};

// Метод addMarks (оценки)
Student.prototype.addMarks = function(...marksToAdd) {
  if (!this.marks) {
    console.log("Студент отчислен, добавление оценок невозможно");
    return;
  }
  this.marks.push(...marksToAdd);
};

// Метод getAverage (средняя оценка)
Student.prototype.getAverage = function() {
  if (!this.marks || !this.marks.length) return 0;
  return this.marks.reduce((acc, mark, index, arr) => acc + mark / arr.length, 0);
};

// Метод exclude (исключение)
Student.prototype.exclude = function(reason) {
  delete this.subject;
  delete this.marks;
  this.excluded = reason;
};

// Проверка
let student1 = new Student("Василий", "мужской", 38);
student1.setSubject("Algebra");
console.log(student1.getAverage());
student1.addMarks(4, 3, 4, 4);
console.log(student1.getAverage());
console.log(student1);

let student2 = new Student("Ксения", "женский", 25);
student2.setSubject("Geometry");
student2.exclude('плохая учёба');
console.log(student2);
