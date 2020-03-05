var fname = document.getElementById('fname');
var lname = document.getElementById('lname');
var emailid= document.getElementById('emailid');
var pw= document.getElementById('pw');
var number= document.getElementById('number');
var age= document.getElementById('age');

// storing input from register-form
function store() {
    localStorage.setItem('fname', fname.value);
    localStorage.setItem('lname', lname.value);
    localStorage.setItem('emailid', emailid.value);
    localStorage.setItem('pw', pw.value);
    localStorage.setItem('number', number.value);
    localStorage.setItem('age', age.value);
}

