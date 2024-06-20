
const lowercaseAlphabet = "abcdefghijklmnopqrstuvwxyz";
const uppercaseAlphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numbers = "0123456789";
const symbols = "!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";
const allwords = lowercaseAlphabet+uppercaseAlphabet+numbers+symbols;
const generate = document.querySelector('button');
const input = document.querySelector('input');
const icon = document.getElementById('icon');
let mylenght = 12;


generate.addEventListener('click',function(){
    let password = '';
    while(password.length<mylenght){
        password += allwords[Math.floor(Math.random()*allwords.length)];
    }
    icon.setAttribute('name','copy-outline');
    input.value = password;
})

function copypassword(){
    input.select();
    document.execCommand('copy');
    if (document.execCommand('copy')) {
        icon.setAttribute('name',"checkmark-done-outline");
        icon.style.fontSize = '25px';
        icon.style.color = 'green';
    }
    else {
        throw new Error('something wrong !');
    }
}