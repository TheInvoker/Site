define(["utils"], function(utils) {

    utils.insertCSS("pages/work/page.css");

    return function(data) {
        var div = document.createElement("div");
        div.innerHTML = "work";
        return div;
    };
});