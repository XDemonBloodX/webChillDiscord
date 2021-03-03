cookieAgree = $(".cookJs");

var cook = document.cookie.split(';');
const ipCurrent = getCurrentIp();
if (cook[0] == "policy=accept:" + ipCurrent) {
    cookieAgree.css('display', 'none');
} else {
    cookieAgree.css('display', 'block');
}


$("#spaceBtnPrivacy").click(function() {
    document.cookie = "policy=accept:" + ipCurrent;
    cookieAgree.css('display', 'none');
});

function getCurrentIp() {
    $.getJSON("https://api.ipify.org/?format=json", function(ip) {
        return ip.ip;
    });
}