define(["utils"], function(utils) {

    utils.insertCSS("widgets/body/body.css");

    return function() {
        var div = document.createElement("div");
        div.classList.add("rd_body");

        this.getElement = function() {
            return div;
        };
    };
});