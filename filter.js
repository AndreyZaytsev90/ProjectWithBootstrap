const app = angular.module('app-filter', [])

app.controller('filterCTRL', function ($scope) {
    console.log('filterCTRL')
    $scope.str = '2746669'
})

app.filter('peopleFilter', function () {
    return function (str) {
        const arrayNum = str.split('').map(x => +x);
        console.log(arrayNum);
        const number = '1'
        console.log(typeof arrayNum[0])
        if (arrayNum.length === 6 || arrayNum[1] >= 5) {
            return `~ ${arrayNum[0]}${arrayNum[1]}${arrayNum[2]} тыс. `
        } else if (arrayNum.length === 6 || arrayNum[3]>= 5) {
            `~ ${arrayNum[0]}${arrayNum[1]}${arrayNum[2]+1} тыс. `
        }

        if (arrayNum.length === 7 || arrayNum[1] >= 5) {
            return `~ ${arrayNum[0]},${arrayNum[1]}${arrayNum[2]} млн. `
        }

    }
})