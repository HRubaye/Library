var helloApp = angular.module("myApp", []);
helloApp.controller("LibCtrl", function ($scope) {
    $scope.books = [];
    $scope.searchBook = '';
    var storageKey = 'myLab';
    function loadToLocal() {
        $scope.books = JSON.parse(localStorage.getItem(storageKey) || '[]');
    }
    //I'm not sore
    loadToLocal();
    console.log($scope.books);
   
    $scope.addRow = function () {
        $scope.books.push({ 'name': $scope.name, 'author': $scope.author, 'publish': $scope.publish });
        $scope.name = '';
        $scope.author = '';
        $scope.publish = '';
        localStorage.setItem(storageKey, JSON.stringify($scope.books));
    };//end of Add
    //I'm not sore
   
    $scope.removeRow = function (name) {
        var index = -1;
        var bookArr = eval($scope.books);
        for (var i = 0; i < bookArr.length; i++) {
            if (bookArr[i].name === name) {
                index = i;
                break;
            }
        }
        if (index === -1) {
            alert("Something gone wrong");
        }
        $scope.books.splice(index, 1);
        localStorage.setItem(storageKey, JSON.stringify($scope.books));
    };//end of Remove
    
    $scope.rowCount = 3;
});
