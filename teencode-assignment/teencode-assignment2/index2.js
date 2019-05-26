"use strict"
//ASSIGMENT 1


var container = document.querySelectorAll('div p');
container.forEach(item =>
     item.style.color = 'yellow'
);

document.querySelectorAll('div').forEach(item => {
     item.style.backgroundColor = 'blue'
     item.style.width = '50%'
     item.querySelectorAll('p').forEach(x => x.style.padding = "20px")

})