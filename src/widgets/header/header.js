define(["headroom", "utils"], function(Headroom, utils) {

    utils.insertCss("widgets/header/header.css");

    return function() {
        var div = document.createElement("div");
        div.innerHTML = "HELLO";
        div.classList.add("rd_header");
        document.body.appendChild(div);
        
        var headroom  = new Headroom(div);
        headroom.init(); 

        updateHeaderPadding();
        window.addEventListener("resize", updateHeaderPadding, false);

        function updateHeaderPadding() {
            document.body.style.paddingTop = div.clientHeight + "px";
        }

        this.getElement = function() {
            return div;
        };

        this.updateHeaderPadding = updateHeaderPadding;
    };
});