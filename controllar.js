app.controller("myCtrl", function ($scope, $http) {
    $scope.firstName = "John";
    $scope.lastName = "Doe";
    $scope.hello = () => {
        return "hello world!"
    }
    $scope.objresult = [{ name: "hasmukh", proffesion: "Er" }, { name: "Neha", proffesion: "Dr" }]
    
    // http service
    $http.get('https://gorest.co.in/public/v2/users').then((res) => {
        $scope.users = res.data
    }, (err) => {
        console.log(err);
    })
    //  $scope.names=$scope.users?.map(obj=>{return obj.name}) 
    $scope.getname=()=>{
      
       return $scope.users?.map(obj=>{return obj.name})
    } 
    $scope.visible=true ;
    $scope. clk=()=>{
        $scope.visible =false
    }
    $scope.userform={name:'',status:'',gender:'',email:''}
});
 