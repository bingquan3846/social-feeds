angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope, $window, HandleTabs) {
        HandleTabs.toggle($window.localStorage);
 })

.controller('ChatsCtrl', function($scope, Chats) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('FacebookCtrl', function($scope, Chats) {
    $scope.chats = Chats.all();
    $scope.remove = function(chat) {
        Chats.remove(chat);
    };
})

.controller('FacebookDetailCtrl', function($scope, $stateParams, Chats) {
    $scope.chat = Chats.get($stateParams.chatId);
})

.controller('TumblrCtrl', function($scope, $window,  TumblrFeeds) {
    var tag = $window.localStorage['tag'] ? $window.localStorage['tag'] : 'dog';
    TumblrFeeds.getFeedsFromTag(tag).success(function(data){
        $scope.feeds = data.response;
    });

    $scope.doRefresh = function(){

        TumblrFeeds.getFeedsFromTag(tag)
            .success(function(data){
                $scope.feeds = data.response;
            })
            .finally(function(){
                $scope.$broadcast('scroll.refreshComplete');
            });
    }

})
.controller('InstagramCtrl', function($scope, $window,  InstagramFeeds) {
    var tag = $window.localStorage['tag'] ? $window.localStorage['tag'] : 'dog';
    InstagramFeeds.getFeedsFromTag(tag).success(function(data){
        $scope.feeds = data.response;
        console.log($scope.feeds);
    });

})
.controller('AccountCtrl', function($scope, $window, HandleTabs) {

    var facebook = $window.localStorage['facebook'] == '1' ? true : false;
    var tumblr = $window.localStorage['tumblr'] == '1' ? true : false;
    var instagram = $window.localStorage['instagram'] == '1' ? true : false;
    $scope.settings = {
        facebook: facebook,
        tumblr: tumblr,
        instagram : instagram,
        tag  : $window.localStorage['tag'] ? $window.localStorage['tag'] : ''
    };

    HandleTabs.toggle($scope.settings);
    $scope.onChange = function(){
        $window.localStorage['facebook'] =  $scope.settings.facebook ? 1 : 0;
        $window.localStorage['tumblr'] =  $scope.settings.tumblr ? 1 : 0;
        $window.localStorage['instagram'] =  $scope.settings.instagram ? 1 : 0;
        $window.localStorage['tag'] =  $scope.settings.tag;
        HandleTabs.toggle($scope.settings);

    };
});
