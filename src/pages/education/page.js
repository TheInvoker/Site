define(["utils"], function(utils) {

    utils.insertCSS("pages/education/page.css");

    return function(data) {
        var div = document.createElement("div");
        div.innerHTML = "education";
        return div;
    };
});