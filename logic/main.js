const input = document.querySelector('#input');
const encrypt = document.querySelector('#btn-encrypter');
const msn = document.querySelector('#msn');
const msg = document.querySelector('#msg');

encrypt.addEventListener('click', textEncrypted);

function textEncrypted (){
    if (!input.value == '') {
        console.log('you typed');
        let text = input.value.split('');
        console.log(text);

        text.forEach((letter, index) => {

            let singleLetter = letter;
            let i = index;

            if (letter === letter.toLowerCase()) {
                console.log('MINUSCULA');

                if (letter === 'e') {
                    letterSwapE(text,i, singleLetter);
                }

                if (letter === 'i') {
                    letterSwapI(text,i, singleLetter);
                }

                if (letter === 'a') {
                    letterSwapA(text,i, singleLetter);
                }

                if (letter === 'o') {
                    letterSwapO(text,i, singleLetter);
                }

                if (letter === 'u') {
                    letterSwapU(text,i, singleLetter);
                }

            } else {
                console.log('UPPERCASE');
                msn.innerHTML = 'Solo letras minusculas';
            }
        });

    } else {
        console.log('no text');
    }
}



function letterSwapE(data, index, letters) {
    console.log('letter e');
    console.log(data);
    console.log(index);
    console.log(letters);

    letters = 'enter';
    data[index] = letters;
    console.log(data);

    msg.innerHTML = data.join('');
}

function letterSwapI(data, index, letters) {
    console.log('letter i');
    console.log(data);
    console.log(index);
    console.log(letters);

    letters = 'imes';
    data[index] = letters;
    console.log(data);

    msg.innerHTML = data.join('');
}

function letterSwapA(data, index, letters) {
    console.log('letter a');
    console.log(data);
    console.log(index);
    console.log(letters);

    letters = 'ai';
    data[index] = letters;
    console.log(data);

    msg.innerHTML = data.join('');
}

function letterSwapO(data, index, letters) {
    console.log('letter o');
    console.log(data);
    console.log(index);
    console.log(letters);

    letters = 'ober';
    data[index] = letters;
    console.log(data);

    msg.innerHTML = data.join('');
}

function letterSwapU(data, index, letters) {
    console.log('letter u');
    console.log(data);
    console.log(index);
    console.log(letters);

    letters = 'ufat';
    data[index] = letters;
    console.log(data);

    msg.innerHTML = data.join('');
}