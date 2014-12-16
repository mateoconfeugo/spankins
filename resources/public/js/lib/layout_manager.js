function getXPath( element )
{
    var xpath = '';
    for ( ; element && element.nodeType == 1; element = element.parentNode )
    {
        var id = $(element.parentNode).children(element.tagName).index(element) + 1;
        id > 1 ? (id = '[' + id + ']') : (id = '');
        xpath = '/' + element.tagName.toLowerCase() + id + xpath;
    }
    return xpath;
}

function clearDemo() {
    $(".demo").empty()
}

function removeMenuClasses() {
    $("#menu-layoutit li button").removeClass("active")
}

function changeStructure(e, t) {
    $("#download-layout ." + e).removeClass(e).addClass(t)
}

function cleanHtml(e) {
    $(e).parent().append($(e).children().html())
}

function downloadLayoutSrc() {
    var e = "";
    $("#download-layout").children().html($(".demo").html());
    var t = $("#download-layout").children();
    t.find(".preview, .configuration, .drag, .remove").remove();
    t.find(".lyrow").addClass("removeClean");
    t.find(".box-element").addClass("removeClean");
    t.find(".lyrow .lyrow .lyrow .lyrow .lyrow .removeClean").each(function () {
        cleanHtml(this)
    });
    t.find(".lyrow .lyrow .lyrow .lyrow .removeClean").each(function () {
        cleanHtml(this)
    });
    t.find(".lyrow .lyrow .lyrow .removeClean").each(function () {
        cleanHtml(this)
    });
    t.find(".lyrow .lyrow .removeClean").each(function () {
        cleanHtml(this)
    });
    t.find(".lyrow .removeClean").each(function () {
        cleanHtml(this)
    });
    t.find(".removeClean").each(function () {
        cleanHtml(this)
    });
    t.find(".removeClean").remove();
    $("#download-layout .column").removeClass("ui-sortable");
    $("#download-layout .row-fluid").removeClass("clearfix").children().removeClass("column");
    if ($("#download-layout .container").length > 0) {
        changeStructure("row-fluid", "row")
    }
    formatSrc = $.htmlClean($("#download-layout").html(), {
        format: true,
        allowedAttributes: [
            ["id"],
            ["class"],
            ["data-toggle"],
            ["data-target"],
            ["data-parent"],
            ["role"],
            ["data-dismiss"],
            ["aria-labelledby"],
            ["aria-hidden"],
            ["data-slide-to"],
            ["data-slide"]
        ]
    });
    $("#download-layout").html(formatSrc);
    $("#downloadModal textarea").empty();
    $("#downloadModal textarea").val(formatSrc)
}
var currentDocument = null;
var timerSave = 2e3;
var demoHtml = $(".demo").html();
$(window).resize(function () {
    $("body").css("min-height", $(window).height() - 90);
    $(".demo").css("min-height", $(window).height() - 160)
});

function initialize_legacy_editor() {
    $("body").css("min-height", $(window).height() - 90);
    $(".demo").css("min-height", $(window).height() - 160);
/*
    $(".demo, .demo .column").sortable({
        connectWith: ".column",
        opacity: .35,
	revert: true,
        handle: ".drag",
        receive: function (event, ui) { event.preventDefault(); }
    });
*/
    $(".sidebar-nav .lyrow").draggable({
        connectToSortable: ".demo",
        helper: "clone",
        handle: ".drag",
        drag: function (e, t) {
            t.helper.width(400)
        },
        stop: function (e, t) {
//            $(".demo .column").sortable({
//                opacity: .35,
//                connectWith: ".column"
//            })
        }
    });
    $(".sidebar-nav .box").draggable({
        connectToSortable: ".column",
        helper: "clone",
        handle: ".drag",
        drag: function (e, t) {
            t.helper.width(400)
        },
        stop: function () {
            handleJsIds()
        }
    });
/*
    $('#drop-zone').droppable({
	drop: function ( event, ui ) {
//	    event.preventDefault();
	    var demo = $('.demo');
	    var page_html = $(".demo")[0].innerHTML;
	    var snippet_dom = ui.draggable[0];
	    var snippet_html = snippet_dom.innerHTML;
	    var dom_xpath  = xpath.getElementXPath(snippet_dom);
	    var uuid = 1;
	    var user_id = 1;
	    var landing_site_id = 1
	    site_builder_udc.editor.update_landing_site(page_html, dom_xpath, snippet_html, user_id, landing_site_id);
//	    $(snippet_dom).addClass("uuid_" + uuid);
	}});
*/


//	    var model = site_builder_udc.main_upload.gather_tuple(dom);

/*
	    $.ajax({
		type: "POST",
		url: "/cms/sitebuilder",
		data: dom_xpath,
		success: function(data) {
		    model = data;
		    uuid = data.uuid;
		    $(dom).addClass("uuid_" + uuid);
		},
		complete: function(xhr, status) {
		    var uri = '/cms/sitebuilder/uuid/' + uuid;
		    model = {"xpath": dom_xpath, "dom": dom.innerHTML,  "uuid": uuid, "layout": $(".demo")[0].innerHTML};
		    $.post(uri, model, function(data) { model = data; });
		}
	    });
*/

    $("[data-target=#downloadModal]").click(function (e) {
        e.preventDefault();
        downloadLayoutSrc()
    });

/* Here also wire up the clojurescript code and call it in a javascript manner */
    $("#download").click(function () {
        downloadLayout();
        return false
    });
    $("#downloadhtml").click(function () {
        downloadHtmlLayout();
        return false
    });
    $("#edit").click(function () {
        $("body").removeClass("devpreview sourcepreview");
        $("body").addClass("edit");
        removeMenuClasses();
        $(this).addClass("active");
        return false
    });
    $("#content-view").click(function () {
        $("body").removeClass("devpreview sourcepreview");
        $("body").addClass("content-view");
        removeMenuClasses();
        $(this).addClass("active");
        return false
    });
    $("#document-view").click(function () {
        $("body").removeClass("devpreview sourcepreview");
        $("body").addClass("document-view");
        removeMenuClasses();
        $(this).addClass("active");
        return false
    });
    $("#clear").click(function (e) {
        e.preventDefault();
        clearDemo()
    });
    $("#devpreview").click(function () {
        $("body").removeClass("edit sourcepreview");
        $("body").addClass("devpreview");
        removeMenuClasses();
        $(this).addClass("active");
        return false
    });
    $("#sourcepreview").click(function () {
        $("body").removeClass("edit");
        $("body").addClass("devpreview sourcepreview");
        removeMenuClasses();
        $(this).addClass("active");
        return false
    });
    $("#fluidPage").click(function (e) {
        e.preventDefault();
        changeStructure("container", "container-fluid");
        $("#fixedPage").removeClass("active");
        $(this).addClass("active");
        downloadLayoutSrc()
    });
    $("#fixedPage").click(function (e) {
        e.preventDefault();
        changeStructure("container-fluid", "container");
        $("#fluidPage").removeClass("active");
        $(this).addClass("active");
        downloadLayoutSrc()
    });
    $(".nav-header").click(function () {
        $(".sidebar-nav .boxes, .sidebar-nav .rows").hide();
        $(this).next().slideDown()
    });
    removeElm();
    configurationElm();
    gridSystemGenerator();
/*
    setInterval(function () {
        handleSaveLayout()
    }, timerSave)
*/
}
/*
$(document).ready(function () {
//    goog.require('site_builder_udc.editor');
//    goog.require('site_builder_udc.main_upload');
//    goog.require('flourish_common.utils.helpers');
    site_builder_udc.main_upload.start();
});
*/

function handleSaveLayout() {
    var e = $(".demo").html();
    if (e != window.demoHtml) {
//        saveLayout($(".demo"));
        window.demoHtml = e
    }
}

function handleJsIds() {
    handleModalIds();
    handleAccordionIds();
    handleCarouselIds();
    handleTabsIds()
}

function handleAccordionIds() {
    var e = $(".demo #myAccordion");
    var t = randomNumber();
    var n = "accordion-" + t;
    var r;
    e.attr("id", n);
    e.find(".accordion-group").each(function (e, t) {
        r = "accordion-element-" + randomNumber();
        $(t).find(".accordion-toggle").each(function (e, t) {
            $(t).attr("data-parent", "#" + n);
            $(t).attr("href", "#" + r)
        });
        $(t).find(".accordion-body").each(function (e, t) {
            $(t).attr("id", r)
        })
	    })
	}

function handleCarouselIds() {
    var e = $(".demo #myCarousel");
    var t = randomNumber();
    var n = "carousel-" + t;
    e.attr("id", n);
    e.find(".carousel-indicators li").each(function (e, t) {
        $(t).attr("data-target", "#" + n)
    });
    e.find(".left").attr("href", "#" + n);
    e.find(".right").attr("href", "#" + n)
}

function handleModalIds() {
    var e = $(".demo #myModalLink");
    var t = randomNumber();
    var n = "modal-container-" + t;
    var r = "modal-" + t;
    e.attr("id", r);
    e.attr("href", "#" + n);
    e.next().attr("id", n)
}

function handleTabsIds() {
    var e = $(".demo #myTabs");
    var t = randomNumber();
    var n = "tabs-" + t;
    e.attr("id", n);
    e.find(".tab-pane").each(function (e, t) {
        var n = $(t).attr("id");
        var r = "panel-" + randomNumber();
        $(t).attr("id", r);
        $(t).parent().parent().find("a[href=#" + n + "]").attr("href", "#" + r)
    })
	}

function randomNumber() {
    return randomFromInterval(1, 1e6)
}

function randomFromInterval(e, t) {
    return Math.floor(Math.random() * (t - e + 1) + e)
}

function gridSystemGenerator() {
    $(".lyrow .preview input").bind("keyup", function () {
        var e = 0;
        var t = "";
        var n = false;
        var r = $(this).val().split(" ", 12);
        $.each(r, function (r, i) {
            if (!n) {
                if (parseInt(i) <= 0) n = true;
                e = e + parseInt(i);
                t += '<div class="span' + i + ' column"></div>'
            }
        });
        if (e == 12 && !n) {
            $(this).parent().next().children().html(t);
            $(this).parent().prev().show()
        } else {
            $(this).parent().prev().hide()
        }
    })
}

function configurationElm(e, t) {
    $(".demo").delegate(".configuration > a", "click", function (e) {
        e.preventDefault();
        var t = $(this).parent().next().next().children();
        $(this).toggleClass("active");
        t.toggleClass($(this).attr("rel"))
    });
    $(".demo").delegate(".configuration .dropdown-menu a", "click", function (e) {
        e.preventDefault();
        var t = $(this).parent().parent();
        var n = t.parent().parent().next().next().children();
        t.find("li").removeClass("active");
        $(this).parent().addClass("active");
        var r = "";
        t.find("a").each(function () {
            r += $(this).attr("rel") + " "
        });
        t.parent().removeClass("open");
        n.removeClass(r);
        n.addClass($(this).attr("rel"))
    })
}

function removeElm() {
    $(".demo").delegate(".remove", "click", function (e) {
        e.preventDefault();
        $(this).parent().remove();
        if (!$(".demo .lyrow").length > 0) {
            clearDemo()
        }
    })
}

/*
Possibly replace this with a javascript call to  clojurescript function

*/
function saveLayout(e){
    site_builder_udc.editor.save_landing_site({});
/*
    $.ajax({
	type: "POST",
	url: "/cms/sitebuilder/1",
	data: { layout: $('.demo').html(),
	        xpath: xpath.getElementXPath(e[0])},
	success: function(data) {
	    //updateButtonsVisibility();
	}
    });
*/
}

function downloadLayout(){
    $.ajax({
	type: "POST",
	url: "/build/downloadLayout",
	data: { layout: $('#download-layout').html() },
	success: function(data) { window.location.href = '/build/download'; }
    });
}

function downloadHtmlLayout(){
    $.ajax({
	type: "POST",
	url: "/build/downloadLayout",
	data: { layout: $('#download-layout').html() },
	success: function(data) { window.location.href = '/build/downloadHtml'; }
    });
}

function undoLayout() {

    $.ajax({
	type: "POST",
	url: "/build/getPreviousLayout",
	data: { },
	success: function(data) {
	    undoOperation(data);
	}
    });
}

function redoLayout() {

    $.ajax({
	type: "POST",
	url: "/build/getPreviousLayout",
	data: { },
	success: function(data) {
	    redoOperation(data);
	}
    });
}
