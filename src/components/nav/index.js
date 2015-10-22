'use strict';

require('../../js/helpers/jquery.document.ready.js');

// define global d decoded object if not
var d = d || {};
d.nav = {
    // load handlebar templates
    templates: require('../../../public/js/templates'),
    // set defaults
    defaults: {
        app:[
            {
              'type': 'link',
              'label': 'Home',
              'url': '/'
            }
        ],
        style: 'light',
        navElement: '#nav',
        mainElement: 'main'
    },
    // object to hold config
    config: {},

    hasInitialized: false,

    init: function (config) {
        // only init once
        if (d.nav.hasInitialized) {
            return;
        }
        // shortcut variable
        var t = d.nav.templates.src.components.nav.templates;
        // element the nav renders in
        var navElement = document.querySelector(d.nav.defaults.navElement);
        // read config, passed in JS wins over data-attr
        var newConfig = config || JSON.parse(navElement.getAttribute('data-config')) || {};
        d.nav.makeConfig(newConfig);
        // render navElement
        navElement.innerHTML = t.header(d.nav.config);

        // setup context nav
        // var contentWraper = document.createElement('section');
        // var contextNav = document.createElement('nav');
        // contextNav.className = 'nav-context';
        // // element the main app renders in
        // var main = document.querySelector(d.nav.config.mainElement);
        //
        // contentWraper.appendChild(contextNav);
        // contentWraper.appendChild(main);
        //
        // document.body.insertBefore(contentWraper, navElement.nextSibling);

        // document.body.className += document.body.className ? ' has-d-nav' : 'has-d-nav';

        d.nav.hasInitialized = true;
    },

    makeConfig: function (config) {
        // load defaults
        d.nav.config = d.nav.defaults;
        // overwrite values we got
        for (var index in config)  {
            if (config.hasOwnProperty(index)) {
                d.nav.config[index] = config[index];
            }
        }
    }
};

$(function () {
    // set variable dNavInit to false before loading nav.js to wait with init
    // then init in JS with d.nav.iit(config) and pass config object
    if (window.dNavInit === undefined || window.dNavInit === true) {
        d.nav.init();
        console.log('the big d', d);
    }
});
