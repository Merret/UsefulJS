var xhr = (function () {
    var GET = function (trg, sync = false, crsp = true) {
        var anita;
        var ann = new XMLHttpRequest();
        ann.open('GET', trg, sync);
        ann.onload = function () {
            if (this.status === 200) {
                if(crsp == true) {
                    console.log("xhr.GET responded: " + this.responseText);
                }
                anita = this.responseText;
            } else {
                console.log("xhr.GET Error. statue: " + this.status);
                anita = "xhr.GET Error. statue: " + this.status;
            }
        };
        ann.send();
        return anita;
    };
    var POST = function (trg, data, ContentType = "application/json", sync = false, crsp = true) {
        var anita;
        var ann = new XMLHttpRequest();
        ann.open('POST', trg, sync);
        ann.setRequestHeader("Content-Type", ContentType);
        ann.onload = function () {
            if (this.status >= 200 && this.status < 300) {
                if(crsp == true) {
                    console.log("xhr.POST responded: " + this.responseText);
                }
                anita = this.responseText;
            } else {
                console.log("xhr.POST Error. statue: " + this.status);
                anita = "xhr.POST Error. statue: " + this.status;
            }
        };
        ann.send(data);
        return anita;
    };
    var PUT = function (trg, data, ContentType = "application/json", sync = false, crsp = true) {
        var anita;
        var ann = new XMLHttpRequest();
        ann.open('PUT', trg, sync);
        ann.setRequestHeader("Content-Type", ContentType);
        ann.onload = function () {
            if (this.status >= 200 && this.status < 300) {
                if(crsp == true) {
                    console.log("xhr.PUT responded: " + this.responseText);
                }
                anita = this.responseText;
            } else {
                console.log("xhr.PUT Error. statue: " + this.status);
                anita = "xhr.PUT Error. statue: " + this.status;
            }
        };
        ann.send(data);
        return anita;
    };
    var JSONG = function (trg, sync = false, crsp = false) {
        return JSON.parse(GET(trg, sync, crsp));
    };
    var GETwH = function (trg, header, sync = false, crsp = true) {
        var anita;
        var ann = new XMLHttpRequest();
        ann.open('GET', trg, sync);
        if(Array.isArray(header)) {
            for(var i = 0; i < header.length; i++) {
                ann.setRequestHeader(header[i][0], header[i][1]);
            }
        } else {
            console.log("xhr.GETwH Error: header format wrong, example: [[header1, value1],[header2, value2]]";
        }
        ann.onload = function () {
            if (this.status === 200) {
                if(crsp == true) {
                    console.log("xhr.GET responded: " + this.responseText);
                }
                anita = this.responseText;
            } else {
                console.log("xhr.GET Error. statue: " + this.status);
                anita = "xhr.GET Error. statue: " + this.status;
            }
        };
        ann.send();
        return anita;
    };
    
    var help = "xhr.GET: xhr.GET(url)\nxhr.POST: xhr.POST(url, data, [ContentType='application/json'], [sync=false])\nxhr.PUT: xhr.PUT(url, data, [ContentType='application/json'], [sync=false])\nXHR.js is made by JacobLinCool\nGitHub: https://github.com/jacoblincool";
    
    return {
        GET: GET,
        get: GET,
        POST: POST,
        post: POST,
        PUT: PUT,
        put: PUT,
        JSON: JSONG,
        json: JSONG,
        GETwH: GETwH,
        getwh: GETwH,
        help: help
    }
})()
