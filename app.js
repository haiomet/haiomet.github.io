var app = angular.module('haiomet', ['angularLazyImg']);

function shuffle(a) {
    var j, x, i;
    for (i = a.length; i; i--) {
        j = Math.floor(Math.random() * i);
        x = a[i - 1];
        a[i - 1] = a[j];
        a[j] = x;
    }
}


app.controller('haiometController', function ($scope, $http, $window) {
    $scope.Math = window.Math;

    $scope.SET_SIZE = 10;

    $scope.round = 0;
    $scope.maxRounds = 0;
    $scope.sets = [];

    $scope.selectAnswer = function (i, answer) {
        var previousCorrect = $scope.ALL_DATA[i].correct;
        var correct = ($scope.ALL_DATA[i].alive === answer);

        if (previousCorrect !== correct) {
            if (previousCorrect === -1) {
                if (correct) $scope.progress.totalCorrect += 1;
                else $scope.progress.totalWrong += 1;
            }
            else {
                if (correct) {
                    $scope.progress.totalCorrect += 1;
                    $scope.progress.totalWrong -= 1;
                }
                else {
                    $scope.progress.totalCorrect -= 1;
                    $scope.progress.totalWrong += 1;
                }
            }
        }
        $scope.ALL_DATA[i].correct = correct;
    };

    $scope.styleForAnswer = function (i) {
        if ($scope.ALL_DATA[i].correct === true) return 'img img-correct';
        if ($scope.ALL_DATA[i].correct === false) return 'img img-wrong';
        return 'img';
    };

    $scope.prepareData = function (data) {
        for (var i = 0; i < data.length; i++) {
            data[i]['correct'] = -1;

            if (data[i]['alive'].toLowerCase && data[i]['alive'].toLowerCase() === 'true') {
                data[i]['alive'] = true;
            }
            if (data[i]['alive'].toLowerCase && data[i]['alive'].toLowerCase() === 'false') {
                data[i]['alive'] = false;
            }
        }
        return data;
    };

    $scope.initData = function () {
        $scope.ALL_DATA = $scope.prepareData(DATA);
        // shuffle($scope.ALL_DATA);

        for (var i = 0; i < Math.ceil($scope.ALL_DATA.length / $scope.SET_SIZE); i++) {
            var set = $scope.ALL_DATA.slice(i * $scope.SET_SIZE, (i + 1) * $scope.SET_SIZE);
            $scope.sets.push(set);
        }
        $scope.maxRounds = $scope.sets.length;
    };

    $scope.initRound = function () {
        var set = $scope.ALL_DATA.slice($scope.round * $scope.SET_SIZE, ($scope.round + 1) * $scope.SET_SIZE);
        $scope.progress = {
            total: set.length,
            totalCorrect: 0,
            totalWrong: 0
        };
    };

    $scope.nextRound = function () {
        $window.scrollTo(0, 0);
        $scope.round = ($scope.round != $scope.maxRounds - 1) ? ($scope.round + 1) : $scope.round;
        // $scope.initRound();
    };

    $scope.initData();
    $scope.initRound();

});



