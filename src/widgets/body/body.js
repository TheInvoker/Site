define(["utils"], function(utils) {

    utils.insertCSS("widgets/body/body.css");

    return function() {
        var div = document.createElement("div");
        div.classList.add("rd_body");
        document.body.appendChild(div);

        this.getElement = function() {
            return div;
        };
    };
});