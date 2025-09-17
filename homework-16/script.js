function Student(firstName, lastName, birthYear) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.birthYear = birthYear;

    this.getAge = function () {
        return 2025 - this.birthYear
    }
    this.grades = new Array(25);
    this.attendance = new Array(25);

    this.present = function () {
        for (let i = 0; i < this.attendance.length; i++) {
            if (this.attendance.length <= 25) {
                if (!(i in this.attendance)) {
                    this.attendance[i] = true;
                    return
                }
            } else {
                console.log('В масиві може бути не більше 25 записів')
            }
        }
    }
    this.absent = function () {
        for (let i = 0; i < this.attendance.length; i++) {
            if (this.attendance.length <= 25) {
                if (!(i in this.attendance)) {
                    this.attendance[i] = false;
                    return
                }
            } else {
                console.log('В масиві може бути не більше 25 записів')
            }
        }
    };

    this.addGrade = function (num) {
        if (num < 0 || num > 100) {
            console.log('Оцінка має бути від 0 до 100');
            return;
        }
        for (let i = 0; i < this.grades.length; i++) {
            if (!(i in this.grades)) {
                this.grades[i] = num;
                return;
            }
        }
        console.log('Всі комірки для оцінок заповнені');
    };
    let avarageGrade = 0;
    this.getAverageGrade = function () {
        let summ = 0;
        let markedCount = 0;
        for (let i = 0; i < this.grades.length; i++) {
            if (i in this.grades && typeof this.grades[i] === 'number') {
                summ += this.grades[i];
                markedCount++;
            }
        }
        if (markedCount === 0) 
            return 0;
        avarageGrade = (summ / markedCount).toFixed(0);
        return avarageGrade;
    }
    let attendanceStudent = 0;
    this.attendance = function () {
        let presentCount = 0;
        let markedCount = 0;
        for (let i = 0; i < this.attendance.length; i++) {
            if (this.attendance[i] === true) {
                presentCount++;
                markedCount++
            } else if (this.attendance[i] === false) {
                markedCount++;
            }
        }

        if (markedCount === 0) {
            attendanceStudent = 0
        } else {
            attendanceStudent = (presentCount / markedCount).toFixed(2)
        }
        return attendanceStudent;
    }
    this.rankingStudent = function () {
        const avgGrade = this.getAverageGrade();
        const avgAttendance = this.attendance();
        if (avgGrade > 90 && avgAttendance > 0.9) {
            console.log('Молодець');
        } else if (avgGrade > 90 || avgAttendance > 0.9) {
            console.log('Добре');
        } else {
            console.log('Редиска');
        }
    };
}

const student1 = new Student('Roma', 'Lavrenchuk', 2009)
console.log(student1)
console.log(student1.getAge())

student1.absent(); 
student1.absent(); 
student1.absent();
student1.present();
student1.present();
student1.present();
student1.present();

student1.addGrade(90);
student1.addGrade(100);
student1.addGrade(90);

console.log(student1.getAverageGrade())
student1.rankingStudent();

const student2 = new Student('Ivan', 'Kot', 1987)
console.log(student2)
console.log(student2.getAge())

student2.present();
student2.present();
student2.present();
student2.present();

student2.addGrade(50);
student2.addGrade(100);
student2.addGrade(50);

console.log(student2.getAverageGrade())
student2.rankingStudent();

const student3 = new Student('Makar', 'Buhaienko', 2012)
console.log(student3)
console.log(student3.getAge())

student3.absent(); 
student3.absent(); 
student3.absent();

student3.addGrade(80);
student3.addGrade(10);
student3.addGrade(90);

console.log(student3.getAverageGrade())
student3.rankingStudent();
