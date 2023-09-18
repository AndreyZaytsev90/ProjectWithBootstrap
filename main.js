let app = angular.module("app", [])

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

app.controller("third", function ($scope, myFactory) {
    $scope.hello = "Hello world"
    $scope.getMyLaptop = function () {
        return "MacBook M1 pro"
    }
    $scope.setHello = function (text) {
       $scope.hello = text
    }
    $scope.myFactory = myFactory
})

app.factory("myFactory", function () {
    return {
        hello: "hello world",
        getHelloWorld: function () {
            return "hello world"
        }
    }
})

