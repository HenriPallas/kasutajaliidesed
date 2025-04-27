// --- Defining constants. ---

const templates = "../templates";
const partials = templates + "/partials";

const headerFile = partials + "/header.hbs";
const searchFile = partials + "/search.hbs";
const navFile = partials + "/nav.hbs";
const loginButtonFile = partials + "/login_button.hbs";
const mainContentFile = partials + "/main_content.hbs";
const carousellFile = partials + "/carousell.hbs";
const cardFile = partials + "/card.hbs"
const footerFile = partials + "/footer.hbs";

const mainTemplate = $("#main-page").html();
const target = "body";

// --- Template compiler function ---

$(function() {
    $.when(
        $.get(headerFile),
        $.get(searchFile),
        $.get(navFile),
        $.get(loginButtonFile),
        $.get(mainContentFile),
        $.get(carousellFile),
        $.get(cardFile),
        $.get(footerFile),
    ).done(function(headerTemplate, searchTemplate, navTemplate, loginButtonFile, mainContentTemplate, carousellTemplate, cardTemplate, footerTemplate) {
        Handlebars.registerPartial('header', headerTemplate[0]);
        Handlebars.registerPartial('search', searchTemplate[0]);
        Handlebars.registerPartial('nav', navTemplate[0]);
        Handlebars.registerPartial('login_button', loginButtonFile[0]);
        Handlebars.registerPartial('main_content', mainContentTemplate[0]);
        Handlebars.registerPartial('carousell', carousellTemplate[0]);
        Handlebars.registerPartial('card', cardTemplate[0]);
        Handlebars.registerPartial('footer', footerTemplate[0]);

        var compiledMainTemplate = Handlebars.compile(mainTemplate);

        var finalHtml = compiledMainTemplate();
        $(target).html(finalHtml);

    })
});