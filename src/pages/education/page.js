define(['module', "utils"], function(module, utils) {

    utils.insertCSS(utils.getDirectory(module.uri) + "page.css");

    return function(data) {
        var div = document.createElement("div");
        div.classList.add("rd_page_education");
        var html = data.map(function(item) {
            return "<div class=\"rd_education_item\">" +
                "<div>" + "<a href=\"" + item.host_url + "\" target=\"_blank\">" + item.host + "</a> (" + item.date + ")</div>" +
                "<div>" + item.name + "</div>" +
                "<div>" + item.type + "</div>" +
            "</div>";
        }).join('');
        div.innerHTML = html;
        return div;
    };
});