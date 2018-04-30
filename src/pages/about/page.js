define(["utils"], function(utils) {

    utils.insertCSS("pages/about/page.css");

    return function(data) {
        var div = document.createElement("div");
        div.innerHTML = "about";
        return div;
    };
});