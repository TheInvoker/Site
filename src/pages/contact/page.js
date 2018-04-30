define(["utils"], function(utils) {

    utils.insertCSS("pages/contact/page.css");

    return function(data) {
        var div = document.createElement("div");
        div.innerHTML = "contact";
        return div;
    };
});