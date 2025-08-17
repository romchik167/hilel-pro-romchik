const students = [
  { name: "Аня", grades: [5, 4, 4, 5] },
  { name: "Петя", grades: [3, 4, 4, 3] },
  { name: "Ира", grades: [5, 5, 5, 5] },
];
const result = students.map(students => {
    return{
     name: students.name, 
     average: +students.grades.reduce((sum, grade) => sum + grade , 0) / students.grades.length
    }
});
console.log(result)

const goodStudents  = result.filter(result => result.average >= 4,5)
console.log(goodStudents)


// Задание:

// 1. Используя map и стрелочные функции, получить массив объектов с именем и средним баллом студента.
// 2. Отфильтровать тех, у кого средний балл меньше 4.5.