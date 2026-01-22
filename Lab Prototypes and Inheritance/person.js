function createPerson(fname, lname) {

    const result = {
        firstName: fname,
        lastName: lname,
        get fullName() {
            return `${this.firstName} ${this.lastName}`;
        },
        set fullName(value) {
            let [_fname, _lname] = value.split(' ');
            this.firstName = _fname;
            this.lastName = lname;
        },
        

    }
    return result;
}




let person = createPerson("Peter", "Ivanov");
console.log(person.fullName); //Peter Ivanov
person.firstName = "George";
console.log(person.fullName); //George Ivanov
person.lastName = "Peterson";
console.log(person.fullName); //George Peterson
person.fullName = "Nikola Tesla";
console.log(person.firstName); //Nikola
console.log(person.lastName); //Tesla