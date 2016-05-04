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
    getFeedsFromTag : function(tag, before) {
      if(before){
          url = 'https://api.tumblr.com/v2/tagged?tag=' + tag + '&before=' + before + '&api_key=fuiKNFp9vQFvjLNvx4sUwti4Yb5yGutBN4Xh10LXZhhRKjWlV4';
      }else{
          url = 'https://api.tumblr.com/v2/tagged?tag=' + tag + '&api_key=fuiKNFp9vQFvjLNvx4sUwti4Yb5yGutBN4Xh10LXZhhRKjWlV4';
      }

      return $http({
        url: url,
        method: 'GET'
      })
    }
  }
})
.factory('InstagramFeeds', function ($http) {
  return{
    getFeedsFromTag : function(tag) {
      return $http({
        url: 'https://api.instagram.com/v1/tags/' + tag + '/media/recent?access_token=1475780215.1677ed0.c266e65599b9469d8803c3cb6ee15c49',
        method: 'GET'
      })
    },
    getFeedById :function(id){
        return $http({
            url: 'https://api.instagram.com/v1/media/'+ id +'?access_token=1475780215.1677ed0.c266e65599b9469d8803c3cb6ee15c49',
            method: 'GET'
        })
    }
  }
})
.factory('HandleTabs', function (){
   return {
       toggle : function($settings){
           var tabs = angular.element(document.querySelectorAll( '.tab-nav.tabs a' ));

           if(Number($settings.tumblr) ){
               angular.element(tabs[1]).css('display', 'block');
           }else{
               angular.element(tabs[1]).css('display', 'none');
           }

           if(Number($settings.instagram)){
               angular.element(tabs[2]).css('display', 'block');
           }else{
               angular.element(tabs[2]).css('display', 'none');
           }
       }
   }
});

