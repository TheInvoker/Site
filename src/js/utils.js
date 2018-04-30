define([], function() {
    
    return new function() {

        this.insertCSS = function( href ) {
            var head  = document.getElementsByTagName('head')[0];
            var link  = document.createElement('link');
            link.rel  = 'stylesheet';
            link.type = 'text/css';
            link.href = href;
            head.appendChild(link);
        };

        this.getDirectory = function(filepath) {
            return filepath.substring(0, filepath.lastIndexOf("/") + 1);
        };
    };
});