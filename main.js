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
/*-----------------------------------------------------------------------*/

app.controller("myBooks", function ($scope) {
    $scope.snowCSSbook = function () {
        console.log("This is CSS book")
    }
    $scope.snowHTMLbook = function () {
        console.log("This is HTML book")
    }
})
app.controller("HTMLbook", function ($scope) {
})
app.controller("CSSbook", function ($scope) {
})
/*-----------------------------------------------------------------------*/

app.controller("mainController", function () {
    this.myLesson = "Lesson"
})

app.controller("firstController", function () {

})

app.controller("secondController", function ($scope) {
    this.addLesson = () => console.log("Add new lesson")
    $scope.secondCtrl = this
})

/*----------------------------------------------------------*/

/*
app.directive('func', function (){
    return function (scope, element, attrs) {
        console.log("This is my first directive")
    }
})*/
app.directive('func', function (){
    return{
        link: function (scope, element, attrs) {
           /* console.log("This is my first directive")
            console.log('scope', scope)
            console.log('element', element)
            console.log('attrs', attrs)
            element.text('This is my magic directive')*/
            element.on('click', function () {
                console.log('click')
                element.text() === "Func" ? element.text('Bar') : element.text('Func')
            })
    }
    }
})
