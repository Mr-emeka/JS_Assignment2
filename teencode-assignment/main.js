"use strict"
// username=admin and password= 12345;
// if it is correct display green underneath and display login successful;
// else if it is wrong you display red and then incorrect username or password.

function login(e) {
     e.preventDefault();

     const user = 'admin';
     const pass = 12345;
     let username = document.getElementById('usernamesignup').value;
     let password = document.getElementById('passwordsignup').value;
     if (!username & !password) {
          return alert('enter a password and username')
     }
     if (username.toLowerCase() == user && (password == pass)) {
          const paraElem = document.createElement('p');
          paraElem.textContent = 'Login Sucessful';
          const sign = document.querySelector('.signin')
          paraElem.classList.add('success');
          sign.appendChild(paraElem);

     } else if (username != user || password != pass) {
          const paraElem = document.createElement('p');
          paraElem.textContent = 'Wrong Username or Password';
          const sign = document.querySelector('.signin')
          paraElem.classList.add('wrong');
          sign.appendChild(paraElem);
     }
}

document.querySelector('#login').addEventListener('click', login);