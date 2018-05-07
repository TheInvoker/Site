define(['module', "utils"], function(module, utils) {

    utils.insertCSS(utils.getDirectory(module.uri) + "page.css");

    return function(data) {
        var div = document.createElement("div");
        div.classList.add("rd_page_contact");
        var html = data.map(function(item) {
            var a = "<a href=\"" + item.url + "\" target=\"" + item.target + "\">" + item.name + "</a>";
            return "<div>" + a + "</div>";
        }).join('');
        div.innerHTML = html;
        return div;
    };
}); 