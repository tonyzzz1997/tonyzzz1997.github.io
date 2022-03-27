function check() {
    var x = document.getElementById('forname');
    var y = document.getElementById('name').value;
    if (y.length == 0) {
        x.innerHTML = "Please fill out your name";
    } else if (y.length > 100) {
        x.innerHTML = "Your name should not exceed 100 characters.";
    } else {
        x.innerHTML = "";
    }
    var a = document.getElementById('formess');
    var b = document.getElementById('mess').value;
    if (b.length > 30) {
        a.innerHTML = "Message should not exceed 30 characters.";
    } else {
        a.innerHTML = "";
    }
    var m = document.getElementById('fordate');
    var n = document.getElementById('date').value;
    if (n == 0) {
        m.innerHTML = "Please fill out the deliver date.";
    } else {
        m.innerHTML = "";
    }
    var c = document.getElementById('foradd');
    var d = document.getElementById('add').value;
    if (d.length === 0) {
        c.innerHTML = "Please fill out the address.";
    } else if (d.length > 500) {
        c.innerHTML = "Address should not exceed 500 characters.";
    } else {
        c.innerHTML = "";
    }
    var e = document.getElementById('forshoes');
    var f = document.getElementById('choose').value;
    if (f == 0) {
        e.innerHTML = "Please select our product."
    } else {
        e.innerHTML = ""
    }
}