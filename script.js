

const form = document.getElementById('myForm');
form.addEventListener("submit", onSubmit);


function onSubmit(e) {
    console.log('I AM HERE....');
    const data = new FormData(form);
    const password = data.get('password');
    const confirmPassword = data.get('confirm-password');

    if(password !== confirmPassword) {
        console.log('Password not same as confirm password');
        alert('Password not same as confirm password');
        e.preventDefault();
    }

}


