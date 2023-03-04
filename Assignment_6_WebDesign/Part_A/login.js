var validPwdDetail=false;
var validUserNameDetail=false;
var validEmailDetail=false;

$(document).ready(function () {
    $("#error").hide()
    $("#errorUserName").hide();
    $("#errorPassword").hide();
    
    $("#user_name").change(function () {
        var validUserName = /(?=^.{4,15}$)[a-zA-Z0-9._].*$/;
        var userName = $('#user_name').val();
        if ((userName.match(validUserName))) {
            if (password.length > 3 && password.length <= 15) {
                console.log("length checked");
                $("#errorUserName").hide();
                validUserNameDetail = true;
                return true;
            }
        }
        
        else {
            errorUserName.textContent = "4 to 15 character username. User Name must contain letters, Numbers and/or underscore(_)"
            errorUserName.style.color = "red"
            $("#errorUserName").show();
            validUserNameDetail = false;
            return false;
        }
    });

    $("#password").change(function () {
        var validPassword = /(?=^.{4,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/;
        var password = $('#password').val();
        if ((password.match(validPassword))) {
            if (password.length > 5 && password.length<= 11) {
                console.log("length checked");
                $("#errorPassword").hide();
                validPwdDetail = true;
                return true;
            }
        }

        else {
            errorPassword.textContent = "at least 6 character passwords with at least one number, uppercase letter, and both lowercase and capital letter are required."
            errorPassword.style.color = "red"
            $("#errorPassword").show();
            validPwdDetail = false;
            return false;
        }
    });

    $("#email").change(function () {
        var validEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@(northeastern.edu)$/;
        var email = $('#email').val();
        if ((email.toLowerCase().match(validEmail))) {
            $("#error").hide();
            validEmailDetail=true;
            return true;
        }

        else {
            error.textContent = "Please enter valid email address. Domain should be northeastern.edu"
            error.style.color = "red"
            validEmailDetail=false;
            $("#error").show();
            return false;

        }
    });

    $("#submit").click(function () {
        var onSubmitEmail = $('#email').val();
        var onSubmituserName = $('#user_name').val();
        var onSubmitPassword = $('#password').val();
        if (onSubmitEmail == '' || onSubmitEmail == null) {
            alert('Please enter Email');
            return false;
        }
        else if (onSubmituserName == '' || onSubmituserName == null) {
            alert('Please enter User Name');
            return false;
        }
        else if (onSubmitPassword == '' || onSubmitPassword == null) {
            alert('Please enter Password');
            return false;
        }

        console.log(validEmailDetail);
        console.log(validUserNameDetail);
        console.log(validPwdDetail);
        if ( validEmailDetail  && validPwdDetail){
        localStorage.setItem("user_name", onSubmituserName);
        window.location.href = 'calculator.html';
        }
    })



});
