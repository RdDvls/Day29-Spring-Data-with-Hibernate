angular.module('TIYAngularApp', [])
   .controller('SampleController', function($scope, $http) {
         $scope.name = "JavaScript Master Guru";
         $scope.getAllGames = function() {
                    console.log("About to go get me some data!");
                    $http.get("http://localhost:8080/games.json")
                        .then(
                            function successCallback(response) {
                                console.log(response.data);
                                console.log("Adding data to scope");
                                $scope.games = response.data;
                            },
                            function errorCallback(response) {
                                console.log("Unable to get data");
                            });
                };
                $scope.toggleGame = function(gameID) {
                    console.log("About to toggle game with ID " + gameID);

                    $http.get("/toggleGame.json?gameID=" + gameID)
                        .then(
                            function success(response) {
                                console.log(response.data);
                                console.log("Game toggled");
                                $scope.games = {};
                                alert("About to refresh the games on the scope")
                                $scope.games = response.data;
                            },
                            function error(response) {
                                console.log("Unable to toggle game");
                            });
                };
                $scope.addGame = function() {
                    console.log("About to add the following game " + JSON.stringify($scope.newGame));

                    $http.post("/addGame.json", $scope.newGame)
                    .then(
                        function successCallback(response) {
                        console.log(response.data);
                        console.log("Adding data to scope");
                        $scope.games = response.data;
                        },
                        function errorCallback(response) {
                        console.log("Unable to get data");
                        });
                };
                $scope.newGame = {};
            });