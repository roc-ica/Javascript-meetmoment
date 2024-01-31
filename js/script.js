document.addEventListener('DOMContentLoaded', function () {

    
    const formInputs = document.querySelectorAll('#form_contact input[type="text"]');
    const requiredFields = ['firstname', 'lastname', 'email', 'phone'];
    const termsCheckbox = document.getElementById('terms');
    const submitButton = document.getElementById('btnSubmit');
    if (getCookie('formSubmitted')) {
        submitButton.disabled = true;
    }


    formInputs.forEach(function (input) {
        input.addEventListener('focus', function () {
            input.style.backgroundColor = 'yellow';
            const label = document.querySelector(`label[for="${input.id}"]`);
            if (label) {
                label.style.fontWeight = 'bold';
            }
        });


        input.addEventListener('blur', function () {
            input.style.backgroundColor = 'white';
            const label = document.querySelector(`label[for="${input.id}"]`);
            if (label) {
                label.style.fontWeight = 'normal';
            }
            if (requiredFields.includes(input.id) && input.value.trim() === '') {
                input.style.backgroundColor = 'red';
            }
        });
    });
    termsCheckbox.addEventListener('change', function () {
        submitButton.disabled = !this.checked;
    });
    document.getElementById('form_contact').addEventListener('submit', function (event) {
        if (getCookie('formSubmitted')) {
            event.preventDefault();


        } else {
            let isFormValid = true;
            formInputs.forEach(function (input) {
                if (requiredFields.includes(input.id) && input.value.trim() === '') {
                    input.style.backgroundColor = 'red';
                    isFormValid = false;
                }
            });
            if (!termsCheckbox.checked) {
                isFormValid = false;
            }
            if (!isFormValid) {
                event.preventDefault();
            } else {
                setCookie('formSubmitted', 'true', 365);
            }
        }




    });
    function setCookie(name, value, days) {
        const expires = new Date();
        expires.setTime(expires.getTime() + days * 24 * 60 * 60 * 1000);
        document.cookie = `${name}=${value};expires=${expires.toUTCString()};path=/`;
    }
    function getCookie(name) {
        const cookies = document.cookie.split(';');
        for (let i = 0; i < cookies.length; i++) {
            const cookie = cookies[i].trim();
            if (cookie.startsWith(name + '=')) {
                return cookie.substring(name.length + 1);
            }
        }
        return null;
    }
});