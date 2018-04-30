define(["utils"], function(utils) {

    utils.insertCSS("widgets/footer/footer.css");

    return function(data) {
        var div = document.createElement("div");
        div.classList.add("rd_footer");

        data.map(function(item) {
            var t = document.createElement("a");
            t.setAttribute("href", item.url);
            t.setAttribute("target", item.target);
            t.classList.add("rd_footer_cell");
            t.innerHTML = item.name;
            div.appendChild(t);
        });

        return div;
    };
});