//Sign in form validation
var attempt = 5;
/*variable to count number of attempts
below function executes on click of login button*/
function signin_validate() {
    var username = document.getElementById("username-signin").value;
    var password = document.getElementById("password-signin").value;

    if (username == "") {
        alert("Input username")
        return false;
    }

    if (password == "") {
        alert("Input password");
        return false;

    }
    if (username == "user" && password == "user") {
        alert("Login successful")
        window.location = "index.html";
        // Redirecting back to page.
        return false;
    }
    else if (username != "user") {
        attempt--; //Decremating by one
        alert("Incorrect username!!!, you have " + attempt + " attempts left.");
        //disabling fields after 5 attempts
    }

    else if (password != "user") {
        attempt--; //Decremating by one
        alert("Incorrect password!!!, you have " + attempt + " attempts left.");
        //disabling fields after 5 attempts
    }

    if (attempt == 0) {
        document.getElementById("username-signin").disabled = true;
        document.getElementById("password-signin").disabled = true;
        document.getElementById("submit").disabled = true;
        return false;
    }

}

    //Sign up form validation
    function signup_validate() {
        var firstname = document.getElementById("firstname-signup").value;
        var lastname = document.getElementById("lastname-signup").value;
        var email = document.getElementById("email-signup").value;
        var username = document.getElementById("username-signup").value;
        var password = document.getElementById("password-signup").value;
        var passwordconfirm = document.getElementById("passwordconfirm-signup").value;
        const handleClose = () => setShow(false);

        if (firstname == "") {
            alert("Input firstname")
            return false;
        }
        
        if (lastname == "") {
            alert("Input lastname");
            return false;
    
        }
        if (username == "") {
            alert("Input username")
            return false;
        }
    
        if (password == "") {
            alert("Input password");
            return false;
    
        }
        if (password.length <= 7) {
            alert("Password must be greater than 7 characters");
            return false;
        }

        if (passwordconfirm == "") {
            alert("Confirm password")
            return false;
        }
    
        if (password != passwordconfirm) {
            alert("Input correct password");
            return false;
        }

        else {
            alert("Your account has been created");
        }
    }

    //Incorrect signin / signup input color change
    function changeColor(red) {
        const elem = document.getElementById('username-signin');
        elem.style.bordercolor = red;
    }
        //Reservation Checkbox

        function selectReservee(id) {
            for (var i = 1; i <= 2; i++) {
                document.getElementById(i).checked = false;
            }
            document.getElementById(id).checked = true;
        }



        //Make Reservation Validation
            function makeReservation() {
                var firstname = document.getElementById("firstname").value;
                var lastname = document.getElementById("lastname").value;
                var reservee = document.getElementById("1").nodeValue;
                var arrivedate = document.getElementById("arrive").value;
                var departdate = document.getElementById("depart").value;
                var yespickup = document.getElementById("1").value;
                var nopickup = document.getElementById("2").value;
                var guestno = document.getElementById("guestno").value;
                var select_room = document.getElementById("select-room").value;
                
                if (firstname == "") {
                    alert("Input firstname")
                    return false;
                }
                
                if (lastname == "") {
                    alert("Input lastname")
                    return false;
                }

                if (firstname == isNaN) {
                    alert("Incorrect characters inputted for firstname")
                    return false;
                }

                if (lastname == isNaN) {
                    alert("Incorrect characters inputted for lastname")
                    return false;
                }

                if (arrivedate == "") {
                    alert("Input your arrival date")
                    return false;
                }

                if (departdate == "") {
                    alert("Input your departure date")
                    return false;
                }
                if (yespickup == "" || nopickup == "")
                    {
                        alert("Choose pickup preference")
                        return false;
                    }
                 

                if (guestno == "") 
                {
                    alert("Input the no of guests")
                    return false;
                }

                if ( select_room == document.getElementById("default-room"))
                {
                    alert("Select the type of room you want")
                    return false;
                }
                
                else {
                    alert("Your reservation has been made." + "\n" + "Contact customer care for enquires or complaints");
                    alert("Redirecting you to payment site");
                    window.location.href = "https://quickteller.com/transfer-money/account";
                }
            }

