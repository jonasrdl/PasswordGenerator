function passwordGenerator(len) {
    const lengthInput = document.getElementById('lengthInput');
    const output = document.getElementById('output');

    let length = lengthInput.value;
    let letters = 'abcdefghijklmnopqrstuvwxyz';
    let numbers = '0123456789';
    let punctuation = '!@#$%^&*()_+~`|}{[]\:;?><,./-=';
    let password = '';
    let character = '';

    let entity1;
    let entity2;
    let entity3;
    let hold;

    if (lengthInput.value === '') {
        output.innerHTML = 'Nice try! Length cannot be nothing.'
        output.style.color = 'red';
        return;
    }

    if (isNaN(length)) {
        output.innerHTML = 'Nice try! Length has to be a number, try again :)';
        output.style.color = 'red';
        lengthInput.value = null;
        return;
    }

    if (length <= 7) {
        output.innerHTML = 'Too short! The minimum is 8.'
        return;
    }

    if (length >= 129) {
        output.innerHTML = 'Too long! The maximum is 128.'
        return;
    }

    while (password.length < length) {
        entity1 = Math.ceil(letters.length * Math.random() * Math.random());
        entity2 = Math.ceil(numbers.length * Math.random() * Math.random());
        entity3 = Math.ceil(punctuation.length * Math.random() * Math.random());

        hold = letters.charAt(entity1);
        hold = (password.length % 2 === 0) ? (hold.toUpperCase()) : (hold);

        character += hold;
        character += numbers.charAt(entity2);
        character += punctuation.charAt(entity3);
        password = character;
    }

    password = password.split('').sort(function () {
        return 0.5 - Math.random();
    }).join('');

    output.style.color = 'black';
    output.innerHTML = 'Your password is: ' + password;

    return password.substr(0, len);
}


