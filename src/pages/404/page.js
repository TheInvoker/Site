define(['module', "utils"], function(module, utils) {

    utils.insertCSS(utils.getDirectory(module.uri) + "page.css");

    return function(data) {
        var div = document.createElement("div");
        div.classList.add("rd_page_404");
        div.innerHTML = "<div align=\"center\"><img style=\"width:50%;max-height:50%;\" src=\"/images/404-permalink.png\"/></div>";
        return div;
    };
});