define(["utils"], function(utils) {

    utils.insertCSS("pages/projects/page.css");

    return function(data) {
        var div = document.createElement("div");
        div.innerHTML = "projects";
        return div;
    };
});