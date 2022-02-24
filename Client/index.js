var myapp=angular.module("myapp",[]);

myapp.controller("myctrl",function($scope,$http){
    $http.get("http://127.0.0.1:5700/display").success(function(response){$scope.names=response;});
    console.log("json loading success");
});

myapp.filter('onlyINDIA', function () {
    return function (input,address ) {
        var output = [];
        if (isNaN(address)) {
  
            output = input;
        }
        else {
            angular.forEach(input, function (item) {
                if (item.ADDRESS == "INDIA") {
                    output.push(item)
                }
            });
        }
        return output;
    }
  })

  myapp.filter('onlyCORNERBACK', function () {
    return function (input, specialisation) {
        var output = [];
        if (isNaN(specialisation)) {
  
            output = input;
        }
        else {
            angular.forEach(input, function (item) {
                if (item.SPECIALISATION == "CORNERBACK") {
                    output.push(item)
                }
            });
        }
        return output;
    }
  })

  