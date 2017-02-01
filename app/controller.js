/**
 * Main application controller
 *
 * You can use this controller for your whole app if it is small
 * or you can have separate controllers for each logical section
 * 
 */
;(function() {
  var myApp = angular.module('pokedex');

  myApp.controller('PokeBodyController',['$scope', 'LocalStorage', PokeBodyController]);

  function PokeBodyController($scope, LocalStorage) {
    $scope.sortOptions = {
      'ename' : 'Name',
      'id'    : 'ID',
      'type'  : 'Type'
    };
    $scope.sort = "ename";
    $scope.typeIncludes = [];
    $scope.pokeTypes = [];

    $scope.closeUp = function($event){
        var closeItem = $(event.target);  
            $event.stopPropagation();

            closeItem.parent().removeClass('expand');
    }

    $scope.showDetails = function(event, baseObject) {
        var curItem = $(event.target),
            myBarChart,ctx, 
            dataArr = [], 
            labelArr = [],
            colorArr = [
                          'rgba(255, 99, 132, 1)',
                          'rgba(54, 162, 235, 1)',
                          'rgba(0, 0, 204, 1)',
                          'rgba(75, 192, 192, 1)',
                          'rgba(153, 102, 255, 1)',
                          'rgba(255, 159, 64, 1)'
                        ];

            for (var property in baseObject) {

               if ( ! baseObject.hasOwnProperty(property)) {
                  continue;
               }

               labelArr.push(property);
               dataArr.push(baseObject[property]);

            }
            
            curItem = $(event.target).closest('.poke-item');
            curItem.siblings().removeClass('expand');
            curItem.addClass('expand');
            $('html, body').animate({
                scrollTop: curItem.offset().top
            }, 500);

            ctx = curItem.find('.power-level');

            data = {
                labels: labelArr,
                datasets: [
                    {
                        data: dataArr,
                        backgroundColor: colorArr
                    }
                ]
            };

            myBarChart = new Chart(ctx, {
                type: 'bar',
                data: data,
                options: {
                    scales: {
                        responsive: true,
                        maintainAspectRatio: false,
                        yAxes: [{
                            ticks: {
                                beginAtZero:true,
                                fontSize: 16
                            },
                            gridLines: {
                                display:false
                            }
                        }],
                        xAxes: [{
                            ticks: {
                                fontSize: 16
                            },
                            gridLines: {
                                display:false
                            }
                        }]
                    },
                    title: {
                        display: true,
                        text: 'Specifications',
                        fontSize: 20
                    },
                    legend: {
                        display: false
                    }
                }
            });
    };  

    $scope.setSort = function(type, event) {
       var curItem = $(event.target),
           curItemIcon = curItem.find('.icon');
           if(!curItem.hasClass('active')){
             curItem.siblings().removeClass('active');
             curItem.addClass('active'); 
           }

      if ($scope.sort === type.toLowerCase()) {
          $scope.sort = '-' + type.toLowerCase();
          sortDesc(curItemIcon);  
          
      } else if ($scope.sort === '-' + type.toLowerCase()) {
          $scope.sort = type.toLowerCase();
          sortAsc(curItemIcon);
          
      } else {
          $scope.sort = type.toLowerCase();
          sortAsc(curItemIcon);
      } 
    };
    
    $scope.includeType = function(type) {
        
        var i = $.inArray(type, $scope.typeIncludes);
        if (i > -1) {
            $scope.typeIncludes.splice(i, 1);
        } else {
            $scope.typeIncludes.push(type);
        }
    }

    $scope.filterType = function(pokeData) {
      
        if ($scope.typeIncludes.length > 0) {
            if (!hasCommonElement(pokeData.type, $scope.typeIncludes)){
                return;
            }
        }  
        return pokeData;
    }

    $scope.getTypeEnglish = function(inputArr) {
        var returnData = '';    

        $.each($scope.pokeTypes, function(i, obj){
            if($.inArray(obj.cname,inputArr)!=-1){
                returnData += obj.ename + ', ';
            }
        });



        returnData = returnData.substring(0, returnData.length - 2);
        
        return returnData;
    }

    $scope.showFilter = function($event){
      if($(window).width() < 767) {
              var $filterBlock = $('.filter-block'),
                  $curSpan = $($event.target);

                if($curSpan.hasClass('icon-filter')){
                      $filterBlock.addClass('show-filter');
                      $curSpan.removeClass('icon-filter');
                      $curSpan.addClass('icon-cross');
                }
                else if($curSpan.hasClass('icon-cross')){
                      $filterBlock.removeClass('show-filter');
                      $curSpan.removeClass('icon-cross');
                      $curSpan.addClass('icon-filter');
                }
          }
    }

    LocalStorage.getData().then(function(response) {
      $scope.pokeData = response.data;
    });

    LocalStorage.getTypes().then(function(response) {
      $scope.pokeTypes = response.data;
    });


  }

  var hasCommonElement = function (arr1,arr2){
     var bExists = false;
     $.each(arr2, function(index, value){

       if($.inArray(value,arr1)!=-1){
          bExists = true;
       }

       if(bExists){
           return false;  //break
       }
     });
     return bExists;
  }

  function sortAsc(curItemIcon){
    if(curItemIcon.hasClass('icon-long-arrow-up')){
      curItemIcon.removeClass('icon-long-arrow-up').addClass('icon-long-arrow-down')
    }
  }

  function sortDesc(curItemIcon){
    if(curItemIcon.hasClass('icon-long-arrow-down')){
        curItemIcon.removeClass('icon-long-arrow-down').addClass('icon-long-arrow-up')
    }
  }

})();