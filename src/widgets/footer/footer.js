define(["utils"], function(utils) {

    utils.insertCSS("widgets/footer/footer.css");

    return function(data) {
        var div = document.createElement("div");
        div.classList.add("rd_footer");
        document.body.appendChild(div);

        for(var i=0; i<data.length; i++) {
            var t = document.createElement("a");
            t.setAttribute("href", data[i].url);
            t.setAttribute("target", data[i].target);
            t.classList.add("rd_footer_cell");
            t.innerHTML = data[i].name;
            div.appendChild(t);
        }

        this.getElement = function() {
            return div;
        };
    };
});