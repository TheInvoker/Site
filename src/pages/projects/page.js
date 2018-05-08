define(['module', "spa", "utils"], function(module, SPA, utils) {

    utils.insertCSS(utils.getDirectory(module.uri) + "page.css");

    return function(data) {
        var div = document.createElement("div");
        div.classList.add("rd_page_projects");
        
        var d = document.createElement('div');
        d.innerHTML = data.gamemaker.intro;
        div.appendChild(d);

        var br = document.createElement('br');
        div.appendChild(br);

        data.gamemaker.data.map(function(item) {
            var d = document.createElement('div');
            d.innerHTML = item.name;
            d.classList.add("rd_project_item");
            d.addEventListener("click", function(e) {
                SPA.openPage("/projects/gamemaker/" + utils.urlSafeName(item.name), null, true);
            });

            var od = document.createElement('div');
            od.appendChild(d);
            div.appendChild(od);
        });

        return div;
    };
});