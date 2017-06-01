  (function () {
    angular.module('LunchCheck', [])
     .controller('LunchCheckController', LunchCheckController);

     LunchCheckController.$inject = ['$scope'];

     function LunchCheckController($scope) {
       $scope.lunchItems = "";
       $scope.message = "";
       $scope.fontColor = {};
       $scope.borderColor = {};

       $scope.displayResult = function() {
         if ($scope.lunchItems == "") {
           $scope.message = "Please enter data first";
           $scope.fontColor = { "color": "red" };
           $scope.borderColor = { "border-color": "red" };

         } else {
           $scope.fontColor = { "color": "green"};
           $scope.borderColor = { "border-color": "green"};
           
           var res = $scope.lunchItems.split(",");
           res = res.filter(function(str){
             return /\S/.test(str);
           });

           console.log(res);
           if (res.length <= 3) {
             $scope.message = "Enjoy!";
           } else {
             $scope.message = "Too much!";
            }
        }
       }

     }

  })();
