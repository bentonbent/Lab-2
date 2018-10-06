var app = angular.module('toe', []);
    app.controller('toeC', function ($scope, $http) {

        var X='blue';
        var O='green';
        var count =0;

        $scope.myStyle1={color:"blue"};
        $scope.myStyle2={color:"green"};


        $scope.reset = function () {
                clearGrid();
                document.getElementsByTagName("tr").className="";
            $scope.nextMove = X;
            };

        $scope.change= function(id) {

            if (document.getElementById(id).className == "") {
                document.getElementById(id).className = $scope.nextMove;
                $scope.nextMove = $scope.nextMove == X ? O : X;
                count+=1;
            }
            if(count>=9){
                $scope.nextMove='GAME OVER!'
            }
        };


        $scope.reset();

        function clearGrid(){
            document.getElementById('11').className='';
            document.getElementById('12').className='';
            document.getElementById('13').className='';
            document.getElementById('21').className='';
            document.getElementById('22').className='';
            document.getElementById('23').className='';
            document.getElementById('31').className='';
            document.getElementById('32').className='';
            document.getElementById('33').className='';

            count=0;
        }

        $scope.youSearch = function() {


            var q = document.getElementById(query);

            $scope.youTubeVideos = [];
            $http.get('https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=3&q='+q+'&type=video&key='+
                'AIzaSyC9up-uYeS1SjYPhPqphWMVzKZ5FJ6ifO0')

                .success(function (data) {
                $scope.youTubeVideos = data.items;

                console.log('youTubeVideos')
                })


        }

    });
