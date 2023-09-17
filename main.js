app = angular.module("app", [])

app.controller("myCtrl", function ($scope) {
    $scope.hello = 55
    $scope.laptop = "MacBook M1 pro"
})

app.controller("first", function ($scope, myFactory) {
    $scope.myFactory = myFactory
    $scope.oneHello = "hello world"
})
app.controller("second", function ($scope, myFactory) {
    $scope.myFactory = myFactory
    $scope.twoHello = "hello world"
})

app.factory("myFactory", function () {
    return {
        hello: "hello world"
    }
})