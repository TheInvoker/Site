define(['module', "spa", "headroom", "utils"], function(module, SPA, Headroom, utils) {

    utils.insertCSS(utils.getDirectory(module.uri) + "widget.css");

    function setActive(menu, elem) {
        var cs = menu.querySelector(".rd_header_cell.rd_header_cell_selected");
        if (cs) cs.classList.remove("rd_header_cell_selected");
        elem.classList.add("rd_header_cell_selected");
    }

    return function(data) {
        var div = document.createElement("div");
        div.classList.add("rd_header");

        var t = document.createElement("div");
        t.classList.add("rd_header_hamburger_button");
        t.setAttribute("data-on", "0");
        t.addEventListener("click", function(e) {
            t.setAttribute("data-on", 1 - t.getAttribute("data-on"));
            event.stopPropagation();
        });
        document.body.addEventListener("click", function(e) {
            t.setAttribute("data-on", 0);
        });
        div.appendChild(t);

        var menu = document.createElement("div");
        menu.classList.add("rd_header_menu_container");
        div.appendChild(menu);

        data.map(function(item) {
            var t = document.createElement("div");
            t.classList.add("rd_header_cell");
            t.addEventListener("click", function(e) {
                setActive(menu, t);
                SPA.openPage(item.url, null, true);
            });
            // set default selection
            if (item.url.toLowerCase() == window.location.pathname) {
                setActive(menu, t);
            }
            t.innerHTML = item.name;
            menu.appendChild(t);
        });

        var headroom  = new Headroom(div);
        headroom.init(); 

        return div;
    };
});