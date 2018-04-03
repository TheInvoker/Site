define(["headroom", "utils"], function(Headroom, utils) {

    utils.insertCSS("widgets/header/header.css");

    return function(data) {
        var div = document.createElement("div");
        div.classList.add("rd_header");
        document.body.appendChild(div);

        for(var i=0; i<data.length; i++) {
            var t = document.createElement("div");
            t.classList.add("rd_header_cell");
            t.innerHTML = data[i].name;
            div.appendChild(t);
        }

        var headroom  = new Headroom(div);
        headroom.init(); 

        this.getElement = function() {
            return div;
        };
    };
});