
//event listeners for buttons
document.getElementById("buttonOne").addEventListener("click", Session1); // get the session 1 button and when clicked run the function session 1

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


// code refrenced from https://www.w3schools.com/html/tryit.asp?filename=tryhtml5_webstorage_local_clickcount
