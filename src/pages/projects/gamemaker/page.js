define(['module', "utils"], function(module, utils) {

    utils.insertCSS(utils.getDirectory(module.uri) + "page.css");

    return function(item) {
        var div = document.createElement("div");
        div.classList.add("rd_page_projects_gamemaker");
        var html = "<div class=\"rd_gamemaker_item\">" +
                        "<h2>" + item.name + "</h2>" +
                        "<p>" + item.description + "</p>" +
                        item.download.map(function(item) {
                            return "<a href=\"" + item.url + "\" target=\"_blank\">" + item.name + "</a>";
                        }).join('') +
                        item.screenshots.map(function(src) {
                            return "<div><img src=\"" + src + "\" /></div>";
                        }).join('') +
                        item.videos.map(function(item) {
                            return "<div>" + item + "</div>";
                        }).join('');
                    "</div>";
        div.innerHTML = html;
        return div;
    };
});