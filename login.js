var fname = document.getElementById('fname');
var lname = document.getElementById('lname');
var email= document.getElementById('email');
var pw= document.getElementById('pw');
var number= document.getElementById('number');
var age= document.getElementById('age');

// storing input from register-form
function store() {
    localStorage.setItem('fname', fname.value);
    localStorage.setItem('lname', lname.value);
    localStorage.setItem('email', email.value);
    localStorage.setItem('pw', pw.value);
    localStorage.setItem('number', number.value);
    localStorage.setItem('age', age.value);
}

// check if stored data from register-form is equal to entered data in the   login-form
function checkin() {

    // stored data from the register-form
    var storedEmail = localStorage.getItem('email');

    var storedPw = localStorage.getItem('pw');

    // entered data from the login-form
    var userName = document.getElementById('InputEmail1');
    var userPw = document.getElementById('InputPassword1');

    // check if stored data from register-form is equal to data from login form
    if(userName.value == storedEmail || userPw.value == storedPw) {
        alert('You are logged in.');
    }else {
        alert('ERROR');
    }

}