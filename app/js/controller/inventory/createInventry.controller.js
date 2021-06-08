'use strict';
angular.module('myApp')
    .controller('createInventryController', function ($scope,$rootScope,inventryService,$state) {
        $scope.addItemToInventry=function(data){
          $scope.isSubmit=true;
          if ($scope.form['frmAddInventry'].$valid) {
            $scope.isSubmit=false;
              $rootScope.showLoader=true;
          inventryService.createInventryService(data)
              .then(function (response) {
                 console.log(response)
                     $.growl.notice({ title: "Success", message:'Data created Successfully'}); 
                     $rootScope.showLoader=false;

                      $state.go('inventory');
                    
                 },function (error) {
                    $rootScope.showLoader=false;
               });
          }
          
        }
    });
    
  