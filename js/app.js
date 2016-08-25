var baseApp = angular.module('ChromeApp', [])

var parseQueryString = function() {
    var str = window.location.search;
    var objURL = {};

    str.replace(
        new RegExp( "([^?=&]+)(=([^&]*))?", "g" ),
        function( $0, $1, $2, $3 ){
            objURL[ $1 ] = $3;
        }
    );
    return objURL;
};

baseApp.controller('ImportViewCtrl', ['$scope', '$sce', '$http', '$location',
function ($scope, $sce, $http, $location) {

    $scope.candidate;
    $scope.companies;
    $scope.activeCompany;
    $scope.authenticated = false;
    $scope.enabledPositions = 0;

    $scope.signin = function (email, password) {
        $http.post("https://breezy.hr/api/signin", {
            'email': email,
            'password': password
        })
        .success(function (data) {
            chrome.extension.getBackgroundPage().auth(function () {
                $scope.companies = angular.copy(chrome.extension.getBackgroundPage().companies);
                $scope.authenticated = angular.copy(chrome.extension.getBackgroundPage().authenticated);
            });
            delete $scope.signinProblem;
        })
        .error(function () {
            $scope.signinProblem = true;
        });
    };

    $scope.toggle = function (position) {
        position.enabled = !position.enabled;
        if(position.enabled) {
            $scope.enabledPositions++;
        } else {
            $scope.enabledPositions--;
        }
    };

    $scope.startImport = function () {
        $scope.import = true;
    };

    $scope.selectCompany = function (company) {
        $scope.activeCompany = company;
    };

    $scope.finishImport = function () {
        var success = 0;
        var failure = 0;
        $scope.importing = true;
        for(var i in $scope.activeCompany.positions) {
            var position = $scope.activeCompany.positions[i];
            if(!position.enabled) {
                continue;
            }
            $http.post("https://breezy.hr/api/company/" + position.company_id + "/position/" + position._id + "/candidates", $scope.candidate)
            .success(function (data) {
                success++;
            })
            .error(function () {
                failure++;
            });
        }
        setTimeout(function () {
            $scope.complete = true;
            setTimeout(function () {
                window.close();
            }, 1500);
        }, 1500);
    };

    var getCandidate = function (callback) {
        chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
            chrome.tabs.sendMessage(tabs[0].id, { 'type': "gimmie" }, function (candidate) {
                return callback(candidate);
            });
        });
    };

    var initialize = function (callback) {
        $scope.authenticated = angular.copy(chrome.extension.getBackgroundPage().authenticated);
        $scope.companies = angular.copy(chrome.extension.getBackgroundPage().companies);
        getCandidate(function (candidate) {
            $scope.$apply(function () {
                if(!candidate) {
                    console.log('Not found!');
                    $scope.notfound = true;
                    return;
                }
                console.log('Candidate: ' + candidate.name);
                $scope.notfound = false;
                $scope.candidate = candidate;
            });
        });
        if(!$scope.companies) {
            return;
        }
        var keys = Object.keys($scope.companies);
        if(keys.length == 1) {
            $scope.activeCompany = $scope.companies[keys[0]];
        }
        callback();
    };

    initialize(function () {});
}]);