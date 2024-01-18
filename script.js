'use strict';

let nestedObject = {
    firstArray : ['know', 'understand', 'realize', 'recognize'],
    secondArray : ['greater', 'significant','stronger', 'powerful']
 }

const message = document.querySelector('.message');

function randomGenerator() {
    const arrayIndex1 = Math.floor(Math.random() * nestedObject.firstArray.length)
    const arrayIndex2 = Math.floor(Math.random() * nestedObject.secondArray.length)
    const arrayVal1 = nestedObject.firstArray[arrayIndex1]
    const arrayVal2 = nestedObject.secondArray[arrayIndex2]
    return alert(`Believe in yourself and all that you are ${arrayVal1} that there is something inside you that is ${arrayVal2} than any obstacle'
    `)
}

message.addEventListener('click', function() {
    randomGenerator()
})





