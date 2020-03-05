// check if stored data from register-form is equal to entered data in the   login-form
function checkin() {

    // stored data from the register-form
    var storedEmailid = localStorage.getItem('emailid');

    var storedPw = localStorage.getItem('pw');

    // entered data from the login-form
    var userName = document.getElementById('InputEmail1');
    var userPw = document.getElementById('InputPassword1');

    // check if stored data from register-form is equal to data from login form
    if(userName.value == storedEmailid || userPw.value == storedPw) {
        alert('You are logged in.');
    }else {
        alert('ERROR');
    }

}