function urldata(key) {
    var u = location.href;
    u = u.substr(u.search("\\?"));
    var n = key.length;
    var i = u.search(key)+n+1;
    var a = "";
    while(u.charAt(i)!=""&&u.charAt(i)!="&") {
        a += u.charAt(i);
        ++i;
    }
    if(u.search(key)==-1) {return -1;}
    return a;
}
