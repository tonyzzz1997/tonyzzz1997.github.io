function check() {
    var y = document.getElementById('name').value;
    var x = document.getElementById('error__name');
    if (y.length === 0) {
        x.innerHTML = "Please fill out your name";
        x.style.color = "red";


    } else if (y.length > 100) {
        x.innerHTML = "Your name should not exeed 100 character.";
        x.style.color = "red";

    } else {
        x.innerHTML = "";
    }

    var a = document.getElementById('email').value;
    var b = document.getElementById('error__email');
    if (a.length === 0) {
        b.innerHTML = "Please fill out your email";
        b.style.color = "red";

    } else if (a.length > 100) {
        b.innerHTML = "Your email should not exeed 100 character.";
        b.style.color = "red";

    } else {
        b.innerHTML = "";
    }
    var n = document.getElementById('subject').value;
    var m = document.getElementById("error__subject");
    if (n.length === 0) {
        m.innerHTML = "Please fill out your subject";
        m.style.color = "red";

    } else if (n.length > 250) {
        m.innerHTML = "Your subject should not exeed 250 character.";
        m.style.color = "red";

    } else if (n.length < 50) {
        m.innerHTML = "Your subject should not shorter than 50 character.";
        m.style.color = "red";


    } else {
        m.innerHTML = "";
    }
    var g = document.getElementById('message').value;
    var h = document.getElementById('error__mess');
    if (g.length === 0) {
        h.innerHTML = "Please fill out your message";
        h.style.color = "red";

    } else if (g.length > 500) {
        h.innerHTML = "Your message should not exeed 500 character.";
        h.style.color = "red";

    } else {
        h.innerHTML = "";
    }
}