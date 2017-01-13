import { ReactiveVar } from 'meteor/reactive-var';
import { ReactiveDict } from 'meteor/reactive-dict';
import { Template } from 'meteor/templating';
import { FlowRouter } from 'meteor/kadira:flow-router';
import { TAPi18n } from 'meteor/tap:i18n';
import { T9n } from 'meteor/softwarerero:accounts-t9n';
import { _ } from 'meteor/underscore';

import './body.html';

Template.App_body.onCreated(function appBodyOnCreated() {
    this.subscribe('lists.public');
    this.subscribe('lists.private');

    this.state = new ReactiveDict();
    this.state.setDefault({
        menuOpen: false,
        userMenuOpen: false,
    });
});


Template.App_body.helpers({
    languages() {
        return _.keys(TAPi18n.getLanguages());
    },
    isActiveLanguage(language) {
        return (TAPi18n.getLanguage() === language);
    },
});