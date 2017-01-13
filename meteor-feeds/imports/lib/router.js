import { FlowRouter } from 'meteor/kadira:flow-router';
import { BlazeLayout } from 'meteor/kadira:blaze-layout';

import '../ui/body.js';
import '../pages/homepage.js';

FlowRouter.route('/blog/:postId', {
    action: function(params, queryParams) {
        console.log("Yeah! We are on the post:", params.postId);
    }
});


FlowRouter.route('/', {
    action: function(params, queryParams) {
        BlazeLayout.render('App_body', { main: 'app_Homepage' });
    }
});
