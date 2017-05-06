function Session1() {
    if(typeof(Storage) !== "undefined") {
        if (localStorage.clickcount1) {
            localStorage.clickcount1 = Number(localStorage.clickcount1)+1;
        } else {
            localStorage.clickcount1 = 1;
        }
        document.getElementById("result1").innerHTML = + localStorage.clickcount1
    } else {
        document.getElementById("result1").innerHTML = "Sorry, your browser does not support web storage...";
    }
}


function Session2() {
    if(typeof(Storage) !== "undefined") {
        if (localStorage.clickcount2) {
            localStorage.clickcount2 = Number(localStorage.clickcount2)+1;
        } else {
            localStorage.clickcount2 = 1;
        }
        document.getElementById("result2").innerHTML = + localStorage.clickcount2
    } else {
        document.getElementById("result2").innerHTML = "Sorry, your browser does not support web storage...";
    }
}


function Session3() {
    if(typeof(Storage) !== "undefined") {
        if (localStorage.clickcount3) {
            localStorage.clickcount3 = Number(localStorage.clickcount3)+1;
        } else {
            localStorage.clickcount3 = 1;
        }
        document.getElementById("result3").innerHTML = + localStorage.clickcount3
    } else {
        document.getElementById("result3").innerHTML = "Sorry, your browser does not support web storage...";
    }
}


function Session4() {
    if(typeof(Storage) !== "undefined") {
        if (localStorage.clickcount4) {
            localStorage.clickcount4 = Number(localStorage.clickcount4)+1;
        } else {
            localStorage.clickcount4 = 1;
        }
        document.getElementById("result4").innerHTML = + localStorage.clickcount4
    } else {
        document.getElementById("result4").innerHTML = "Sorry, your browser does not support web storage...";
    }
}

function reset() {
  localStorage.clear();
}
