define(["utils"], function(utils) {

    utils.insertCss("widgets/body/body.css");

    return function() {
        var div = document.createElement("div");
        div.innerHTML = "WORLD";
        div.classList.add("rd_body");
        document.body.appendChild(div);

        this.getElement = function() {
            return div;
        };
    };
});