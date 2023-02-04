const app = angular.module('haiomet', ['angularLazyImg']);

app.controller('haiometController', function ($scope, $http, $window) {
    $scope.Math = window.Math;

    $scope.SET_SIZE = 10;

    $scope.round = 0;
    $scope.maxRounds = 0;
    $scope.currentSet = [];
    $scope.progress = {};

    $scope.selectAnswer = function (clickedPerson, answer) {
        let correct = (answer === !!clickedPerson.alive);

        if (answer === !!clickedPerson.alive) {
            $scope.progress.totalCorrect += 1
        } else {
            $scope.progress.totalWrong += 1;
        }

        $scope.progress.correctWidth = `${$scope.progress.totalCorrect / $scope.progress.total * 100}%`;
        $scope.progress.wrongWidth = `${$scope.progress.totalWrong / $scope.progress.total * 100}%`;

        clickedPerson.correct = correct;
        console.log($scope.progress);
    };

    $scope.styleForAnswer = function (person) {
        if (person.correct === true) return 'img img-correct';
        if (person.correct === false) return 'img img-wrong';
        return 'img';
    };

    $scope.prepareData = function (data) {
        for (let i = 0; i < data.length; i++) {
            data[i]['correct'] = -1;
        }
        return data;
    };

    $scope.initData = function () {
        $scope.ALL_DATA = $scope.prepareData(DATA);
        $scope.maxRounds = Math.ceil($scope.ALL_DATA.length / $scope.SET_SIZE);
    };

    $scope.initRound = function () {
        $scope.currentSet = $scope.ALL_DATA.slice($scope.round * $scope.SET_SIZE, $scope.round * $scope.SET_SIZE + $scope.SET_SIZE);
        $scope.progress = {
            total: $scope.currentSet.length,
            totalCorrect: 0,
            totalWrong: 0,
            correctWidth: "0%",
            wrongWidth: "0%",
        };
        console.log($scope.progress);
    };

    $scope.nextRound = function () {
        $window.scrollTo(0, 0);
        $scope.round = Math.floor(Math.random() * $scope.maxRounds) + 1;
        $scope.initRound();
    };

    $scope.initData();
    $scope.initRound();

});



