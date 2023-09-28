const app = angular.module('app-filter', [])

app.controller('filterCTRL', function ($scope) {
    console.log('filterCTRL')
    $scope.str = ''
})

app.filter('peopleFilter', function () {
    return function (str) {
        const arrayNum = str.split('').map(x => +x);
        console.log(arrayNum);
        let a = arrayNum[1]
        ++a
        let b = arrayNum[0]
        ++b
        let c = arrayNum[2]
        ++c

        if (arrayNum.length === 1) {
            return `${arrayNum[0]}`
        }
        /*------------------------------------------------------------------------------------------------------*/
        if (arrayNum.length === 2) {
            return `${arrayNum[0]}${arrayNum[1]}`
        }
        /*------------------------------------------------------------------------------------------------------*/
        if (arrayNum.length === 3) {
            return `${arrayNum[0]}${arrayNum[1]}${arrayNum[2]}`
        }
        /*------------------------------------------------------------------------------------------------------*/
        if (arrayNum.length === 4 && arrayNum[2] < 5) {
            return `~${arrayNum[0]},${arrayNum[1]} тыс.`
        }

        if (arrayNum.length === 4 && arrayNum[1] < 9 && arrayNum[2] >= 5) {
            return `~${arrayNum[0]},${a} тыс.`
        }

        if (arrayNum.length === 4 && arrayNum[1] === 9 && arrayNum[2] >= 5) {
            return `~${b} тыс.`
        }

        /*------------------------------------------------------------------------------------------------------*/        
        if (arrayNum.length === 5 && arrayNum[2] < 5) {
            return `~${arrayNum[0]}${arrayNum[1]} тыс.`
        }
        if (arrayNum.length === 5 && arrayNum[1] < 9 && arrayNum[2] >= 5) {
            return `~${arrayNum[0]}${a} тыс.`
        }
        if (arrayNum.length === 5 && arrayNum[1] === 9 && arrayNum[2] >= 5) {
            return `~${b}${0} тыс.`
        }
        /*-----------------------------------------------------------------------------------------------------*/

        if (arrayNum.length === 6 && arrayNum[3] >= 5 && arrayNum[0] === 9 && arrayNum[1] === 9 && arrayNum[2] === 9 ) {
            return `~${1} млн.`
        }
        
        if (arrayNum.length === 6 && arrayNum[2] < 5) {
            return `~${arrayNum[0]}${arrayNum[1]}${arrayNum[2]} тыс.`
        }
        if (arrayNum.length === 6 && arrayNum[1] < 9 && arrayNum[2] >= 5) {
            return `~${arrayNum[0]}${arrayNum[1]}${arrayNum[2]} тыс.`
        }
        if (arrayNum.length === 6 && 9 >= arrayNum[3] >= 5) {
            return `~${arrayNum[0]}${arrayNum[1]}${c} тыс.`
        }
        if (arrayNum.length === 6 && arrayNum[1] === 9 && arrayNum[2] >= 5) {
            return `~${b}${0} тыс.`
        }
        /*-----поправить фильтр с arrayNum.length === 6*/

        
        if (arrayNum.length === 7) {
            return `~${arrayNum[0]},${arrayNum[1]}${arrayNum[2]} млн. `
        }
        if (arrayNum.length === 8) {
            return `~${arrayNum[0]}${arrayNum[1]},${arrayNum[2]} млн. `
        }
        if (arrayNum.length === 9) {
            return `~${arrayNum[0]}${arrayNum[1]}${arrayNum[2]} млн. `
        }
        /*-----поправить фильтр с arrayNum.length === 7,8,9*/
    }
})