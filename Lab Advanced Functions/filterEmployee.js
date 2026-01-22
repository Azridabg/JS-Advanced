function filterEmployee(employees, filter) {

    function outputText() {
        return `${this['first_name']} ${this['last_name']} - ${this.email}`;
    }




    let result = [];

    if (filter == 'all') {
        Array.from(JSON.parse(employees.split(', '))).forEach(e => {
            result.push(e);
        });
    }
    else {
        let [key, value] = filter.split('-');
        Array.from(JSON.parse(employees.split(', '))).forEach(e => {
            if (e[key] == value) {
                result.push(e);
            }
        });
    }

    for (let i = 0; i < result.length; i++) {
        console.log(`${i}. ${outputText.call(result[i])}`);
    }
}

/* Fancy method
function solve(input, criteria) {
    let employees = JSON.parse(input);
    let [prop, value] = criteria.split('-');

    employees
        .filter(x => x[prop] == value)
        .map((x, i) => `${i}. ${x.first_name} ${x.last_name} - ${x.email}`)
        .forEach(x => console.log(x));
}




*/
filterEmployee('[{ "id": "1", "first_name": "Ardine", "last_name": "Bassam", "email": "abassam0@cnn.com", "gender": "Female" }, { "id": "2", "first_name": "Kizzee", "last_name": "Jost", "email": "kjost1@forbes.com", "gender": "Female"}, { "id": "3", "first_name": "Evanne", "last_name": "Maldin", "email": "emaldin2@hostgator.com", "gender": "Male" }]', 'gender-Female');