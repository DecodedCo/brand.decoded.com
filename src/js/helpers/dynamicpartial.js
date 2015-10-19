/*
 * Dynamically load a partial by it's name
 * takes variables as input where handlebars only takes strings
 * http://stackoverflow.com/questions/13396543/handlebars-dynamic-partial
 */

function partial (template, context, opts) {
    template = template.replace(/\//g, '_');
    var f = Handlebars.partials[template];
    if (!f) {
        return 'Partial not loaded';
    }

    return new Handlebars.SafeString(f(context));
}

Handlebars.registerHelper('partial', partial);
