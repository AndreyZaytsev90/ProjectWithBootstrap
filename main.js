let app = angular.module("app", ['ngMockE2E', 'ngRoute'])

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
        /*console.log("This is CSS book")*/
    }
    $scope.snowHTMLbook = function () {
        /*console.log("This is HTML book")*/
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
    this.addLesson = () => /*console.log("Add new lesson")*/
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
                /*console.log('click')*/
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
            /*console.log('fooBar')*/
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
            /* console.log('funcBar')*/
            /*scope.name = 'Andrey'*/
            scope.bookmarks = myBookmarks
            /*console.log($templateCache)*/
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
            /*console.log('This is my ditective')*/
            transclude(scope, function (clone, scope) {
                /*console.log('!', clone, scope)*/
                element.append(clone)
            })
        }
    }
})

/*-----------------------------------------------------------------------*/


app.directive('newTeg', function () {
    return {
        restrict: 'E',
        templateUrl: 'element.html',
        link: function (scope, element, attrs) {
            /* console.log('directive')*/
        }
    }
})


/*-----------------------------------------------------------------------*/

app.run(function ($templateCache) {
    $templateCache.put('element.html', '<div ng-repeat="myBooks in bookmarks" class="shadow p-3 mb-5 bg-light rounded">{{myBooks.name}}</div>')
})


/*-----------------------------------------------------------------------*/

app.controller('newCtrl', function ($scope) {
    /*console.log('ctrl scope', $scope)*/
    $scope.arr = []
    $scope.hello = 'Hello'

    $scope.posts = [
        {id: 1, name: 'post1'},
        {id: 2, name: 'post2'}
    ]

    $scope.getPosts = function () {
        return $scope.posts
    }
})

app.directive('post', function () {
    return {
        scope: false,
        template: '<span ng-repeat="post in getPosts()">{{post.name}}</span>',
        restrict: 'E',
        link: function (scope, element, attrs) {
            /*console.log('dir scope', scope)*/
            scope.hello = 'Hello Andrey'
        }
    }
})
/*-----------------------------------------------------------------------*/

app.controller('bookCtrl', function ($scope) {
    $scope.name = 'AngularJS'
})

app.directive('bookDir', function () {
    return {
        restrict: 'E',
        scope: true,
        template: '<div>This is directive book: {{name}}<input type="test" ng-model="name"></div>',
        link: function (scope, element, attrs) {
            /*console.log(`This is directive book: ${scope.name}`)*/
        }
    }
})

/*-----------------------------------------------------------------------*/

app.controller('Ctrl1', function ($scope) {
    $scope.name = 'Olga'
    $scope.color = 'Red'

    $scope.reverse = function () {
        $scope.name = $scope.name.split('').reverse().join('')
    }

})

app.directive('isolatedScope', function () {
    return {
        restrict: 'E',
        scope: {
            name: '@',
            color: '=',
            reverse: '&'
        },
        template: '<div>My wife name is {{name}}<input type="text" ng-model="name"></div>' +
            '<div>My color is {{color}} <input type="text" ng-model="color"></div>' +
            '<button ng-click="reverse()">Reverse Name</button>',
        link: function (scope, element, attrs) {
            /*console.log('isolatedScope')*/
        }
    }
})
/*-----------------------------------------------------------------------------------------------------*/

app.directive('wrapIn', function ($templateCache) {
    return {
        transclude: 'element',
        link: function (scope, element, attrs, ctrl, transclude) {
            const template = $templateCache.get(attrs.wrapIn)
            const templateElement = angular.element(template)
            /*console.log('wrapIn', templateElement)*/
            transclude(scope, function (clone) {
                /* console.log(clone)*/
                element.after(templateElement.append(clone))
            })
        }
    }
})
/*--------------------------------------------------------------------------------------------------*/
app.run(($httpBackend) => {
    /*console.log('RUN APP')*/
    const books = [
        {name: 'AngularJS'},
        {name: 'EmberJS'},
        {name: 'ReactJS'}
    ];
    $httpBackend.whenGET('http://localhost:3001/books').respond(200, books)
    $httpBackend.whenPOST('http://localhost:3001/books').respond(function (method, url, data) {
        /* console.log('method', method);
         console.log('url', url);
         console.log('data', data);*/
        const result = JSON.parse(data);
        books.push(result);
        return [200, result];
    })
})
app.controller('httpCtrl', function ($http, $scope) {
    $http.get("http://localhost:3001/books")
        .then(function (result) {
            /*console.log('success', result)*/
            $scope.books = result.data
        })
        .then(function (result) {
            /*console.log('error', result)*/
        })
    $scope.addBook = (book) => {
        /*console.log(book)*/
        $http.post("http://localhost:3001/books", book)
            .then((result) => {
                $scope.books.push(book)
                $scope.book = null
                /*console.log("Book success added")*/
            })
            .then((result) => {
                console.log("Error added")
            })
    }
})

/*---------------------------------------------------------------------------------------------------*/

app.directive('uiSource', function () {
    return {
        compile: function (elem) {
            /*console.log(elem);*/
            /*const escape = function (content) {
                return content.replace('/\</g', '&lt;')
                    .replace('/\>/g', '&gt;');
            };
            const pre = angular.element('<pre class="prettyprint"></pre>');
            const pretty = prettyPrintOne(escape(elem.html()));
            /!*console.log(pretty);*!/
            pre.append(pretty);
            elem.replaceWith(pre);*/
        }

    }
})

/*-----------------------------------------------------------------------------*/



















