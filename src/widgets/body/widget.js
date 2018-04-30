define(["utils"], function(utils) {

    utils.insertCSS("widgets/body/widget.css");

    return function() {
        var div = document.createElement("div");
        div.classList.add("rd_body");

        return div;
    };
});