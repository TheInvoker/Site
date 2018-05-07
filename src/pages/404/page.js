define(['module', "utils"], function(module, utils) {

    utils.insertCSS(utils.getDirectory(module.uri) + "page.css");

    return function(data) {
        var div = document.createElement("div");
        div.classList.add("rd_page_404");
        div.innerHTML = "page not found";
        return div;
    };
});