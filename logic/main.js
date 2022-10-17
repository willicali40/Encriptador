const input = document.querySelector('#input');
const encrypt = document.querySelector('#btn-encrypter');
const unEncrypt = document.querySelector('#btn-unencrypt');
const copyButton = document.querySelector('#copy-btn');
const msn = document.querySelector('#msn');
const msg = document.querySelector('#msg');

encrypt.addEventListener('click', textEncrypted);
unEncrypt.addEventListener('click', textUncrypted);
copyButton.addEventListener('click', copy);

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
                msg.innerHTML = '';
            }
        });

    } else {
        console.log('no text');
    }
}



function letterSwapE(data, index, letters) {
    msn.innerHTML = '';
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
    msn.innerHTML = '';
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
    msn.innerHTML = '';
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
    msn.innerHTML = '';
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
    msn.innerHTML = '';
    console.log('letter u');
    console.log(data);
    console.log(index);
    console.log(letters);

    letters = 'ufat';
    data[index] = letters;
    console.log(data);

    msg.innerHTML = data.join('');
}



function textUncrypted() {
    if (!input.value == '') {
        console.log('you typed');
        let text = input.value.split('');
        console.log(text);

        text.forEach((letter, index) => {

            let singleLetter = letter;
            let i = index;
            console.log(i);

            if (letter === letter.toLowerCase()) {
                console.log('MINUSCULA');

                if (letter === 'e') {
                    wordSwapEnter(text,i, singleLetter);
                }

                if (letter === 'i') {
                    wordSwapImes(text,i, singleLetter);
                }

                if (letter === 'a') {
                    wordSwapAi(text,i, singleLetter);
                }

                if (letter === 'o') {
                    wordSwapOber(text,i, singleLetter);
                }

                if (letter === 'u') {
                    wordSwapUfat(text,i, singleLetter);
                }

            } else {
                console.log('UPPERCASE');
                msn.innerHTML = 'Solo letras minusculas';
                msg.innerHTML = '';
            }
        });

    } else {
        console.log('no text');
    }

}

function wordSwapEnter(data, index, letters) {
    console.log('funciona');
    console.log(letters);
    console.log(data);
    console.log(index);

    data.splice(index,5, 'e');
    msn.innerHTML = '';
    msg.innerHTML = data.join('');
    console.log(data);
}

function wordSwapImes(data, index, letters) {
    console.log('funciona');
    console.log(letters);
    console.log(data);
    console.log(index);

    data.splice(index,4, 'i');
    msn.innerHTML = '';
    msg.innerHTML = data.join('');
    console.log(data);
}

function wordSwapAi(data, index, letters) {
    console.log('funciona');
    console.log(letters);
    console.log(data);
    console.log(index);

    data.splice(index, 2, 'a');
    msn.innerHTML = '';
    msg.innerHTML = data.join('');
    console.log(data);
}

function wordSwapOber(data, index, letters) {
    console.log('funciona');
    console.log(letters);
    console.log(data);
    console.log(index);

    data.splice(index, 4, 'o');
    msn.innerHTML = '';
    msg.innerHTML = data.join('');
    console.log(data);
}

function wordSwapUfat(data, index, letters) {
    console.log('funciona');
    console.log(letters);
    console.log(data);
    console.log(index);

    data.splice(index, 4, 'u');

    msn.innerHTML = '';
    msg.innerHTML = data.join('');
    console.log(data);


}



function copy() {
    navigator.clipboard.writeText(msg.innerHTML)
    .then(
        () => {
            console.log('copied');
        },
        () => {
            console.log('not coied');
        }
    );
}
