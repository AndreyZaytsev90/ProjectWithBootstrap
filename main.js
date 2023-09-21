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
app.directive('func', function () {
    return {
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

/*------------------------------Фильтры----------------------------------*/

app.controller('mainCtrl', function ($scope) {
    $scope.money1 = '$200'
    $scope.money2 = '200$'
    $scope.money3 = '200'
})
app.filter('filterMoney', function () {
    return function (str) {
        let firstChar = str.slice(0, 1)
        let lastChar = str.slice(-1)
        if (firstChar === "$") {
            return str
        } else if (lastChar === "$") {
            return "$" + str.slice(0, str.length - 1)
        }
        return "$" + str
    }
})
/*-----------------------------------------------------------------------*/

app.directive('fooBar', function () {
    return {
        restrict: 'EAС',
        link: function () {
            console.log('fooBar')
        }
    }
})
/*-----------------------------------------------------------------------*/

app.directive('funcBar', function ($templateCache) {
    const myBookmarks = [
        {id: 1, name: 'AngularJS'},
        {id: 2, name: 'JavaScript'},
        {id: 2, name: 'React'},
    ]

    return {
        restrict: 'E',
        template: '<div ng-repeat="myBooks in bookmarks" class="text-warning">{{myBooks.name}}</div>',
        link: function (scope, element, attrs) {
            console.log('funcBar')
            /*scope.name = 'Andrey'*/
            scope.bookmarks = myBookmarks
            console.log($templateCache)
        },
    }
})

/*-----------------------------------------------------------------------*/

app.controller('transcludeD', function ($scope) {
    $scope.myName = 'Andrey'
})
app.directive('newBar', function () {
    return {
        restrict: 'E',
        transclude: true,
        template: 'This is my super directive <span ng-transclude></span>',
        link: function (scope, element, attrs, ctrl, transclude) {
            console.log('This is my ditective')
            transclude(scope, function (clone, scope){
                console.log('!', clone, scope)
                element.append(clone)
            })
        }
    }
})

/*-----------------------------------------------------------------------*/



app.directive('newTeg', function (){
    return {
        restrict: 'E',
        templateUrl: 'element.html',
        link: function (scope, element, attrs) {
            console.log('directive')
        }
    }
})


/*-----------------------------------------------------------------------*/

app.run(function ($templateCache) {
    $templateCache.put('element.html', '<div ng-repeat="myBooks in bookmarks" class="shadow p-3 mb-5 bg-light rounded">{{myBooks.name}}</div>')
})





