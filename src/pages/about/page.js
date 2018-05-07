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

        var wrapper = "<div style=\"position:relative;\">" + grid + "<div style=\"position:absolute;top:0;left:0;color:white;padding:0 1em;\"><h1>" + title + "</h1></div></div>";

        div.innerHTML = wrapper + bio_html;

        return div;
    };
});