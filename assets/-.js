/* global angular*/


angular.module('myApp', ['ngRoute', 'ngAnimate']).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/', {templateUrl: 'views/main.html', controller: 'showCtrl'});
  $routeProvider.when('/:code', {templateUrl: 'views/alt.html', controller: 'altCtrl'});
  $routeProvider.when('/recepies', {redirectTo: '/'});
  $routeProvider.otherwise({redirectTo: '/'});
}])
.factory('Data', function () {
    return [{
        id: "0",
        hl: "Питки",
        img: "assets/img/pitki.jpg",
        prod: "assets/img/pitki.jpg",
        desc: "Бързи питки със масло и сиренце.",
        rec: ["2 ч.ч. Брашно", "1 с.л. захар"],
        algr: "Елементарен примерен текст, използван в печатарската и типографската индустрия. Lorem Ipsum е индустриален стандарт от около 1500 година, когато неизвестен печатар взема няколко печатарски букви и ги разбърква, за да напечата с тях книга с примерни шрифтове.",
        cat: "soleno"
    },{
        id: "1",
        hl: "Негърче",
        img: "assets/img/negyrche.jpg",
        prod: "assets/img/negyrche.jpg",
        desc: "Сладкиш на расистка основа.",
        rec: ["2 ч.ч. Брашно", "1 с.л. захар"],
        algr: "Елементарен примерен текст, използван в печатарската и типографската индустрия. Lorem Ipsum е индустриален стандарт от около 1500 година, когато неизвестен печатар взема няколко печатарски букви и ги разбърква, за да напечата с тях книга с примерни шрифтове.",
        cat: "sladko"
    },{
        id: "2",
        hl: "Кекс",
        img: "assets/img/keks.jpg",
        prod: "assets/img/keks.jpg",
        desc: "Оригиналната рецепта за кекс.",
        rec: ["2 ч.ч. Брашно", "1 с.л. захар"],
        algr: "Елементарен примерен текст, използван в печатарската и типографската индустрия. Lorem Ipsum е индустриален стандарт от около 1500 година, когато неизвестен печатар взема няколко печатарски букви и ги разбърква, за да напечата с тях книга с примерни шрифтове.",
        cat: "sladko"
    },{
        id: "3",
        hl: "Рошла",
        img: "assets/img/roshla.jpg",
        prod: "assets/img/roshla.jpg",
        desc: "Рошав сладкиш.",
        rec: ["2 ч.ч. Брашно", "1 с.л. захар"],
        algr: "Елементарен примерен текст, използван в печатарската и типографската индустрия. Lorem Ipsum е индустриален стандарт от около 1500 година, когато неизвестен печатар взема няколко печатарски букви и ги разбърква, за да напечата с тях книга с примерни шрифтове.",
        cat: "sladko"
    },{
        id: "4",
        hl: "Фунийки",
        img: "assets/img/funiiki.jpg",
        prod: "assets/img/funiiki.jpg",
        desc: "Фуниики пълни с вкусен крем.",
        rec: ["2 ч.ч. Брашно", "1 с.л. захар"],
        algr: "Елементарен примерен текст, използван в печатарската и типографската индустрия. Lorem Ipsum е индустриален стандарт от около 1500 година, когато неизвестен печатар взема няколко печатарски букви и ги разбърква, за да напечата с тях книга с примерни шрифтове.",
        cat: "sladko"
    }];
}); 


function showCtrl($scope, Data) {
    $scope.data = Data;
}
function altCtrl($scope, $routeParams, Data) {
    $scope.data = Data;
    $scope.current = $routeParams.code;
}
