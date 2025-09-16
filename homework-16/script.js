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
        const index = this
            .attendance
            .indexOf(undefined);
        if (index !== -1) {
            this.attendance[index] = true;
        }
    }
    this.absent = function () {
        const index = this
            .attendance
            .indexOf(undefined);
        if (index !== -1) {
            this.attendance[index] = false;
        }
    }
    this.getAvarageAttendence = function () {
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
            return 0
        }
        return presentCount / markedCount

    }

}

const student1 = new Student('Roma', 'Lavrenchuk', 2009)
console.log(student1)
console.log(student1.getAge())
student1.absent();
student1.absent();
student1.absent();
student1.absent();
student1.present();
student1.present();
student1.present();
student1.present();
console.log(student1.getAvarageAttendence())
