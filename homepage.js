const app = angular.module('app-homepage', ['ngRoute'])

app.config(function ($routeProvider) {
    $routeProvider
        .when('/', {
            /*template: '<h1>This is my homepage</h1>',*/
            templateUrl: 'homepage.html',
            controller: 'homeCtrl',
            controllerAs: 'home'
        })
        .when('/posts', {
            /*template: '<h1>This is posts for my site</h1>',*/
            templateUrl: 'posts.html',
            controller: 'postsCtrl',
        })
        .when('/posts/:postId', {
            templateUrl: 'post.html',
            controller: 'postCtrl'
        })
        .otherwise({
            template: '404 no such page'
        })
})

app.controller('homeCtrl', function ($scope) {
    console.log("HomeController")
    $scope.model = {
        message: "Hello page!"
    }
})
app.controller('postsCtrl', function ($scope, postsFactory) {
    console.log('postsCtrl');
    console.log('factory', postsFactory)
    $scope.posts = postsFactory
});
app.controller('postCtrl', function ($scope, $routeParams, postsFactory) {
    /*console.log($routeParams.postId)*/
    let postId = Number($routeParams.postId)
    $scope.myPost = _.find(postsFactory, {id: postId});
})

app.factory('postsFactory', function () {
    return [
        {
            id: 1,
            name: 'Why AngularJS is good?'
        },
        {
            id: 2,
            name: 'I love AngularJS'
        },
        {
            id: 3,
            name: 'Is AngularJS  easy to learn?'
        }
    ];
})