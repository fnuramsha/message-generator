'use strict';

const message = document.querySelector('.message');

message.addEventListener('click', function() {
    const array = ['Believe you can, and you are halfway there', 
    'You are stronger than you think', 
    'Stay positive, work hard, make it happen',
    'Embrace the journey, not just the destination', 
    'Dream big, work hard', 'Make today amazing'
]

    const arrayIndex = Math.floor(Math.random() * array.length)
    const arrayVal = array[arrayIndex]
    alert(arrayVal)

})

