"use strict";

/* header */

define([], function() {
    
    return new function() {

        this.insertCss = function( href ) {
            var head  = document.getElementsByTagName('head')[0];
            var link  = document.createElement('link');
            link.rel  = 'stylesheet';
            link.type = 'text/css';
            link.href = href;
            head.appendChild(link);
        };
    };
});