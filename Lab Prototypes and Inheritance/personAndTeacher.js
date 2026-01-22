function personAndTeacher() {

    class Person {
        constructor(email, name) {
            this.email = email;
            this.name = name;
        }
    }

    class Teacher extends Person {
        constructor(email, name, subject) {
            super(email, name)
            this.subject = subject;
        }
    }
    return {
        Person, Teacher
    }
}
let p = new Person("dari_savov@abv.bg", 'Daro');
let t = new Teacher("dari_savov@abv.bg", 'Daro', "Math");
console.log(p);
console.log(t);