define(['module', 'jquery', "utils"], function(module, $, utils) {

    utils.insertCSS(utils.getDirectory(module.uri) + "page.css");

    return function(data) {
        var div = document.createElement("div");
        div.classList.add("rd_page_about");

        div.innerHTML += 
            '<div class="rd_image_grid">' +
                '<div class="rd_image_row">' +
                    '<div class="rd_image_cell">' +
                        '<img src="images/ryan/VBP_6290_01.png">' +
                    '</div>' +
                    '<div class="rd_image_cell">' +
                        '<img src="images/ryan/VBP_6290_02.png">' +
                    '</div>' +
                    '<div class="rd_image_cell">' +
                        '<img src="images/ryan/VBP_6290_03.png">' +
                    '</div>' +
                    '<div class="rd_image_cell">' +
                        '<img src="images/ryan/VBP_6290_04.png">' +
                    '</div>' +
                    '<div class="rd_image_cell">' +
                        '<img src="images/ryan/VBP_6290_05.png">' +
                    '</div>' +
                '</div>' +
                '<div class="rd_image_row">' +
                    '<div class="rd_image_cell">' +
                        '<img src="images/ryan/VBP_6290_06.png">' +
                    '</div>' +
                    '<div class="rd_image_cell">' +
                        '<img src="images/ryan/VBP_6290_07.png">' +
                    '</div>' +
                    '<div class="rd_image_cell">' +
                        '<img src="images/ryan/VBP_6290_08.png">' +
                    '</div>' +
                    '<div class="rd_image_cell">' +
                        '<img src="images/ryan/VBP_6290_09.png">' +
                    '</div>' +
                    '<div class="rd_image_cell">' +
                        '<img src="images/ryan/VBP_6290_10.png">' +
                    '</div>' +
                '</div>' +
                '<div class="rd_image_row">' +
                    '<div class="rd_image_cell">' +
                        '<img src="images/ryan/VBP_6290_11.png">' +
                    '</div>' +
                    '<div class="rd_image_cell">' +
                        '<img src="images/ryan/VBP_6290_12.png">' +
                    '</div>' +
                    '<div class="rd_image_cell">' +
                        '<img src="images/ryan/VBP_6290_13.png">' +
                    '</div>' +
                    '<div class="rd_image_cell">' +
                        '<img src="images/ryan/VBP_6290_14.png">' +
                    '</div>' +
                    '<div class="rd_image_cell">' +
                        '<img src="images/ryan/VBP_6290_15.png">' +
                    '</div>' +
                '</div>' +
            '</div>';

        $.ajax({
            url : utils.getDirectory(module.uri) + "page.json",
            success : function(data) {
                div.innerHTML += data.bio;
            }
        });

        return div;
    };
});