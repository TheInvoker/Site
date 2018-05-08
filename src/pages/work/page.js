define(['module', "utils"], function(module, utils) {

    utils.insertCSS(utils.getDirectory(module.uri) + "page.css");

    return function(data) {
        var div = document.createElement("div");
        div.classList.add("rd_page_work");
        var html = data.map(function(item) {
            return "<div class=\"rd_work_item\">" +
                "<div>" + "<a href=\"" + item.company_url + "\" target=\"_blank\">" + item.company_name + "</a> (" + item.date + ")</div>" +
                "<div>" + item.title + "</div>" +
            "</div>";
        }).join('');
        div.innerHTML = html;
        return div;
    };
});