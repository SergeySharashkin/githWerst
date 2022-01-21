var words1 = document.getElementsByClassName('word1');
var wordArray1 = [];
var currentWord1 = 0;

words1[currentWord1].style.opacity = 1;
for (var i = 0; i < words1.length; i++) {
    splitLetters1(words1[i]);
}

function changeWord1() {
    var cw = wordArray1[currentWord1];
    var nw = currentWord1 == words1.length - 1 ? wordArray1[0] : wordArray1[currentWord1 + 1];
    for (var i = 0; i < cw.length; i++) {
        animateLetterOut1(cw, i);
    }

    for (var i = 0; i < nw.length; i++) {
        nw[i].className = 'letter behind';
        nw[0].parentElement.style.opacity = 1;
        animateLetterIn1(nw, i);
    }

    currentWord1 = (currentWord1 == wordArray1.length - 1) ? 0 : currentWord1 + 1;
}

function animateLetterOut1(cw, i) {
    setTimeout(function () {
        cw[i].className = 'letter out';
    }, i * 50);
}

function animateLetterIn1(nw, i) {
    setTimeout(function () {
        nw[i].className = 'letter in';
    }, 340 + (i * 50));
}

function splitLetters1(word) {
    var content = word.innerHTML;
    word.innerHTML = '';
    var letters = [];
    for (var i = 0; i < content.length; i++) {
        var letter = document.createElement('span');
        letter.className = 'letter';
        letter.innerHTML = content.charAt(i);
        word.appendChild(letter);
        letters.push(letter);
    }

    wordArray1.push(letters);
}

setInterval(changeWord1, 3000);

// ---------------------------

// var words2 = document.getElementsByClassName('word2');
// var wordArray2 = [];
// var currentWord2 = 0;

// words2[currentWord2].style.opacity = 1;
// for (var i = 0; i < words2.length; i++) {
//     splitLetters2(words2[i]);
// }

// function changeWord2() {
//     var cw = wordArray2[currentWord2];
//     var nw = currentWord2 == words2.length - 1 ? wordArray2[0] : wordArray2[currentWord2 + 1];
//     for (var i = 0; i < cw.length; i++) {
//         animateLetterOut2(cw, i);
//     }

//     for (var i = 0; i < nw.length; i++) {
//         nw[i].className = 'letter behind';
//         nw[0].parentElement.style.opacity = 1;
//         animateLetterIn2(nw, i);
//     }

//     currentWord2 = (currentWord2 == wordArray2.length - 1) ? 0 : currentWord2 + 1;
// }

// function animateLetterOut2(cw, i) {
//     setTimeout(function () {
//         cw[i].className = 'letter out';
//     }, i * 80);
// }

// function animateLetterIn2(nw, i) {
//     setTimeout(function () {
//         nw[i].className = 'letter in';
//     }, 340 + (i * 80));
// }

// function splitLetters2(word) {
//     var content = word.innerHTML;
//     word.innerHTML = '';
//     var letters = [];
//     for (var i = 0; i < content.length; i++) {
//         var letter = document.createElement('span');
//         letter.className = 'letter';
//         letter.innerHTML = content.charAt(i);
//         word.appendChild(letter);
//         letters.push(letter);
//     }

//     wordArray2.push(letters);
// }

// setInterval(changeWord2, 5000);

