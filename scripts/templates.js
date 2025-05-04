// --- Defining constants. ---

const templates = "../templates";
const partials = templates + "/partials";

const headerFile = partials + "/header.hbs";
const searchFile = partials + "/search.hbs";
const navFile = partials + "/nav.hbs";
const loginButtonFile = partials + "/login_button.hbs";
const mainContentFile = partials + "/main_content.hbs";
const emptyContentFile = partials + "/empty_content.hbs";
const carousellFile = partials + "/carousell.hbs";
const cardFile = partials + "/card.hbs"
const cardEventsFile = partials + "/card_events.hbs"
const cardImportantFile = partials + "/card_important.hbs"
const cardContactsFile = partials + "/card_contacts.hbs"
const cardCrisisFile = partials + "/card_crisis.hbs"
const cardFormsFile = partials + "/card_forms.hbs"
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
        $.get(emptyContentFile),
        $.get(carousellFile),
        $.get(cardFile),
        $.get(cardEventsFile),
        $.get(cardImportantFile),
        $.get(cardContactsFile),
        $.get(cardCrisisFile),
        $.get(cardFormsFile),
        $.get(footerFile),
    ).done(function(
        headerTemplate, 
        searchTemplate, 
        navTemplate, 
        loginButtonFile, 
        mainContentTemplate,
        emptyContentTemplate, 
        carousellTemplate, 
        cardTemplate, 
        cardEventsTemplate, 
        cardImportantTemplate,
        cardContactsTemplate,
        cardCrisisTemplate,
        cardFormsTemplate,
        footerTemplate
    ) {
        Handlebars.registerPartial('header', headerTemplate[0]);
        Handlebars.registerPartial('search', searchTemplate[0]);
        Handlebars.registerPartial('nav', navTemplate[0]);
        Handlebars.registerPartial('login_button', loginButtonFile[0]);
        Handlebars.registerPartial('main_content', mainContentTemplate[0]);
        Handlebars.registerPartial('empty_content', emptyContentTemplate[0]);
        Handlebars.registerPartial('carousell', carousellTemplate[0]);
        Handlebars.registerPartial('card', cardTemplate[0]);
        Handlebars.registerPartial('card_events', cardEventsTemplate[0]);
        Handlebars.registerPartial('card_important', cardImportantTemplate[0]);
        Handlebars.registerPartial('card_contacts', cardContactsTemplate[0]);
        Handlebars.registerPartial('card_crisis', cardCrisisTemplate[0]);
        Handlebars.registerPartial('card_forms', cardFormsTemplate[0]);
        Handlebars.registerPartial('footer', footerTemplate[0]);

        var compiledMainTemplate = Handlebars.compile(mainTemplate);

        var finalHtml = compiledMainTemplate();
        $(target).html(finalHtml);

    })
});