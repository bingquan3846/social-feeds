angular.module('starter.filters', []).
    filter('escape', function() {
        return  function(text){
            return String(window.encodeURIComponent(String(text))).replace(/%2F/g, "_");
        }
    });