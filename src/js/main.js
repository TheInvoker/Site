require(["header", "body", "footer"], function(Header, Body, Footer) {
    new Header();
    new Body();
    new Footer();
});

/*

var layout = document.createElement("div");
layout.style.backgroundColor="cyan";
var h = document.createElement("div");
var b = document.createElement("div");
var f = document.createElement("div");
layout.appendChild(h);
layout.appendChild(b);
layout.appendChild(f);
h.innerHTML = "header";
f.innerHTML = "footer";

var layout2 = document.createElement("div");
layout2.style.backgroundColor="yellow";
var h2 = document.createElement("div");
var b2 = document.createElement("div");
var f2 = document.createElement("div");
layout2.appendChild(h2);
layout2.appendChild(b2);
layout2.appendChild(f2);
h2.innerHTML = "header";
f2.innerHTML = "footer";


document.body.appendChild(layout);
document.body.appendChild(layout2);

var c1 = function(callback, data) {
    var a = document.createElement("a");
    a.innerHTML = "click";
    a.setAttribute("href", "javascript:void(0);");
    a.addEventListener("click", function() {
        SPA.openPage("/gg", {}, false); // pass data
    });
    
    var b = document.createElement("a");
    b.innerHTML = "click2";
    b.setAttribute("href", "javascript:void(0);");
    b.addEventListener("click", function() {
        SPA.openPage("/bar", {}, true); // pass data
    });

    var r = document.createElement("div");
    r.appendChild(a);
    r.appendChild(b);
    callback(r);
};
var c2 = function(callback, data) {
    var r = document.createElement("div");
    r.innerHTML = "content2";
    callback(r);
};
var c3 = function(callback, data) {
    var r = document.createElement("div");
    r.innerHTML = "hehe";
    callback(r);
};

SPA.addPages([
    {
        path : "/foo",
        layout : layout,
        context : b,
        content : c1
    },
    {
        path : "/gg",
        layout : layout,
        context : b,
        content : c3
    },
    {
        path : "/bar",
        layout : layout2,
        context : b2,
        content : c2
    }
]);
SPA.start({});
*/