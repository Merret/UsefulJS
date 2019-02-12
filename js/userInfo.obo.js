var userInfo;
getUserInfo1();
console.log("Getting userInfo: Preparing...");

function getUserInfo1() {
var keyList = ["53328f3f91ecf752a50eacd2853473766234634e0d29ce157dd416df", "8355101613c9848d941992940ae62443599538f0baff6361ec263667", "fb271985d70493b7aac593d416e883624a5e8eef68c72bd3b92d0f22"];
var keyListIndex = Math.floor(Math.random()*3);

var x = new XMLHttpRequest();
x.open('GET', "https://api.ipdata.co/?api-key="+keyList[keyListIndex], true);
x.onload = function () {
    if (this.status === 200) {
        userInfo = JSON.parse(this.responseText);
        getUserInfo2();
        console.log("Getting userInfo: 1/3");
    }
}
}

function getUserInfo2() {
var x = new XMLHttpRequest();
x.open('GET', "https://"+DNSkey(32, '0123456789abcdefghijklmnopqrstuvwxyz')+".edns.ip-api.com/json", true);
x.onload = function () {
    if (this.status === 200) {
        userInfo.dnsServer = JSON.parse(this.responseText).dns;
        getUserInfo3();
        console.log("Getting userInfo: 2/3");
    }
}
}
function getUserInfo3() {
if(typeof UAParser === 'undefined') {
    var script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/gh/faisalman/ua-parser-js@0.7.19/dist/ua-parser.min.js';
    script.onload = function() {userInfo.device = UAParser(navigator.userAgent);console.log("Getting userInfo: Finished.");};
    document.head.appendChild(script);
} else {
    userInfo.device = UAParser(navigator.userAgent);console.log("Getting userInfo: Finished.");
}
}

function DNSkey(length, chars) {
    var result = '';
    for (var i = length; i > 0; --i) result += chars[Math.floor(Math.random() * chars.length)];
    return result;
}
