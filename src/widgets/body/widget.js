define(['module', "utils"], function(module, utils) {

    utils.insertCSS(utils.getDirectory(module.uri) + "widget.css");

    return function() {
        var div = document.createElement("div");
        div.classList.add("rd_body");

        return div;
    };
});