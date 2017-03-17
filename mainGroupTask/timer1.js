var c = 0;

function timer() {
    setInterval("count()", 1000);
}

function count() {
    document.getElementById('txt').innerHTML = c++;
}
