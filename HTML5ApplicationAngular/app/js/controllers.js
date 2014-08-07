'use strict';

var exercises = [
            {'id':1,'val':'','ans':2,'correct':false,'text':'enjoying a field trip'},
            {'id':2,'val':'','ans':3,'correct':false,'text':'working on computers'},
            {'id':3,'val':'','ans':4,'correct':false,'text':'taking a test'},
            {'id':4,'val':'','ans':1,'correct':false,'text':'doing a project'},
            {'id':5,'val':'','ans':5,'correct':false,'text':'giving a presentation'},
            {'id':6,'val':'','ans':6,'correct':false,'text':'practicing yoga'}
        ];

var wordMatch = [
            {'id':1,'val':'','ans':'foggy','correct':false,'src':'img/exercise2/1.png','example':true,'title':''},
            {'id':2,'val':'','ans':'raining','correct':false,'src':'img/exercise2/2.png','example':false,'title':''},
            {'id':3,'val':'','ans':'sunny','correct':false,'src':'img/exercise2/3.png','example':false,'title':''},
            {'id':4,'val':'','ans':'cloudy','correct':false,'src':'img/exercise2/4.png','example':false,'title':''},
            {'id':5,'val':'','ans':'windy','correct':false,'src':'img/exercise2/5.png','example':false,'title':''},
            {'id':6,'val':'','ans':'snowing','correct':false,'src':'img/exercise2/6.png','example':false,'title':''}
];

var cssTick = {'background': "url('img/tick_white.png') no-repeat center center #2f9ec8"};
var cssRefresh = {'background': "url('img/refresh_white.png') no-repeat center center #2f9ec8"};

/* Controllers */

angular.module('myApp.controllers', [])

  .controller('Exercise1', ['$scope', function($scope,ExerciceOneValues) {
        function getRotation(){
                    return Math.round(Math.random()*21)-10;
        }
        
        $scope.images = [
            {'src':'img/exercise1/1.png','id':1,'title':'','rotation':{'transform':'rotate('+getRotation()+'deg)'}},
            {'src':'img/exercise1/2.png','id':2,'title':'','rotation':{'transform':'rotate('+getRotation()+'deg)'}},
            {'src':'img/exercise1/3.png','id':3,'title':'','rotation':{'transform':'rotate('+getRotation()+'deg)'}},
            {'src':'img/exercise1/4.png','id':4,'title':'','rotation':{'transform':'rotate('+getRotation()+'deg)'}},
            {'src':'img/exercise1/5.png','id':5,'title':'','rotation':{'transform':'rotate('+getRotation()+'deg)'}},
            {'src':'img/exercise1/6.png','id':6,'title':'','rotation':{'transform':'rotate('+getRotation()+'deg)'}}
        ];
        $scope.tick = cssTick;
        $scope.inputValues = exercises;
        $scope.showTest=false;
        $scope.checkValues = function(){
            if($scope.showTest){
                $scope.tick = cssTick;
                $scope.showTest=false;
                $scope.opacity = {'opacity':0};
                //$scope.switchBack = {'background-color':'#fff'};
            }else{
                angular.forEach($scope.inputValues,function(value,key){
                    if(value.val===value.ans){
                        $scope.inputValues[key].correct=true;
                    }else{
                        $scope.inputValues[key].false=true;
                    }
                });
                $scope.opacity = {'opacity':1};
                //$scope.switchBack = {'background-color':'#f6f5f5'};
                $scope.tick = cssRefresh;
                $scope.showTest=true;
            }
            
        };
  }])
  .controller('Exercise2', ['$scope', function($scope) {
        $scope.inputValues = wordMatch;
        
        $scope.wordList = [
            {'id':1,'text':'snowing'},
            {'id':2,'text':'cloudy'},
            {'id':3,'text':'raining'},
            {'id':4,'text':'foggy'},
            {'id':5,'text':'windy'},
            {'id':6,'text':'sunny'}
        ];
        $scope.tick = cssTick;
        $scope.showTest=false;
        $scope.checkValues = function(){
            if($scope.showTest){
                $scope.tick = cssTick;
                $scope.showTest=false;
                $scope.opacity = {'opacity':0};
                //$scope.switchBack = {'background-color':'#fff'};
            }else{
                angular.forEach($scope.inputValues,function(value,key){
                    console.log([value.val,value.ans,$scope.inputValues[key]]);
                    //if(value.val.toUpperCase().replace(/\s/g, '')===value.ans.toUpperCase()){
                    if(value.val.toUpperCase().trim()===value.ans.toUpperCase()){
                        $scope.inputValues[key].correct=true;
                    }else{
                        $scope.inputValues[key].false=true;
                    }
                });
                $scope.opacity = {'opacity':1};
                //$scope.switchBack = {'background-color':'#f6f5f5'};
                $scope.tick = cssRefresh;
                $scope.showTest=true;
            }
            
        };
  }]);
  
