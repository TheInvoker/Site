define(["spa", "headroom", "utils"], function(SPA, Headroom, utils) {

    utils.insertCSS("widgets/header/header.css");

    return function(data) {
        var div = document.createElement("div");
        div.classList.add("rd_header");

        data.map(function(item) {
            var t = document.createElement("div");
            t.classList.add("rd_header_cell");
            t.addEventListener("click", function(e) {
                SPA.openPage(item.url, {}, true);
            });
            t.innerHTML = item.name;
            div.appendChild(t);
        });

        var headroom  = new Headroom(div);
        headroom.init(); 

        this.getElement = function() {
            return div;
        };
    };
});