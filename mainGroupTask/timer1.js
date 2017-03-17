var c = 0; //variable is used. the counting will start from number 0

function timer() {
    setInterval("count()", 1000); // function set interval is used to count the number. it will count till the number 1000
}

function count() {
    document.getElementById('txt').innerHTML = c++;
}
