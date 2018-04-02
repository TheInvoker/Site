define(["utils"], function(utils) {

    utils.insertCss("widgets/footer/footer.css");

    return function() {
        var div = document.createElement("div");
        div.classList.add("rd_footer");
        document.body.appendChild(div);

        this.getElement = function() {
            return div;
        };
    };
});