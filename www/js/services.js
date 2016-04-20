angular.module('starter.services', [])

.factory('Chats', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var chats = [{
    id: 0,
    name: 'Ben Sparrow',
    lastText: 'You on your way?',
    face: 'img/ben.png'
  }, {
    id: 1,
    name: 'Max Lynx',
    lastText: 'Hey, it\'s me',
    face: 'img/max.png'
  }, {
    id: 2,
    name: 'Adam Bradleyson',
    lastText: 'I should buy a boat',
    face: 'img/adam.jpg'
  }, {
    id: 3,
    name: 'Perry Governor',
    lastText: 'Look at my mukluks!',
    face: 'img/perry.png'
  }, {
    id: 4,
    name: 'Mike Harrington',
    lastText: 'This is wicked good ice cream.',
    face: 'img/mike.png'
  }];

  return {
    all: function() {
      return chats;
    },
    remove: function(chat) {
      chats.splice(chats.indexOf(chat), 1);
    },
    get: function(chatId) {
      for (var i = 0; i < chats.length; i++) {
        if (chats[i].id === parseInt(chatId)) {
          return chats[i];
        }
      }
      return null;
    }
  };
})
.factory('TumblrFeeds', function ($http) {
  return{
    getFeedsFromTag : function(tag) {
      return $http({
        url: 'https://api.tumblr.com/v2/tagged?tag='+tag+'&api_key=fuiKNFp9vQFvjLNvx4sUwti4Yb5yGutBN4Xh10LXZhhRKjWlV4',
        method: 'GET'
      })
    }
  }
})
.factory('HandleTabs', function (){
   return {
       toggle : function($settings){
           var tabs = angular.element(document.querySelectorAll( '.tab-nav.tabs a' ));

           if($settings.facebook){
               angular.element(tabs[1]).css('display', 'block');
           }else{
               angular.element(tabs[1]).css('display', 'none');
           }

           if($settings.tumblr){
               angular.element(tabs[2]).css('display', 'block');
           }else{
               angular.element(tabs[2]).css('display', 'none');
           }
           if($settings.instagram){
               angular.element(tabs[3]).css('display', 'block');
           }else{
               angular.element(tabs[3]).css('display', 'none');
           }
       }
   }
});

