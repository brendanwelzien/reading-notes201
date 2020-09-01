'use strict';
 var ready = confirm('Ready up?');
console.log(ready);

if(ready === true) {
    alert('Let us begin');
} else {
    alert('See ya');
}

switch (ready) {
    case 'red':
        alert(ready + '');
        break;

        case 'purple':
            alert('');
            break;
}


console.log(answer1, answer1.toLowerCase())

var question1 = prompt('Hello stranger, please tell me your name!');
            console.log(question1);
            alert('What a beautiful name!');