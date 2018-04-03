define(["headroom", "utils"], function(Headroom, utils) {

    utils.insertCss("widgets/header/header.css");

    return function() {
        var div = document.createElement("div");
        div.innerHTML = "HELLO";
        div.classList.add("rd_header");
        document.body.appendChild(div);

        var headroom  = new Headroom(div);
        headroom.init(); 

        this.getElement = function() {
            return div;
        };
    };
});