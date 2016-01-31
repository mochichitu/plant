angular.module('App.userprofile-chartsCtrl',[
  ])
  .controller('userprofile-chartsCtrl', function($scope, appFactory, userProfileFactory){

    $scope.renderWaterChart = function() {
      userProfileFactory.getChartData('water').then(function(result){

       var chartData = result.data.values;
       var waterData = [];

       for(var i = 0; i < chartData.length; i+=300){
           var year = parseInt(chartData[i].timestamp.slice(0,4));
           var month = parseInt(chartData[i].timestamp.slice(5,7)) - 1;
           var day = parseInt(chartData[i].timestamp.slice(8,10));
           var hour = parseInt(chartData[i].timestamp.slice(11,13));
           var min = parseInt(chartData[i].timestamp.slice(14,16));
           var sec = parseInt(chartData[i].timestamp.slice(17,19));
           waterData.unshift([Date.UTC(year, month, day, hour, min, sec), parseFloat((chartData[i].value).toFixed(2))]);
       }

        $(function () {
          $('#mainChart').highcharts({
            chart: {
              type: 'spline'
            },
            title: {
              text: 'Moisture level of plant'
            },
            xAxis: {
              type: 'datetime',
              dateTimeLabelFormats: { // don't display the dummy year
              minute: '%H:%M',
              hour: '%H:%M'
              },
              title: {
                text: 'Time'
              }
            },
            yAxis: {
              title: {
                text: 'Level'
              },
              min: 0,
              minorGridLineWidth: 0,
              gridLineWidth: 0,
              alternateGridColor: null,
              plotBands: [{
                from: 0,
                to: 100,
                color: 'rgba(255,0,0,0.3)',
                label: {
                  text: 'Danger',
                  style: {
                    color: '#606060'
                  }
                }
              }, {
                from: 101,
                to: 400,
                color: 'rgba(50,50,255,0)',
                label: {
                  text: 'Dry',
                  style: {
                    color: '#606060'
                  }
                }
              }, {
                from: 401,
                to: 700,
                color: 'rgba(50,50,255,0.05)',
                label: {
                  text: 'Perfect',
                  style: {
                    color: '#606060'
                  }
                }
              }, {
                from: 701,
                to: 1020,
                color: 'rgba(50,50,255,0.1)',
                label: {
                  text: 'Drenched',
                  style: {
                    color: '#606060'
                  }
                }
              }]
            },
            tooltip: {
              headerFormat: '<b>{series.name}</b><br>',
              pointFormat: '{point.x:%H:%M}: {point.y:.2f}'
            },
            plotOptions: {
              spline: {
                marker: {
                  enabled: false
                }
              }
            },
            series: [{
              name: 'Moisture level',
              data: waterData
            }]
          });
        });
      })
    }

    $scope.renderLightChart = function() {
      userProfileFactory.getChartData('light').then(function(result){
        var chartData = result.data.values;

        var lightData = [];

        for(var i = 0; i < chartData.length; i+=300){
          var year = parseInt(chartData[i].timestamp.slice(0,4));
          var month = parseInt(chartData[i].timestamp.slice(5,7)) - 1;
          var day = parseInt(chartData[i].timestamp.slice(8,10));
          var hour = parseInt(chartData[i].timestamp.slice(11,13));
          var min = parseInt(chartData[i].timestamp.slice(14,16));
          var sec = parseInt(chartData[i].timestamp.slice(17,19));
          lightData.unshift([Date.UTC(year, month, day, hour, min, sec), parseFloat((chartData[i].value).toFixed(2))]);
        }

        $(function () {
          $('#mainChart').highcharts({
            chart: {
              type: 'spline'
            },
            title: {
              text: 'Light level of plant'
            },
            xAxis: {
              type: 'datetime',
              dateTimeLabelFormats: { // don't display the dummy year
              minute: '%H:%M',
              hour: '%H:%M'
              },
              title: {
                text: 'Time'
              }
            },
            yAxis: {
              title: {
                text: 'Level'
              },
              min: 0,
              minorGridLineWidth: 0,
              gridLineWidth: 0,
              alternateGridColor: null,
              plotBands: [{
                from: 1,
                to: 339,
                color: 'rgba(255,255,0,0)',
                label: {
                  text: 'Shady',
                  style: {
                    color: '#606060'
                  }
                }
              }, {
                from: 340,
                to: 680,
                color: 'rgba(255,255,0,0.2)',
                label: {
                  text: 'Partially sunny',
                  style: {
                    color: '#606060'
                  }
                }
              }, {
                from: 681,
                to: 1050,
                color: 'rgba(255,255,0,0.3)',
                label: {
                  text: 'Sunny',
                  style: {
                    color: '#606060'
                  }
                }
              }]
            },
            tooltip: {
              headerFormat: '<b>{series.name}</b><br>',
              pointFormat: '{point.x:%H:%M}: {point.y:.2f}'
            },
            plotOptions: {
              spline: {
                marker: {
                  enabled: false
                }
              }
            },
            series: [{
              color: '#D7DF01',
              name: 'Light level',
              data: lightData
            }]
          });
        });
      })   
    }

    $scope.renderTempChart = function() {
      userProfileFactory.getChartData('temp').then(function(result){
        
        var chartData = result.data.values;
        var tempData = [];

        for(var i = 0; i < chartData.length; i+=300){
          var year = parseInt(chartData[i].timestamp.slice(0,4));
          var month = parseInt(chartData[i].timestamp.slice(5,7)) - 1;
          var day = parseInt(chartData[i].timestamp.slice(8,10));
          var hour = parseInt(chartData[i].timestamp.slice(11,13));
          var min = parseInt(chartData[i].timestamp.slice(14,16));
          var sec = parseInt(chartData[i].timestamp.slice(17,19));
          tempData.unshift([Date.UTC(year, month, day, hour, min, sec), parseFloat((chartData[i].value * 1.8 + 32).toFixed(2))]);
        }

        $(function () {
          $('#mainChart').highcharts({
            chart: {
              type: 'spline'
            },
            title: {
              text: 'Temperature of plant'
            },
            xAxis: {
              type: 'datetime',
              dateTimeLabelFormats: { // don't display the dummy year
                minute: '%H:%M',
                hour: '%H:%M'
              },
              title: {
                text: 'Time'
              }
            },
            yAxis: {
              title: {
                text: 'Degrees (°F)'
              },
              min: 0
            },
            tooltip: {
              headerFormat: '<b>{series.name}</b><br>',
              pointFormat: '{point.x:%H:%M}: {point.y:.2f} °F'
            },
            plotOptions: {
              spline: {
                marker: {
                  enabled: false
                }
              }
            },
            series: [{
              color: '#F5A9A9',
              name: 'Temperature',
              data: tempData
            }]
          });
        });
      })
    }

  })