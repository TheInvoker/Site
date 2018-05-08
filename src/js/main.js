require(["jquery", "spa", "widget_header", "widget_body", "widget_footer", "utils"], function($, SPA, Header, Body, Footer, utils) {
    
    $.ajax({
        url : "/json/site.json",
        success : function(data) {
            var header = Header(data.header);
            var body = Body();
            var footer = Footer(data.social);

            var div = document.createElement("div");
            div.appendChild(header);
            div.appendChild(body);
            div.appendChild(footer);
            document.body.appendChild(div);

            div.classList.add("rd_full_body_container");
            body.classList.add("rd_full_body");

            handleBody(SPA, div, body, utils, data);
        }, 
        error : function(jqXHR, error, errorThrown) {

        }
    });

    function handleBody(SPA, layout, context, utils, json_data) {
        utils.insertCSS("/css/plugins/spa.css");

        var pages = [
            {
                path : "/",
                layout : layout,
                context : context,
                content : function(callback, data) {
                    require(["page_about"], function(page) {
                        var element = page(json_data.title, json_data.image, json_data.bio);
                        callback(element);
                    });
                }
            },
            {
                path : "/projects",
                layout : layout,
                context : context,
                content : function(callback, data) {
                    require(["page_projects"], function(page) {
                        var element = page(json_data.projects);
                        callback(element);
                    });
                }
            },
            {
                path : "/work",
                layout : layout,
                context : context,
                content : function(callback, data) {
                    require(["page_work"], function(page) {
                        var element = page(json_data.work);
                        callback(element);
                    });
                }
            },
            {
                path : "/education",
                layout : layout,
                context : context,
                content : function(callback, data) {
                    require(["page_education"], function(page) {
                        var element = page(json_data.education);
                        callback(element);
                    });
                }
            },
            {
                path : "/contact",
                layout : layout,
                context : context,
                content : function(callback, data) {
                    require(["page_contact"], function(page) {
                        var element = page(json_data.social);
                        callback(element);
                    });
                }
            }
        ];

        var gm = json_data.projects.gamemaker.data;
        gm.map(function(project) {
            pages.push({
                path : "/projects/gamemaker/" + utils.urlSafeName(project.name),
                layout : layout,
                context : context,
                content : function(callback, data) {
                    require(["page_projects_gm_item"], function(page) {
                        var element = page(project);
                        callback(element);
                    });
                }
            });
        });

        pages.push({
            path : ".*",
            layout : layout,
            context : context,
            content : function(callback, data) {
                require(["page_404"], function(page) {
                    var element = page(data);
                    callback(element);
                });
            }
        });

        SPA.addPages(pages);
        SPA.start({});
    }
});