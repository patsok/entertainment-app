const formController = (() => {
    const form = document.querySelector('form');
    const inputs = form.querySelectorAll('input');
    const errors = document.querySelectorAll('.auth-input__error');

    form.addEventListener('invalid', (function () {
        return function (e) {
            e.preventDefault();
            inputs[0].validity.valid ? errors[0].textContent = '' : errors[0].textContent = `Isn't valid`;
            inputs[1].validity.valid ? errors[1].textContent = '' : errors[1].textContent = `Can't be empty`;
        }
    })(), true);

    form.addEventListener('submit', (e) => checkValidity(e));

    let checkValidity = (e) => {
        e.preventDefault();
        let email = inputs[0].value;
        let password = inputs[1].value;
        let userError = document.querySelector('.auth__header__error');
        inputs[0].validity.valid ? errors[0].textContent = '' : errors[0].textContent = `Isn't valid`;
        inputs[1].validity.valid ? errors[1].textContent = '' : errors[1].textContent = `Can't be empty`;
        if((email == "falco@gmail.com" && password == "niepodam") || (email == "user@ent.com" && password == "user")){
            window.open('./home.html',"_self");
        }
        else{
            let string = "email: user@ent.com </br> password: user"
            userError.innerHTML = string;
        }
    }
})()