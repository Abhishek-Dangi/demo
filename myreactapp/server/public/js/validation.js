function init() {
    nm = document.getElementById('name');
    // email = document.getElementById('email');
    // password = document.getElementById('pwd');
    // mobile = document.getElementById('mobile');
    // address = document.getElementById('address');
    // select = document.getElementById('select');

    err1 = document.getElementById('err1');
    // err2 = document.getElementById('err2');
    // err3 = document.getElementById('err3');
    // err4 = document.getElementById('err4');
    // err5 = document.getElementById('err5');
    // err6 = document.getElementById('err6');
}

function valid() {
    var name = nm.value;

    if (name.length == 0) {
        err1.innerHTML = "*plz enter name";
        err1.style.color = "red";

    }
    else {
        err1.innerHTML = "";
    }
}