
//event listners for buttons
document.getElementById("buttonOne").addEventListener("click", Session1); // get the session 1 button and when clicked run the function session 1
document.getElementById("buttonTwo").addEventListener("click", Session2);// get the session 2 button and when clicked run the function session 2
document.getElementById("buttonThree").addEventListener("click", Session3);// get the session 3 button and when clicked run the function session 3
document.getElementById("buttonFour").addEventListener("click", Session4);// get the session 4 button and when clicked run the function session 4
document.getElementById("buttonFive").addEventListener("click", Session5);// get the session 5 button and when clicked run the function session 5
document.getElementById("buttonReset").addEventListener("click", reset);// get the reset button and when clicked run the function reset


function Session1() { // create function session 1
    if(typeof(Storage) !== "undefined") { // if local storage is supported in the browser.
        if (localStorage.session1ButtonClicked) { // if the session one button is clicked
            localStorage.session1ButtonClicked = Number(localStorage.session1ButtonClicked)+1; // store the button click  in the local storage and add one to the current value
        } else { // if button isint pressed
            localStorage.session1ButtonClicked = 1; // show the current value that is stored inside the local storage
        }
        document.getElementById("session1CurrentValue").innerHTML = + localStorage.session1ButtonClicked // get the id session1CurrentValue and display the current value of the session one button press  on the html page.
    }
}


function Session2() { // create function session 2
    if(typeof(Storage) !== "undefined") {  // if local storage is supported in the browser.
        if (localStorage.session2ButtonClicked) { // if the session two button is clicked
            localStorage.session2ButtonClicked = Number(localStorage.session2ButtonClicked)+1; // store the button click  in the local storage and add one to the current value
        } else { // if button isint pressed
            localStorage.session2ButtonClicked = 1; // show the current value that is stored inside the local storage
        }
        document.getElementById("session2CurrentValue").innerHTML = + localStorage.session2ButtonClicked // get the id session2CurrentValue and display the current value of the session two button press on the html page.
    }
    }



function Session3() { // create function session 3
    if(typeof(Storage) !== "undefined") { // if local storage is supported in the browser.
        if (localStorage.session3ButtonClicked) { // if the session three button is clicked
            localStorage.session3ButtonClicked = Number(localStorage.session3ButtonClicked)+1; // store the button click  in the local storage and add one to the current value
        } else { // if button isint pressed
            localStorage.session3ButtonClicked = 1; // show the current value that is stored inside the local storage
        }
        document.getElementById("session3CurrentValue").innerHTML = + localStorage.session3ButtonClicked // get the id session3CurrentValue and display the current value of the session three button press  on the html page.
    }
    }



function Session4() { // create function session 4
    if(typeof(Storage) !== "undefined") { // if local storage is supported in the browser.
        if (localStorage.session4ButtonClicked) { //  if the session four button is clicked
            localStorage.session4ButtonClicked = Number(localStorage.session4ButtonClicked)+1; // store the button click  in the local storage and add one to the current value
        } else { // if button isint pressed
            localStorage.session4ButtonClicked = 1; // show the current value that is stored inside the local storage
        }
        document.getElementById("session4CurrentValue").innerHTML = + localStorage.session4ButtonClicked // get the id session4CurrentValue and display the current value of the session four button press  on the html page.
    }
    }



function Session5() { // create function session 5
    if(typeof(Storage) !== "undefined") {  // if local storage is supported in the browser.
        if (localStorage.session5ButtonClicked) { //  if the session five button is clicked
            localStorage.session5ButtonClicked = Number(localStorage.session5ButtonClicked)+1;  // store the button click in the local storage and add one to the current value
        } else { // if button isint pressed
            localStorage.session5ButtonClicked = 1; // show the current value that is stored inside the local storage
        }
        document.getElementById("session5CurrentValue").innerHTML = + localStorage.session5ButtonClicked // get the id session5CurrentValue and display the current value of the session five button press on the html page.
    }
    }


function reset() { // create a function called reset
  localStorage.clear(); // if the reset button is pressed then clear any of the values inside of the local storage.
}

// code refrenced from https://www.w3schools.com/html/tryit.asp?filename=tryhtml5_webstorage_local_clickcount
