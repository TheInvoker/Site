require(["jquery", "spa", "widget_header", "widget_body", "widget_footer", "utils"], function($, SPA, Header, Body, Footer, utils) {
    
    $.ajax({
        url : "/json/site.json",
        success : function(data) {
            var header = Header(data.header);
            var body = Body();
            var footer = Footer(data.social);

            var div = document.createElement("div");
            div.appendChild(header);
            div.appendChild(body);
            div.appendChild(footer);
            document.body.appendChild(div);

            div.classList.add("rd_full_body_container");
            body.classList.add("rd_full_body");

            handleBody(SPA, div, body, utils, data);
        }, 
        error : function(jqXHR, error, errorThrown) {

        }
    });

    function handleBody(SPA, layout, context, utils, json_data) {
        utils.insertCSS("css/plugins/spa.css");

        SPA.addPages([
            {
                path : "/",
                layout : layout,
                context : context,
                content : function(callback, data) {
                    require(["page_about"], function(page) {
                        var element = page(json_data.title, json_data.image, json_data.bio);
                        callback(element);
                    });
                }
            },
            {
                path : "/projects",
                layout : layout,
                context : context,
                content : function(callback, data) {
                    require(["page_projects"], function(page) {
                        var element = page(data);
                        callback(element);
                    });
                }
            },
            {
                path : "/work",
                layout : layout,
                context : context,
                content : function(callback, data) {
                    require(["page_work"], function(page) {
                        var element = page(data);
                        callback(element);
                    });
                }
            },
            {
                path : "/education",
                layout : layout,
                context : context,
                content : function(callback, data) {
                    require(["page_education"], function(page) {
                        var element = page(data);
                        callback(element);
                    });
                }
            },
            {
                path : "/contact",
                layout : layout,
                context : context,
                content : function(callback, data) {
                    require(["page_contact"], function(page) {
                        var element = page(json_data.social);
                        callback(element);
                    });
                }
            },
            {
                path : ".*",
                layout : layout,
                context : context,
                content : function(callback, data) {
                    require(["page_404"], function(page) {
                        var element = page(data);
                        callback(element);
                    });
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