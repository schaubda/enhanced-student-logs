// noinspection t

'use strict';
define(function (require)
       {
           var module = require('components/eslogs/module');

           module.controller('esLogsListCtrl', [
               '$scope',
               function ($scope)
               {
                   // Controller code goes here

                   $scope.loadLogEntries = () =>
                   {
                       console.log('AngularJS initialized');
                   }
               }
           ]);
       });