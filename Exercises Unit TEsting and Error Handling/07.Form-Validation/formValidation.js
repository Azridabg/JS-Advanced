function validate() {
    let submitBtn = document.getElementById("submit");

    submitBtn.addEventListener('click', (e) => {
        e.preventDefault();


        let username = document.getElementById("username");
        let password = document.getElementById("password");
        let confirmPassword = document.getElementById("confirm-password");
        let email = document.getElementById("email");

        if (username.value.length < 21 && username.value.length > 2) {
            let usernameRegex = /^([a-zA-Z]+|\d+)+$/;
            if (usernameRegex.test(username.value)) {
                username.style.border = 'none';
            }
            else {
                username.style.borderColor = 'red';
            }
        }

        else {
            username.style.borderColor = 'red';
        }

        if (password.value.length < 16 && password.value.length > 4) {
            let passwordRegex = /^([a-zA-Z]+|\d+|\_+)+$/;
            if (passwordRegex.test(password.value)) {
                password.style.border = 'none';
            }
            else {
                password.style.borderColor = 'red';
            }
        }

        else {
            password.style.borderColor = 'red';
        }

        if (password.value == confirmPassword.value) {
            console.log(password.value, confirmPassword.value);
            confirmPassword.style.border = 'none';
        }
        else {
            confirmPassword.style.borderColor = 'red';
        }

        let emailRegex = /^[a-z]+@[a-z]+\.[a-z]+$/;
        if (emailRegex.test(email.value)) {
            email.style.border = 'none';
        }
        else {
            email.borderColor = 'red';
        }
    })
}
