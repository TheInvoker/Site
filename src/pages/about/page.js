define(['module', 'jquery', "utils"], function(module, $, utils) {

    utils.insertCSS(utils.getDirectory(module.uri) + "page.css");

    return function(title, image, bio) {
        var div = document.createElement("div");
        div.classList.add("rd_page_about");

        var grid = '<div class="rd_image_grid">' + image.map(function(row) {
            return '<div class="rd_image_row">' + row.map(function(cell) {
                return '<div class="rd_image_cell"><img src="' + cell + '"></div>';
            }).join('') + '</div>';
        }).join('') + '</div>';
        
        var bio_html = "<div class=\"padding-0-10\">" + bio.map(function(item) {
            return "<p>" + item + "</p>";
        }).join('') + "</div>";

        var wrapper = "<div class=\"rd_main_wrapper\">" + grid + "<div class=\"rd_title\">" + title + "</div></div>";

        div.innerHTML = wrapper + bio_html;

        return div;
    };
});