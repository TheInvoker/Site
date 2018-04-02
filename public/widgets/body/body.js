"use strict";

/* header */

define(["utils"], function(utils) {

    utils.insertCss("widgets/body/body.css");

    return function() {
        var div = document.createElement("div");
        div.classList.add("rd_body");
        div.innerHTML = "Hello";
        document.body.appendChild(div);
    };
});