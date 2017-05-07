
//event listners for buttons
document.getElementById("buttonOne").addEventListener("click", Session1); // get the session 1 button and when clicked run the function session 1
document.getElementById("buttonTwo").addEventListener("click", Session2);// get the session 2 button and when clicked run the function session 2
document.getElementById("buttonThree").addEventListener("click", Session3);// get the session 3 button and when clicked run the function session 3
document.getElementById("buttonFour").addEventListener("click", Session4);// get the session 4 button and when clicked run the function session 4
document.getElementById("buttonFive").addEventListener("click", Session5);// get the session 5 button and when clicked run the function session 5
document.getElementById("buttonReset").addEventListener("click", reset);// get the reset button and when clicked run the function reset


function Session1() { // create function session 1
    if(typeof(Storage) !== "undefined") { // if local storage is supported in the browser.
        if (localStorage.clickcount1) { // if the session one button is clicked
            localStorage.clickcount1 = Number(localStorage.clickcount1)+1; // store the button click (clickcount1) in the local storage and add one to the current value
        } else { // if button isint pressed
            localStorage.clickcount1 = 1; // show the current value that is stored inside the local storage
        }
        document.getElementById("result1").innerHTML = + localStorage.clickcount1 // get the id result1 and display the current value of the session one button press (clickcount1) on the html page.
    }
}


function Session2() { // create function session 2
    if(typeof(Storage) !== "undefined") {  // if local storage is supported in the browser.
        if (localStorage.clickcount2) { // if the session two button is clicked
            localStorage.clickcount2 = Number(localStorage.clickcount2)+1; // store the button click (clickcount2) in the local storage and add one to the current value
        } else { // if button isint pressed
            localStorage.clickcount2 = 1; // show the current value that is stored inside the local storage
        }
        document.getElementById("result2").innerHTML = + localStorage.clickcount2 // get the id result2 and display the current value of the session two button press (clickcount2) on the html page.
    }
    }



function Session3() { // create function session 3
    if(typeof(Storage) !== "undefined") { // if local storage is supported in the browser.
        if (localStorage.clickcount3) { // if the session three button is clicked
            localStorage.clickcount3 = Number(localStorage.clickcount3)+1; // store the button click (clickcount3) in the local storage and add one to the current value
        } else { // if button isint pressed
            localStorage.clickcount3 = 1; // show the current value that is stored inside the local storage
        }
        document.getElementById("result3").innerHTML = + localStorage.clickcount3 // get the id result3 and display the current value of the session three button press (clickcount3) on the html page.
    }
    }



function Session4() { // create function session 4
    if(typeof(Storage) !== "undefined") { // if local storage is supported in the browser.
        if (localStorage.clickcount4) { //  if the session four button is clicked
            localStorage.clickcount4 = Number(localStorage.clickcount4)+1; // store the button click (clickcount4) in the local storage and add one to the current value
        } else { // if button isint pressed
            localStorage.clickcount4 = 1; // show the current value that is stored inside the local storage
        }
        document.getElementById("result4").innerHTML = + localStorage.clickcount4 // get the id result4 and display the current value of the session four button press (clickcount4) on the html page.
    }
    }



function Session5() { // create function session 5
    if(typeof(Storage) !== "undefined") {  // if local storage is supported in the browser.
        if (localStorage.clickcount5) { //  if the session five button is clicked
            localStorage.clickcount5 = Number(localStorage.clickcount5)+1;  // store the button click (clickcount5) in the local storage and add one to the current value
        } else { // if button isint pressed
            localStorage.clickcount5 = 1; // show the current value that is stored inside the local storage
        }
        document.getElementById("result5").innerHTML = + localStorage.clickcount5 // get the id result5 and display the current value of the session five button press (clickcount5) on the html page.
    }
    }


function reset() { // create a function called reset
  localStorage.clear(); // if the reset button is pressed then clear any of the values inside of the local storage
}
