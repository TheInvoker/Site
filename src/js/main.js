require(["jquery", "spa", "header", "body", "footer", "utils"], function($, SPA, Header, Body, Footer, utils) {
    
    $.ajax({
        url : "/json/site.json",
        success : function(data) {
            var header = new Header(data.header);
            var body = new Body();
            var footer = new Footer(data.social);

            var headerElement = header.getElement();
            var bodyElement = body.getElement();
            var footerElement = footer.getElement();

            var div = document.createElement("div");
            div.appendChild(headerElement);
            div.appendChild(bodyElement);
            div.appendChild(footerElement);
            document.body.appendChild(div);

            div.classList.add("rd_full_body_container");
            bodyElement.classList.add("rd_full_body");

            handleBody(SPA, div, bodyElement, utils);
        }, 
        error : function(jqXHR, error, errorThrown) {

        }
    });

    function handleBody(SPA, layout, context, utils) {
        utils.insertCSS("css/plugins/spa.css");

        SPA.addPages([
            {
                path : "/",
                layout : layout,
                context : context,
                content : function(callback, data) {
                    var f = document.createElement("div");
                    f.innerHTML = "About";
                    callback(f);
                }
            },
            {
                path : "/projects",
                layout : layout,
                context : context,
                content : function(callback, data) {
                    var f = document.createElement("div");
                    f.innerHTML = "Projects";
                    callback(f);
                }
            },
            {
                path : "/work",
                layout : layout,
                context : context,
                content : function(callback, data) {
                    var f = document.createElement("div");
                    f.innerHTML = "Work";
                    callback(f);
                }
            },
            {
                path : "/education",
                layout : layout,
                context : context,
                content : function(callback, data) {
                    var f = document.createElement("div");
                    f.innerHTML = "Education";
                    callback(f);
                }
            },
            {
                path : "/contact",
                layout : layout,
                context : context,
                content : function(callback, data) {
                    var f = document.createElement("div");
                    f.innerHTML = "Contact";
                    callback(f);
                }
            }
        ]);
        SPA.start({});
    }
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